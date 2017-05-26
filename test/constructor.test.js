import Vector from '../src/vector';
import { components } from './utils';

describe('constructor', () => {
    it('with 0,0', () => {
        const vector = new Vector();
        components(vector, 0, 0);
    })
    it('with 1,2', () => {
        const vector = new Vector(1, 2);
        components(vector, 1, 2);
    })
    it('fallback of new', () => {
        const vector = Vector(1, 2);
        expect(vector).toBeInstanceOf(Vector);
    })
})