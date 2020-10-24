const assert = require('assert');

describe('Tests', () => {
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
  }