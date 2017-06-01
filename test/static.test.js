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

describe('.catch()', () => {
    it('return new vector', () => {
        const vector = Vector.catch();
        expect(vector).toBeInstanceOf(Vector);
    })
})

describe('.free()', () => {
    const first = Vector.catch().set(2, 4);
    Vector.free(first);
    const second = Vector.catch();

    it('release vector', () => {
        expect(first).toBe(second);
    });
    it('reset to 0,0', () => {
        components(second, 0, 0);
    });
})