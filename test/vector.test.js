import Vector from '../src/vector';

describe('construct', () => {
    it('with 0,0', () => {
        const vec = new Vector();
        expect(vec.x).toBe(0);
        expect(vec.y).toBe(0);
    })
    it('with 2,2', () => {
        const vec = new Vector(2, 2);
        expect(vec.x).toBe(2);
        expect(vec.y).toBe(2);
    })
})
describe('.set()', () => {
    it('be unchanged', () => {
        const vec = new Vector(1,1).set();
        expect(vec.x).toBe(1);
        expect(vec.y).toBe(1);
    })
    it('change to 4,4', () => {
        const vec = new Vector().set(4, 4);
        expect(vec.x).toBe(4);
        expect(vec.y).toBe(4);
    })
})