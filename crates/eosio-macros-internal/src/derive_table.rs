use crate::proc_macro::TokenStream;
use proc_macro2::{Ident, Span};
use quote::quote;
use syn::{parse_macro_input, Data, DeriveInput, Fields, Meta};

pub fn expand(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    let eosio = crate::root_path(&input);
    let name = input.ident.clone();

    let generics = input.generics.clone();
    // for param in &mut generics.params {
    //     if let GenericParam::Type(ref mut type_param) = *param {
    //         type_param.bounds.push(parse_quote!(#eosio::Read));
    //     }
    // }
    let (impl_generics, ty_generics, where_clause) = generics.split_for_impl();

    let (is_singleton, table_name) = input.attrs.iter().fold((false, None), |(a, b), attr| {
        match attr.parse_meta() {
            Ok(meta) => {
                match meta.path().get_ident() {
                    Some(name) => {
                        if name == "table_name" {
                            if b.is_some() {
                                panic!("only 1 table_name attribute allowed per struct");
                            }
                            match meta {
                                Meta::NameValue(meta) => {
                                    let lit = meta.lit;
                                    let s = Ident::new(format!("{}", quote!(#lit)).as_str().trim_matches('"'), Span::call_site());
                                    (a, Some(s))
                                }
                                _ => {
                                    panic!("invalid table_name attribute. must be in the form #[table_name = \"test\"]");
                                }
                            }
                        } else if name == "singleton" {
                            if a {
                                panic!("only 1 singleton attribute allowed per struct");
                            }
                            (true, b)
                        } else {
                            (a, b)
                        }
                    }
                    None => (a, b)
                }
            }
            Err(_) => (a, b),
        }
    });

    if table_name.is_none() {
        panic!("#[table_name] attribute must be used when deriving from Table");
    }

    let expanded = match input.data {
        Data::Struct(ref data) => match data.fields {
            Fields::Named(ref fields) => {
                let mut primary_key = None;
                let mut secondary_keys = Vec::new();
                for field in fields.named.iter() {
                    for attr in field.attrs.iter() {
                        let (is_primary, is_secondary) = attr
                            .parse_meta()
                            .map(|m| match m.path().get_ident() {
                                Some(name) => {
                                    (name == "primary", name == "secondary")
                                }
                                None => (false, false),
                            })
                            .unwrap_or_else(|_| (false, false));

                        if is_singleton {
                            if is_primary {
                                panic!("primary key attribute not allowed with singletons");
                            } else if is_secondary {
                                panic!("secondary key attribute not allowed with singletons");
                            }
                        }

                        if is_primary {
                            if primary_key.is_none() {
                                primary_key = field.ident.clone();
                            } else {
                                panic!("only 1 primary key allowed");
                            }
                        }

                        if is_secondary {
                            secondary_keys
                                .push((field.ident.clone(), field.ty.clone()));
                        }
                    }
                }

                if is_singleton {
                    quote! {
                        #[automatically_derived]
                        impl #impl_generics #eosio::Table for #name #ty_generics #where_clause {
                            const NAME: #eosio::TableName = #eosio::TableName::new(#eosio::n!(#table_name));

                            type Row = Self;

                            #[inline]
                            fn primary_key(_row: &Self::Row) -> u64 {
                                Self::NAME.as_u64()
                            }
                        }

                        #[automatically_derived]
                        impl #impl_generics #name #ty_generics #where_clause {
                            #[inline]
                            pub fn singleton<C, S>(code: C, scope: S) -> #eosio::SingletonIndex<Self>
                            where
                                C: Into<AccountName>,
                                S: Into<ScopeName>,
                            {
                                #eosio::SingletonIndex::new(code, scope)
                            }
                        }
                    }
                } else {
                    if primary_key.is_none() {
                        panic!("no primary key found");
                    }
                    if secondary_keys.len() > 16 {
                        panic!("up to 16 secondary keys are allowed");
                    }

                    let mut secondary_keys_expanded = quote!();
                    let mut secondary_keys_constructors = quote!();
                    for i in 0..16 {
                        match secondary_keys.get(i) {
                            Some((ident, ty)) => {
                                secondary_keys_expanded = quote! {
                                    #secondary_keys_expanded
                                    Some(#eosio::SecondaryKey::from(row.#ident)),
                                };
                                let ident = Ident::new(
                                    format!("by_{}", quote!(#ident)).as_str(),
                                    Span::call_site(),
                                );
                                secondary_keys_constructors = quote! {
                                    #secondary_keys_constructors

                                    #[inline]
                                    pub fn #ident<C, S>(code: C, scope: S) -> #eosio::SecondaryTableIndex<#ty, Self>
                                    where
                                        C: Into<#eosio::AccountName>,
                                        S: Into<#eosio::ScopeName>,
                                    {
                                        #eosio::SecondaryTableIndex::new(code, scope, Self::NAME, #i)
                                    }
                                };
                            }
                            None => {
                                secondary_keys_expanded = quote! {
                                    #secondary_keys_expanded
                                    None,
                                };
                            }
                        };
                    }

                    quote! {
                        #[automatically_derived]
                        impl #impl_generics #eosio::Table for #name #ty_generics #where_clause {
                            const NAME: #eosio::TableName = #eosio::TableName::new(#eosio::n!(#table_name));

                            type Row = Self;

                            #[inline]
                            fn primary_key(row: &Self::Row) -> u64 {
                                row.#primary_key.into()
                            }

                            #[inline]
                            fn secondary_keys(row: &Self::Row) -> #eosio::SecondaryKeys {
                                SecondaryKeys::from([
                                    #secondary_keys_expanded
                                ])
                            }
                        }

                        #[automatically_derived]
                        impl #impl_generics #name #ty_generics #where_clause {
                            #secondary_keys_constructors
                        }
                    }
                }
            }
            _ => unimplemented!(),
        },
        _ => unimplemented!(),
    };

    TokenStream::from(expanded)
}
