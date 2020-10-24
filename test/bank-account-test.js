const assert = require('assert');

describe('Bank Account', () => {
    describe('Current', () => {
        it('Saldo actual correcto', () => {
            let bankAcc = new BankAccount(300.45);
            assert.strictEqual(bankAcc.current(), bankAcc.saldo);
        })
    })
    describe('Append', () => {
        it('Agregar cantidad correcta al saldo', () => {
            let bankAcc = new BankAccount(600.00);
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
        it('Agrega a original', () => {
            let bankAcc = new BankAccount(500.00);
            bankAcc.append(100.00)
            let bankAcc2 = new BankAccount(parseFloat(400.00));
            bankAcc2.append(200.00)
            assert.strictEqual(bankAcc.merge(bankAcc2), bankAcc.saldo);
        })
    })

    describe('History', () => {
        it('Extraer la cantidad correcta', () => {
            let bankAcc = new BankAccount(300.00);
            bankAcc.append(100.00)
            assert.deepStrictEqual(bankAcc.history(), JSON.parse('[{"movimiento":"Deposito de: 100"}]'));
        })
    })
})

class BankAccount {
    constructor(saldo) {
        this.saldo = parseFloat(saldo)
    }

    hist = []

    current() {
        return parseFloat(this.saldo);
    }

    append(amount){
        if(amount > 0){
            this.saldo = this.current() + amount
            this.hist.push({movimiento:"Deposito de: "+ amount})
            return this.current();
        } else {
            return this.current();
        }
    }

    substract(amount){
        if(amount > 0){
            this.saldo = this.current() - amount
            this.hist.push({movimiento:"Retiro de: "+ amount})
            return this.current();
        } else {
            return this.current();
        }
    }

    merge(account){
        this.saldo = this.saldo + account.saldo
        this.hist.push(account.history()) 
        return this.current();
    }

    history(){
        return this.hist;
    }
  }