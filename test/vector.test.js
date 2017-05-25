import Vector from '../src/vector';

// test of vector components
function components(vector, x, y) {
    expect(vector.x).toBe(x);
    expect(vector.y).toBe(y);
}

describe('construct', () => {
    it('with 0,0', () => {
        const vector = new Vector();
        components(vector, 0, 0);
    })
    it('with 2,2', () => {
        const vector = new Vector(2, 2);
        components(vector, 2, 2);
    })
})

describe('.clone()', () => {
    it('not equal', () => {
        const vector = new Vector();
        const clone = vector.clone();
        expect(vector).not.toBe(clone);
    })
})

describe('.set()', () => {
    it('be unchanged', () => {
        const vector = new Vector(1, 1).set();
        components(vector, 1, 1);
    })
    it('change to 4,4', () => {
        const vector = new Vector().set(4, 4);
        components(vector, 4, 4);
    })
})

describe('.add()', () => {
    it('be unchanged', () => {
        const vector = new Vector().add();
        components(vector, 0, 0);
    })
    it('increases by 4', () => {
        const vector = new Vector().add(4, 4);
        components(vector, 4, 4);
    })
    it('increases by vector', () => {
        const vector = new Vector();
        const operand = new Vector(4, 4);
        vector.add(operand);
        components(vector, 4, 4);
    })
})

describe('.subtract()', () => {
    it('decreases by 4', () => {
        const vector = new Vector().subtract(4, 4);
        components(vector, -4, -4);
    })
    it('decreases by vector', () => {
        const vector = new Vector();
        const operand = new Vector(4, 4);
        vector.subtract(operand);
        components(vector, -4, -4);
    })
})

describe('.multiply()', () => {
    it('multiplied by 2', () => {
        const vector = new Vector(2, 2).multiply(2);
        components(vector, 4, 4);
    })
    it('multiplied by vector', () => {
        const vector = new Vector(2, 2);
        const operand = new Vector(2, 2);
        vector.multiply(operand);
        components(vector, 4, 4);
    })
})

describe('.divide()', () => {
    it('divided by 2', () => {
        const vector = new Vector(4, 4).divide(2);
        components(vector, 2, 2);
    })
    it('divided by vector', () => {
        const vector = new Vector(4, 4);
        const operand = new Vector(2, 2);
        vector.divide(operand);
        components(vector, 2, 2);
    })
})

describe('.inverse()', () => {
    it('reverse of vector', () => {
        const vector = new Vector(2, 2).inverse();
        components(vector, -2, -2);
    })
})

describe('.normalize()', () => {
    it('length 1', () => {
        const vector = new Vector(4, 4).normalize();
        expect(vector.length).toBeGreaterThan(.9999);
    })
    it('length 4 (with value)', () => {
        const vector = new Vector(4, 4).normalize(4);
        expect(vector.length).toBeGreaterThan(3.9999);
    })
})

describe('.dot()', () => {
    it('returns dot product', () => {
        const first = new Vector(2, 2);
        const second = new Vector(4, 4);
        expect(first.dot(second)).toBe(16);
    })
})

describe('.equals()', () => {
    it('be the same', () => {
        const first = new Vector(1, 1);
        const second = new Vector(1, 1);
        expect(first.equals(second)).toBe(true);
    })
})