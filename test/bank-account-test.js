const assert = require('assert');

describe('Bank Account', () => {
    describe('Current', () => {
        it('Saldo actual correcto', () => {
            let bankAcc = new BankAccount(300.00);
            assert.strictEqual(bankAcc.current(), bankAcc.saldo);
        })
    })
    describe('Append', () => {
        it('Agregar cantidad correcta al saldo', () => {
            let bankAcc = new BankAccount(300.00);
            assert.strictEqual(bankAcc.append(parseFloat(100.00)), bankAcc.saldo);
        })
    })
    describe('Substract', () => {
        it('Extraer la cantidad correcta', () => {
            let bankAcc = new BankAccount(300.00);
            assert.strictEqual(bankAcc.substract(200.00), bankAcc.saldo);
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
        this.saldo = parseFloat(saldo)
    }

    current() {
        return parseFloat(this.saldo);
    }

    append(amount){
        if(amount > 0){
            this.saldo = this.current() + amount
            return this.current();
        } else {
            return this.current();
        }
    }

    substract(amount){
        if(amount > 0){
            this.saldo = this.current() - amount
            return this.current();
        } else {
            return this.current();
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
        var hist = []
        return hist;
    }
  }