const precision = 10000;

export function components(vector, x, y) {
    expect(round(vector.x)).toBe(x);
    expect(round(vector.y)).toBe(y);
}

export function round(value) {
    return Math.round(precision * value) / precision;
}