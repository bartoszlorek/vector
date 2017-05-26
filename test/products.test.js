import Vector from '../src/vector';
import { components, round } from './__utils';

describe('.dot()', () => {
    it('product of two vectors', () => {
        const first = new Vector(2, 2);
        const second = new Vector(4, 4);
        expect(first.dot(second)).toBe(16);
    })
})

describe('.cross()', () => {
    it('product of two vectors', () => {
        const first = new Vector(2, 2);
        const second = new Vector(4, 4);
        expect(first.cross(second)).toBe(0);
    })
})

describe('.distance()', () => {
    it('between two vectors', () => {
        const first = new Vector(0, 0);
        const second = new Vector(0, 2);
        expect(first.distance(second)).toBe(2);
    })
})

describe('.angleTo()', () => {
    it('degrees to vector', () => {
        const first = new Vector(0, 2);
        const second = new Vector(4, 4);
        expect(round(first.angleTo(second))).toBe(45);
    })
})

describe('.radiansTo()', () => {
    it('radians to vector', () => {
        const first = new Vector(0, 2);
        const second = new Vector(4, 0);
        expect(round(first.radiansTo(second))).toBe(1.5708);
    })
})