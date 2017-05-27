import Vector from '../src/vector';
import { components, round } from './__utils';

describe('.set()', () => {
    it('be unchanged', () => {
        const vector = new Vector(1, 2).set();
        components(vector, 1, 2);
    })
    it('by single number', () => {
        const vector = new Vector().set(2);
        components(vector, 2, 2);
    })
    it('by double number', () => {
        const vector = new Vector().set(2, 4);
        components(vector, 2, 4);
    })
    it('by vector', () => {
        const source = new Vector(1, 2);
        const vector = new Vector().set(source);
        components(vector, 1, 2);
    })
    it('by array', () => {
        const vector = new Vector().set([1, 2]);
        components(vector, 1, 2);
    })
})

describe('.add()', () => {
    it('be unchanged', () => {
        const vector = new Vector().add();
        components(vector, 0, 0);
    })
    it('increases by 4', () => {
        const vector = new Vector().add(4);
        components(vector, 4, 4);
    })
    it('increases by vector', () => {
        const vector = new Vector();
        const operand = new Vector(2, 4);
        vector.add(operand);
        components(vector, 2, 4);
    })
})

describe('.subtract()', () => {
    it('decreases by 4', () => {
        const vector = new Vector().subtract(4);
        components(vector, -4, -4);
    })
    it('decreases by vector', () => {
        const vector = new Vector();
        const operand = new Vector(2, 4);
        vector.subtract(operand);
        components(vector, -2, -4);
    })
})

describe('.multiply()', () => {
    it('multiplied by 2', () => {
        const vector = new Vector(2, 4).multiply(2);
        components(vector, 4, 8);
    })
    it('multiplied by vector', () => {
        const vector = new Vector(2, 4);
        const operand = new Vector(2, 4);
        vector.multiply(operand);
        components(vector, 4, 16);
    })
})

describe('.divide()', () => {
    it('divided by 2', () => {
        const vector = new Vector(2, 4).divide(2);
        components(vector, 1, 2);
    })
    it('divided by vector', () => {
        const vector = new Vector(4, 16);
        const operand = new Vector(2, 4);
        vector.divide(operand);
        components(vector, 2, 4);
    })
})

describe('.negate()', () => {
    it('reverse vector', () => {
        const vector = new Vector(1, 2).negate();
        components(vector, -1, -2);
    })
})

describe('.normalize()', () => {
    it('length to 1', () => {
        const vector = new Vector(1, 2).normalize();
        expect(round(vector.length)).toBe(1);
    })
    it('length to 4 (with value)', () => {
        const vector = new Vector(1, 2).normalize(4);
        expect(round(vector.length)).toBe(4);
    })
})

describe('.limit()', () => {
    it('limit length to 2', () => {
        const vector = new Vector(4, 4).limit(2);
        expect(round(vector.length)).toBe(2);
    })
    it('do not change length below limit', () => {
        const vector = new Vector(1, 2).limit(4);
        expect(round(vector.length)).toBe(2.2361);
    })
})

describe('.rotate()', () => {
    it('turns by PI/2', () => {
        const vector = new Vector(2, 0).rotate(Math.PI/2);
        components(vector, 0, 2);
    })
})

describe('.rotateDeg()', () => {
    it('turns by 90 degrees', () => {
        const vector = new Vector(2, 0).rotateDeg(90);
        components(vector, 0, 2);
    })
})