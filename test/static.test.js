import Vector from '../src/vector';
import { components, componentRange } from './__utils';

describe('.random()', () => {
    it('vector where x/y [0-1]', () => {
        const vector = Vector.random();
        componentRange(vector.x, 0, 1);
        componentRange(vector.y, 0, 1);
    })
    it('components limited by single number', () => {
        const vector = Vector.random(4);
        componentRange(vector.x, 0, 4);
        componentRange(vector.y, 0, 4);
    })
    it('components limited by double number', () => {
        const vector = Vector.random(2, 4);
        componentRange(vector.x, 0, 2);
        componentRange(vector.y, 0, 4);
    })
})

describe('.receive()', () => {
    it('return new vector', () => {
        const vector = Vector.receive();
        expect(vector).toBeInstanceOf(Vector);
    })
    it('receive and set', () => {
        const vector = Vector.receive(2, 4);
        components(vector, 2, 4);
    })
})

describe('.release()', () => {
    const first = Vector.receive(2, 4);
    Vector.release(first);
    const second = Vector.receive();

    it('release vector', () => {
        expect(first).toBe(second);
    });
    it('reset to 0,0', () => {
        components(second, 0, 0);
    });
})