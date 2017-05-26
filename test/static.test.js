import Vector from '../src/vector';
import { componentRange } from './__utils';

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