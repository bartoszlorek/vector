import Vector from '../src/vector';
import { components } from './__utils';

describe('immutable', () => {
    it('mutable add', () => {
        const first = new Vector(1, 2);
        const second = first.add(2);
        expect(first).toBe(second);
    })
    it('immutable add', () => {
        const first = new Vector(1, 2);
        const second = first.iadd(2);
        expect(first).not.toBe(second);
    })
})