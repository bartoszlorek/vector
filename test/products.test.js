import Vector from '../src/vector';
import { components } from './utils';

describe('.dot()', () => {
    it('returns dot product', () => {
        const first = new Vector(2, 2);
        const second = new Vector(4, 4);
        expect(first.dot(second)).toBe(16);
    })
})