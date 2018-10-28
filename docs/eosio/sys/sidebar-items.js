initSidebarItems({"constant":[["NAME_CHARS",""]],"enum":[["ParseNameError",""],["ParseSymbolError",""]],"fn":[["action_data_size","Get the length of the current action's data field. This method is useful for dynamically sized actions"],["activate_feature","@brief Activate new feature Activate new feature @param f - name (identifier) of the feature to be activated"],["assert_recover_key","Tests a given public key with the generated key from digest and the signature. @brief Tests a given public key with the generated key from digest and the signature."],["assert_ripemd160","Tests if the ripemod160 hash generated from data matches the provided checksum. @brief Tests if the ripemod160 hash generated from data matches the provided checksum."],["assert_sha1","Tests if the sha1 hash generated from data matches the provided checksum. This method is optimized to a NO-OP when in fast evaluation mode. @brief Tests if the sha1 hash generated from data matches the provided checksum."],["assert_sha256","Tests if the sha256 hash generated from data matches the provided checksum. This method is optimized to a NO-OP when in fast evaluation mode. @brief Tests if the sha256 hash generated from data matches the provided checksum."],["assert_sha512","Tests if the sha512 hash generated from data matches the provided checksum. This method is optimized to a NO-OP when in fast evaluation mode. @brief Tests if the sha512 hash generated from data matches the provided checksum."],["cancel_deferred","Cancels a deferred transaction."],["check_permission_authorization","@brief Checks if a permission is authorized by a provided delay and a provided set of keys and permissions"],["check_transaction_authorization","@brief Checks if a transaction is authorized by a provided set of keys and permissions"],["current_receiver","Get the current receiver of the action @brief Get the current receiver of the action @return the account which specifies the current receiver of the action"],["current_time","Returns the time in microseconds from 1970 of the current block @brief Get time of the current block (i.e. the block including this action) @return time in microseconds from 1970 of the current block"],["db_end_i64","Get an iterator representing just-past-the-end of the last table row of a primary 64-bit integer index table"],["db_find_i64","Find a table row in a primary 64-bit integer index table by primary key"],["db_get_i64","Get a record in a primary 64-bit integer index table"],["db_idx128_end","Get an end iterator representing just-past-the-end of the last table row of a secondary 128-bit integer index table"],["db_idx128_find_primary","Find a table row in a secondary 128-bit integer index table by primary key"],["db_idx128_find_secondary","Find a table row in a secondary 128-bit integer index table by secondary key"],["db_idx128_lowerbound","Find the table row in a secondary 128-bit integer index table that matches the lowerbound condition for a given secondary key The table row that matches the lowerbound condition is the first table row in the table with the lowest secondary key that is >= the given key"],["db_idx128_next","Find the table row following the referenced table row in a secondary 128-bit integer index table"],["db_idx128_previous","Find the table row preceding the referenced table row in a secondary 128-bit integer index table"],["db_idx128_remove","Remove a table row from a secondary 128-bit integer index table"],["db_idx128_store","Store an association of a 128-bit integer secondary key to a primary key in a secondary 128-bit integer index table"],["db_idx128_update","Update an association for a 128-bit integer secondary key to a primary key in a secondary 128-bit integer index table"],["db_idx128_upperbound","Find the table row in a secondary 128-bit integer index table that matches the upperbound condition for a given secondary key The table row that matches the upperbound condition is the first table row in the table with the lowest secondary key that is > the given key"],["db_idx256_end","Get an end iterator representing just-past-the-end of the last table row of a secondary 256-bit index table"],["db_idx256_find_primary","Find a table row in a secondary 256-bit index table by primary key"],["db_idx256_find_secondary","Find a table row in a secondary 256-bit index table by secondary key"],["db_idx256_lowerbound","Find the table row in a secondary 256-bit index table that matches the lowerbound condition for a given secondary key The table row that matches the lowerbound condition is the first table row in the table with the lowest secondary key that is >= the given key (uses lexicographical ordering on the 256-bit keys)"],["db_idx256_next","Find the table row following the referenced table row in a secondary 256-bit index table"],["db_idx256_previous","Find the table row preceding the referenced table row in a secondary 256-bit index table"],["db_idx256_remove","Remove a table row from a secondary 256-bit index table"],["db_idx256_store","Store an association of a 256-bit secondary key to a primary key in a secondary 256-bit index table"],["db_idx256_update","Update an association for a 256-bit secondary key to a primary key in a secondary 256-bit index table"],["db_idx256_upperbound","Find the table row in a secondary 256-bit index table that matches the upperbound condition for a given secondary key The table row that matches the upperbound condition is the first table row in the table with the lowest secondary key that is > the given key (uses lexicographical ordering on the 256-bit keys)"],["db_idx64_end","Get an end iterator representing just-past-the-end of the last table row of a secondary 64-bit integer index table"],["db_idx64_find_primary","Find a table row in a secondary 64-bit integer index table by primary key"],["db_idx64_find_secondary","Find a table row in a secondary 64-bit integer index table by secondary key"],["db_idx64_lowerbound","Find the table row in a secondary 64-bit integer index table that matches the lowerbound condition for a given secondary key The table row that matches the lowerbound condition is the first table row in the table with the lowest secondary key that is >= the given key"],["db_idx64_next","Find the table row following the referenced table row in a secondary 64-bit integer index table"],["db_idx64_previous","Find the table row preceding the referenced table row in a secondary 64-bit integer index table"],["db_idx64_remove","Remove a table row from a secondary 64-bit integer index table"],["db_idx64_store","Store an association of a 64-bit integer secondary key to a primary key in a secondary 64-bit integer index table"],["db_idx64_update","Update an association for a 64-bit integer secondary key to a primary key in a secondary 64-bit integer index table"],["db_idx64_upperbound","Find the table row in a secondary 64-bit integer index table that matches the upperbound condition for a given secondary key The table row that matches the upperbound condition is the first table row in the table with the lowest secondary key that is > the given key"],["db_idx_double_end","Get an end iterator representing just-past-the-end of the last table row of a secondary double-precision floating-point index table"],["db_idx_double_find_primary","Find a table row in a secondary double-precision floating-point index table by primary key"],["db_idx_double_find_secondary","Find a table row in a secondary double-precision floating-point index table by secondary key"],["db_idx_double_lowerbound","Find the table row in a secondary double-precision floating-point index table that matches the lowerbound condition for a given secondary key The table row that matches the lowerbound condition is the first table row in the table with the lowest secondary key that is >= the given key"],["db_idx_double_next","Find the table row following the referenced table row in a secondary double-precision floating-point index table"],["db_idx_double_previous","Find the table row preceding the referenced table row in a secondary double-precision floating-point index table"],["db_idx_double_remove","Remove a table row from a secondary double-precision floating-point index table"],["db_idx_double_store","Store an association of a double-precision floating-point secondary key to a primary key in a secondary double-precision floating-point index table"],["db_idx_double_update","Update an association for a double-precision floating-point secondary key to a primary key in a secondary double-precision floating-point index table"],["db_idx_double_upperbound","Find the table row in a secondary double-precision floating-point index table that matches the upperbound condition for a given secondary key The table row that matches the upperbound condition is the first table row in the table with the lowest secondary key that is > the given key"],["db_idx_long_double_end","Get an end iterator representing just-past-the-end of the last table row of a secondary quadruple-precision floating-point index table"],["db_idx_long_double_find_primary","Find a table row in a secondary quadruple-precision floating-point index table by primary key"],["db_idx_long_double_find_secondary","Find a table row in a secondary quadruple-precision floating-point index table by secondary key"],["db_idx_long_double_lowerbound","Find the table row in a secondary quadruple-precision floating-point index table that matches the lowerbound condition for a given secondary key The table row that matches the lowerbound condition is the first table row in the table with the lowest secondary key that is >= the given key"],["db_idx_long_double_next","Find the table row following the referenced table row in a secondary quadruple-precision floating-point index table"],["db_idx_long_double_previous","Find the table row preceding the referenced table row in a secondary quadruple-precision floating-point index table"],["db_idx_long_double_remove","Remove a table row from a secondary quadruple-precision floating-point index table"],["db_idx_long_double_store","Store an association of a quadruple-precision floating-point secondary key to a primary key in a secondary quadruple-precision floating-point index table"],["db_idx_long_double_update","Update an association for a quadruple-precision floating-point secondary key to a primary key in a secondary quadruple-precision floating-point index table"],["db_idx_long_double_upperbound","Find the table row in a secondary quadruple-precision floating-point index table that matches the upperbound condition for a given secondary key The table row that matches the upperbound condition is the first table row in the table with the lowest secondary key that is > the given key"],["db_lowerbound_i64","Find the table row in a primary 64-bit integer index table that matches the lowerbound condition for a given primary key The table row that matches the lowerbound condition is the first table row in the table with the lowest primary key that is >= the given key"],["db_next_i64","Find the table row following the referenced table row in a primary 64-bit integer index table"],["db_previous_i64","Find the table row preceding the referenced table row in a primary 64-bit integer index table"],["db_remove_i64","Remove a record from a primary 64-bit integer index table"],["db_store_i64","Store a record in a primary 64-bit integer index table"],["db_update_i64","Update a record in a primary 64-bit integer index table"],["db_upperbound_i64","Find the table row in a primary 64-bit integer index table that matches the upperbound condition for a given primary key The table row that matches the upperbound condition is the first table row in the table with the lowest primary key that is > the given key"],["eosio_assert","Aborts processing of this action and unwinds all pending changes if the test condition is true @brief Aborts processing of this action and unwinds all pending changes @param test - 0 to abort, 1 to ignore"],["eosio_assert_code","Aborts processing of this action and unwinds all pending changes if the test condition is true @brief Aborts processing of this action and unwinds all pending changes @param test - 0 to abort, 1 to ignore @param code - the error code"],["eosio_assert_message","Aborts processing of this action and unwinds all pending changes if the test condition is true @brief Aborts processing of this action and unwinds all pending changes @param test - 0 to abort, 1 to ignore @param msg - a pointer to the start of string explaining the reason for failure @param msg_len - length of the string"],["eosio_exit","This method will abort execution of wasm without failing the contract. This is used to bypass all cleanup / destructors that would normally be called. @brief Aborts execution of wasm without failing the contract @param code - the exit code Example:"],["expiration","Gets the expiration of the currently executing transaction."],["get_account_creation_time","@brief Returns the creation time of an account"],["get_action","Retrieves the indicated action from the active transaction."],["get_active_producers","Gets the set of active producers. @brief Gets the set of active producers."],["get_blockchain_parameters_packed","@brief Retrieve the blolckchain parameters Retrieve the blolckchain parameters @param data - output buffer of the blockchain parameters, only retrieved if sufficent size to hold packed data. @param datalen - size of the data buffer, 0 to report required size. @return size of the blockchain parameters @pre `data` is a valid pointer to a range of memory at least `datalen` bytes long @post `data` is filled with packed blockchain parameters"],["get_context_free_data","Retrieve the signed_transaction.context_free_data[index]."],["get_permission_last_used","@brief Returns the last used time of a permission"],["get_resource_limits","@brief Get the resource limits of an account Get the resource limits of an account @param account - name of the account whose resource limit to get @param ram_bytes - pointer to `int64_t` to hold retrieved ram limit in absolute bytes @param net_weight - pointer to `int64_t` to hold net limit @param cpu_weight - pointer to `int64_t` to hold cpu limit"],["has_auth","Verifies that @ref name has auth."],["is_account",""],["is_privileged","@brief Check if an account is privileged Check if an account is privileged @param account - name of the account to be checked @return true if the account is privileged @return false if the account is not privileged"],["name_to_string",""],["printdf","Prints value as double-precision floating point number @brief Prints value as double-precision floating point number (i.e. double) @param value of double to be printed"],["printhex",""],["printi","Prints value as a 64 bit signed integer @brief Prints value as a 64 bit signed integer @param value of 64 bit signed integer to be printed"],["printi128","Prints value as a 128 bit signed integer @brief Prints value as a 128 bit signed integer @param value is a pointer to the 128 bit signed integer to be printed"],["printn","Prints a 64 bit names as base32 encoded string @brief Prints a 64 bit names as base32 encoded string @param name - 64 bit name to be printed"],["printqf","Prints value as quadruple-precision floating point number @brief Prints value as quadruple-precision floating point number (i.e. long double) @param value is a pointer to the long double to be printed"],["prints","Prints string @brief Prints string @param cstr - a null terminated string"],["prints_l","Prints string up to given length @brief Prints string @param cstr - pointer to string @param len - len of string to be printed"],["printsf","Prints value as single-precision floating point number @brief Prints value as single-precision floating point number (i.e. float) @param value of float to be printed"],["printui","Prints value as a 64 bit unsigned integer @brief Prints value as a 64 bit unsigned integer @param value of 64 bit unsigned integer to be printed"],["printui128","Prints value as a 128 bit unsigned integer @brief Prints value as a 128 bit unsigned integer @param value is a pointer to the 128 bit unsigned integer to be printed"],["publication_time","Returns the time in microseconds from 1970 of the publication_time @brief Get the publication time @return the time in microseconds from 1970 of the publication_time"],["read_action_data","Copy up to @ref len bytes of current action data to the specified location"],["read_transaction","Access a copy of the currently executing transaction."],["recover_key","Calculates the public key used for a given signature and hash used to create a message. @brief Calculates the public key used for a given signature and hash used to create a message."],["require_auth","Verifies that @ref name exists in the set of provided auths on a action. Throws if not found."],["require_auth2","Verifies that @ref name exists in the set of provided auths on a action. Throws if not found."],["require_recipient","Add the specified account to set of accounts to be notified"],["ripemd160","Hashes `data` using `ripemod160` and stores result in memory pointed to by hash. @brief Hashes `data` using `ripemod160` and stores result in memory pointed to by hash."],["send_context_free_inline","Send an inline context free action in the context of this action's parent transaction"],["send_deferred","Sends a deferred transaction."],["send_inline","Send an inline action in the context of this action's parent transaction"],["set_active_producers","@brief Set new active producers Set new active producers. Producers will only be activated once the block which starts the next round is irrreversible @param producer_data - pointer to producer schedule packed as bytes @param producer_data_size - size of the packed producer schedule @pre `producer_data` is a valid pointer to a range of memory at least `producer_data_size` bytes long that contains serialized produced schedule data"],["set_blockchain_parameters_packed","@brief Set the blockchain parameters Set the blockchain parameters @param data - pointer to blockchain parameters packed as bytes @param datalen - size of the packed blockchain parameters @pre `data` is a valid pointer to a range of memory at least `datalen` bytes long that contains packed blockchain params data"],["set_privileged","@brief Set the privileged status of an account Set the privileged status of an account @param account - name of the account whose privileged account to be set @param is_priv - privileged status"],["set_proposed_producers","Proposes a schedule change, once the block that contains the proposal becomes irreversible, the schedule is promoted to \"pending\" automatically. Once the block that promotes the schedule is irreversible, the schedule will become \"active\" @param producer_data - packed data of produce_keys in the appropriate producer schedule order @param producer_data_size - size of the data buffer"],["set_resource_limits","@brief Set the resource limits of an account Set the resource limits of an account @param account - name of the account whose resource limit to be set @param ram_bytes - ram limit in absolute bytes @param net_weight - fractionally proportionate net limit of available resources based on (weight / total_weight_of_all_accounts) @param cpu_weight - fractionally proportionate cpu limit of available resources based on (weight / total_weight_of_all_accounts)"],["sha1","Hashes `data` using `sha1` and stores result in memory pointed to by hash. @brief Hashes `data` using `sha1` and stores result in memory pointed to by hash."],["sha256","Hashes `data` using `sha256` and stores result in memory pointed to by hash. @brief Hashes `data` using `sha256` and stores result in memory pointed to by hash."],["sha512","Hashes `data` using `sha512` and stores result in memory pointed to by hash. @brief Hashes `data` using `sha512` and stores result in memory pointed to by hash."],["string_to_name",""],["string_to_symbol",""],["symbol_name_length",""],["tapos_block_num","Gets the block number used for TAPOS on the currently executing transaction."],["tapos_block_prefix","Gets the block prefix used for TAPOS on the currently executing transaction."],["transaction_size","Gets the size of the currently executing transaction."]],"mod":[["ctypes",""]],"struct":[["capi_checksum160","@brief 160-bit hash @details 160-bit hash"],["capi_checksum256","@brief 256-bit hash @details 256-bit hash"],["capi_checksum512","@brief 512-bit hash @details 512-bit hash"]],"type":[["capi_name",""]]});