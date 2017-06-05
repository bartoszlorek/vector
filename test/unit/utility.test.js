import Vector from '../src/vector';
import { components } from './__utils';

describe('.clone()', () => {
    it('not equal', () => {
        const vector = new Vector();
        const clone = vector.clone();
        expect(vector).not.toBe(clone);
    })
})

describe('.equals()', () => {
    it('be the same', () => {
        const first = new Vector(1, 2);
        const second = new Vector(1, 2);
        expect(first.equals(second)).toBe(true);
    })
})