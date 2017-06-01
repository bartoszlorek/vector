import Vector from '../src/vector';
import { round } from './__utils';

describe('.lengthSq', () => {
    it('get squared length', () => {
        const vector = new Vector(2, 2);
        expect(vector.lengthSq).toBe(8);
    })
})

describe('.length', () => {
    it('get length', () => {
        const vector = new Vector(2, 0);
        expect(vector.length).toBe(2);
    })
    it('set length', () => {
        const vector = new Vector(2, 4);
        vector.length = 8;
        expect(round(vector.length)).toBe(8);
    })
})

describe('.angle', () => {
    it('get angle in radians', () => {
        const vector = new Vector(2, 2);
        expect(vector.angle).toBe(Math.PI/4);
    })
    it('set angle in radians', () => {
        const vector = new Vector(2, 0);
        vector.angle = Math.PI/2;
        expect(vector.angle).toBe(Math.PI/2);
    })
})

describe('.degrees', () => {
    it('get angle in degrees', () => {
        const vector = new Vector(2, 2);
        expect(vector.degrees).toBe(45);
    })
    it('set angle in degrees', () => {
        const vector = new Vector(2, 0);
        vector.degrees = 90;
        expect(vector.degrees).toBe(90);
    })
})