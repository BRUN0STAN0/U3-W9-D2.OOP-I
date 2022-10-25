class BankAccount {
  balanceInit: number = 0;
  tax: number = 0;
  dayAfterActivation: number = 0;
  constructor(dayAfterActivation: number) {
    this.dayAfterActivation = dayAfterActivation;
  }

  deposit(amount: number) {
    return (this.balanceInit += amount);
  }
  withdraw(amount: number) {
    if (this.balanceInit > amount) {
      return (this.balanceInit -= amount);
    } else {
      return "Non hai fondi sufficienti";
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
  tax: number = 10;
}

class BankAccountUnder18 extends BankAccount {}
let SonAccount = new BankAccountUnder18(12);
let MotherAccount = new BankAccount_PromoOver18(150);

MotherAccount.deposit(100);

// MotherAccount.addInterest();
// MotherAccount.withdraw(10);
// MotherAccount.saldo();
let bankAccount = document.getElementById("BankAccount");
let prelievo = document.getElementById("prelievo") as HTMLInputElement;
let saldo = document.getElementById("saldo") as HTMLInputElement;
let deposito = document.getElementById("deposito") as HTMLInputElement;

bankAccount?.addEventListener("change", () => {
  saldo.value = "0";
  let whoAreYou = document.getElementById("BankAccount") as unknown as HTMLOptionsCollection;
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
