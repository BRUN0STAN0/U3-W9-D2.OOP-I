"use strict";
class BankAccount {
  constructor(dayAfterActivation) {
    this.balanceInit = 0;
    this.tax = 0;
    this.dayAfterActivation = 0;
    this.dayAfterActivation = dayAfterActivation;
  }
  deposit(amount) {
    return (this.balanceInit += amount);
  }
  withdraw(amount) {
    if (this.balanceInit > amount) {
      return (this.balanceInit -= amount);
    } else {
      alert("Non hai fondi sufficienti");
    }
  }
  addInterest() {
    return (this.balanceInit += Math.round(((this.balanceInit * this.tax * this.dayAfterActivation) / 36500) * 100) / 100);
  }
  saldo() {
    return this.balanceInit;
  }
}
class BankAccount_PromoOver18 extends BankAccount {
  constructor() {
    super(...arguments);
    this.tax = 10;
  }
}
class BankAccountUnder18 extends BankAccount {}
let SonAccount = new BankAccountUnder18(12);
let MotherAccount = new BankAccount_PromoOver18(150);
MotherAccount.deposit(100);
// MotherAccount.addInterest();
// MotherAccount.withdraw(10);
// MotherAccount.saldo();
let bankAccount = document.getElementById("BankAccount");
let prelievo = document.getElementById("prelievo");
let saldo = document.getElementById("saldo");
let deposito = document.getElementById("deposito");
bankAccount === null || bankAccount === void 0
  ? void 0
  : bankAccount.addEventListener("change", () => {
      saldo.value = "0";
      let whoAreYou = document.getElementById("BankAccount");
      if (whoAreYou.selectedIndex == 1) {
        prelievo.value = "";
        deposito.value = "";
        saldo.value = String(MotherAccount.saldo());
        prelievo.onkeyup = (e) => {
          if (e.key == "Enter") {
            MotherAccount.withdraw(Number(prelievo.value));
            saldo.value = String(MotherAccount.saldo());
            prelievo.value = "";
          }
        };
        deposito.onkeyup = (e) => {
          if (e.key == "Enter") {
            MotherAccount.deposit(Number(deposito.value));
            saldo.value = String(MotherAccount.saldo());
            deposito.value = "";
          }
        };
      } else if (whoAreYou.selectedIndex == 2) {
        prelievo.value = "";
        deposito.value = "";
        saldo.value = String(SonAccount.saldo());
        prelievo.onkeyup = (e) => {
          if (e.key == "Enter") {
            SonAccount.withdraw(Number(prelievo.value));
            saldo.value = String(SonAccount.saldo());
            prelievo.value = "";
          }
        };
        deposito.onkeyup = (e) => {
          if (e.key == "Enter") {
            SonAccount.deposit(Number(deposito.value));
            saldo.value = String(SonAccount.saldo());
            deposito.value = "";
          }
        };
      } else {
        saldo.value = "";
        prelievo.value = "";
        deposito.value = "";
      }
    });
