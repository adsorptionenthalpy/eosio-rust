use crate::account::AccountName;
use crate::assert::*;
use crate::lib::*;
use crate::symbol::Symbol;
use eosio_macros::*;

#[derive(Debug, PartialEq, Clone, Copy, Default, Read, Write, NumBytes)]
pub struct Asset {
    pub amount: i64,
    pub symbol: Symbol,
}

impl Asset {
    pub fn is_valid(&self) -> bool {
        self.symbol.is_valid()
    }
}

impl Add for Asset {
    type Output = Self;
    fn add(self, other: Self) -> Self {
        eosio_assert(
            self.symbol == other.symbol,
            "attempt to add asset with different symbol",
        );
        let amount = self
            .amount
            .checked_add(other.amount)
            .assert("addition overflow");
        Asset {
            amount,
            symbol: self.symbol,
        }
    }
}

impl AddAssign for Asset {
    fn add_assign(&mut self, other: Self) {
        eosio_assert(
            self.symbol == other.symbol,
            "attempt to add asset with different symbol",
        );
        let amount = self
            .amount
            .checked_add(other.amount)
            .assert("addition overflow");
        self.amount = amount;
    }
}

impl Sub for Asset {
    type Output = Self;
    fn sub(self, other: Self) -> Self {
        eosio_assert(
            self.symbol == other.symbol,
            "attempt to subtract asset with different symbol",
        );
        let amount = self
            .amount
            .checked_sub(other.amount)
            .assert("subtraction overflow");
        Asset {
            amount,
            symbol: self.symbol,
        }
    }
}

impl SubAssign for Asset {
    fn sub_assign(&mut self, other: Self) {
        eosio_assert(
            self.symbol == other.symbol,
            "attempt to subtract asset with different symbol",
        );
        let amount = self
            .amount
            .checked_sub(other.amount)
            .assert("subtraction overflow");
        self.amount = amount;
    }
}

impl Mul for Asset {
    type Output = Self;
    fn mul(self, other: Self) -> Self {
        eosio_assert(
            self.symbol == other.symbol,
            "attempt to multiply asset with different symbol",
        );
        let amount = self
            .amount
            .checked_mul(other.amount)
            .assert("multiplication overflow");
        Asset {
            amount,
            symbol: self.symbol,
        }
    }
}

impl MulAssign for Asset {
    fn mul_assign(&mut self, other: Self) {
        eosio_assert(
            self.symbol == other.symbol,
            "attempt to multiply asset with different symbol",
        );
        let amount = self
            .amount
            .checked_mul(other.amount)
            .assert("multiplication overflow");
        self.amount = amount;
    }
}

impl Div for Asset {
    type Output = Self;
    fn div(self, other: Self) -> Self {
        eosio_assert(
            self.symbol == other.symbol,
            "attempt to divide asset with different symbol",
        );
        eosio_assert(other.amount != 0, "divide by zero");
        let amount = self
            .amount
            .checked_div(other.amount)
            .assert("division overflow");
        Asset {
            amount,
            symbol: self.symbol,
        }
    }
}

impl DivAssign for Asset {
    fn div_assign(&mut self, other: Self) {
        eosio_assert(
            self.symbol == other.symbol,
            "attempt to divide asset with different symbol",
        );
        eosio_assert(other.amount != 0, "divide by zero");
        let amount = self
            .amount
            .checked_div(other.amount)
            .assert("division overflow");
        self.amount = amount;
    }
}

impl Rem for Asset {
    type Output = Self;
    fn rem(self, other: Self) -> Self {
        eosio_assert(
            self.symbol == other.symbol,
            "attempt to remainder asset with different symbol",
        );
        eosio_assert(other.amount != 0, "remainder by zero");
        let amount = self
            .amount
            .checked_rem(other.amount)
            .assert("remainder overflow");
        Asset {
            amount,
            symbol: self.symbol,
        }
    }
}

impl RemAssign for Asset {
    fn rem_assign(&mut self, other: Self) {
        eosio_assert(
            self.symbol == other.symbol,
            "attempt to remainder asset with different symbol",
        );
        eosio_assert(other.amount != 0, "remainder by zero");
        let amount = self
            .amount
            .checked_rem(other.amount)
            .assert("remainder overflow");
        self.amount = amount;
    }
}

#[derive(Debug, PartialEq, Clone, Copy, Default, Read, Write)]
pub struct ExtendedAsset {
    pub quantity: Asset,
    pub contract: AccountName,
}

// impl Add for ExtendedAsset {
//     type Output = Self;
//     fn add(self, other: Self) -> Self {
//         eosio_assert(self.contract == other.contract, "type mismatch");
//         ExtendedAsset {
//             quantity: self.quantity + other.quantity,
//             contract: self.contract,
//         }
//     }
// }

// impl AddAssign for ExtendedAsset {
//     fn add_assign(&mut self, other: Self) {
//         eosio_assert(self.contract == other.contract, "type mismatch");
//         self.quantity += other.quantity
//     }
// }

// impl Sub for ExtendedAsset {
//     type Output = Self;
//     fn sub(self, other: Self) -> Self {
//         eosio_assert(self.contract == other.contract, "type mismatch");
//         ExtendedAsset {
//             quantity: self.quantity - other.quantity,
//             contract: self.contract,
//         }
//     }
// }

// impl SubAssign for ExtendedAsset {
//     fn sub_assign(&mut self, other: Self) {
//         eosio_assert(self.contract == other.contract, "type mismatch");
//         self.quantity -= other.quantity
//     }
// }

// impl Mul for ExtendedAsset {
//     type Output = Self;
//     fn mul(self, other: Self) -> Self {
//         eosio_assert(self.contract == other.contract, "type mismatch");
//         ExtendedAsset {
//             quantity: self.quantity * other.quantity,
//             contract: self.contract,
//         }
//     }
// }

// impl MulAssign for ExtendedAsset {
//     fn mul_assign(&mut self, other: Self) {
//         eosio_assert(self.contract == other.contract, "type mismatch");
//         self.quantity *= other.quantity
//     }
// }

// impl Div for ExtendedAsset {
//     type Output = Self;
//     fn div(self, other: Self) -> Self {
//         eosio_assert(self.contract == other.contract, "type mismatch");
//         ExtendedAsset {
//             quantity: self.quantity / other.quantity,
//             contract: self.contract,
//         }
//     }
// }

// impl DivAssign for ExtendedAsset {
//     fn div_assign(&mut self, other: Self) {
//         eosio_assert(self.contract == other.contract, "type mismatch");
//         self.quantity /= other.quantity
//     }
// }

// impl Rem for ExtendedAsset {
//     type Output = Self;
//     fn rem(self, other: Self) -> Self {
//         eosio_assert(self.contract == other.contract, "type mismatch");
//         ExtendedAsset {
//             quantity: self.quantity % other.quantity,
//             contract: self.contract,
//         }
//     }
// }

// impl RemAssign for ExtendedAsset {
//     fn rem_assign(&mut self, other: Self) {
//         eosio_assert(self.contract == other.contract, "type mismatch");
//         self.quantity %= other.quantity
//     }
// }
