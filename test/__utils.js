const precision = 10000;

export {
    components,
    componentRange,
    round
}

function components(vector, x, y) {
    expect(round(vector.x)).toBe(x);
    expect(round(vector.y)).toBe(y);
}

function componentRange(value, min, max) {
    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThanOrEqual(max);
}

function round(value) {
    return Math.round(precision * value) / precision;
}