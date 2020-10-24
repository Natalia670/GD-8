const assert = require('assert');
//const Vector = require('../models/Vector')

describe('Vector Calculator', () => {
    describe('Vector sum', () => {
        it  ('Should do vector SUM correctly', () => {
            let v1 = new Vector(2, 3);
            let v2 = new Vector(1,1);
            let sum = v1.Sum(v2);
            let sumShouldBe = 0;
            assert.strictEqual(sum, sumShouldBe);
            assert.ok
        })
    })

    describe('Vector substraction', () => {
        it  ('Should do vector SUB correctly', () => {
            let v1 = new Vector(2, 3);
            let v2 = new Vector(1,1);
            let sub = v1.Sub(v2);
            let subShouldBe = 0;
            assert.strictEqual(sub, subShouldBe);
            assert.ok
        })
    })

    describe('Vector scalar', () => {
        it  ('Should do vector SCALAR MULT correctly', () => {
            let v1 = new Vector(2, 3);
            let v2 = new Vector(1,1);
            let scalar = v1.Scalar(3);
            let scalarShouldBe = 0;
            assert.strictEqual(scalar, scalarShouldBe);
            assert.ok
        })
    })

    describe('Vector dot', () => {
        it  ('Should do vector DOT MULT correctly', () => {
            let v1 = new Vector(2, 3);
            let v2 = new Vector(1,1);
            let dot = v1.Dot(v2);
            let dotShouldBe = 0;
            assert.strictEqual(dot, dotShouldBe);
            assert.ok
        })
    })


})

class Vector {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    Sum(vector){
        return 0;
    }

    Sub(vector){
        return 1;
    }

    Scalar(num){
        return 2;
    }

    Dot(Vector){
        return 3;
    }
}
