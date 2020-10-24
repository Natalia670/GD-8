const assert = require('assert');

describe('Bank Account', () => {
    describe('Current', () => {
        it('Saldo actual correcto', () => {
            let bankAcc = new BankAccount(300);
            assert.strictEqual(bankAcc.current(), bankAcc.saldo);
        })
    })
    describe('Append', () => {
        it('Agregar cantidad correcta al saldo', () => {
            let bankAcc = new BankAccount(300);
            assert.strictEqual(bankAcc.append(100), bankAcc.saldo);
        })
    })
    describe('Substract', () => {
        it('Extraer la cantidad correcta', () => {
            let bankAcc = new BankAccount(300);
            assert.strictEqual(bankAcc.substract(200), bankAcc.saldo);
        })
    })

    describe('Merge', () => {
        it('agrega a original', () => {
            let bankAcc = new BankAccount(300);
            assert.strictEqual(bankAcc.substract(200), bankAcc.saldo);
        })
    })

    describe('History', () => {
        it('Extraer la cantidad correcta', () => {
            let bankAcc = new BankAccount(300);
            assert.strictEqual(bankAcc.substract(200), bankAcc.saldo);
        })
    })
})

class BankAccount {
    constructor(saldo) {
        this.saldo = saldo
    }

    current() {
        return 0;
    }

    append(amount){
        if(amount > 0){
            return 1;
        }
    }

    substract(amount){
        if(amount > 0){
            return 2;
        }
    }

    merge(account){
        if(account > 0){
            return 3;
        }else{
            return 4;
        }
    }

    history(){
        var hist = {
            hora: String,
            saldo: Int
        };
        return hist;
    }
  }