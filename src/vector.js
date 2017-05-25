export default function Vector(x, y, immutable) {
    this.immutable = immutable || false;
    this.x = x || 0;
    this.y = y || 0;
}

Vector.prototype = {
    clone: function () {
        return new Vector(this.x, this.y);
    },

    set: function (value) {
        vectorArg(value, (x, y) => {
            this.x = x;
            this.y = y;
        });
        return this;
    },

    add: function (value) {
        vectorArg(value, (x, y) => {
            this.x += x;
            this.y += y;
        });
        return this;
    },

    subtract: function (value) {
        vectorArg(value, (x, y) => {
            this.x -= x;
            this.y -= y;
        });
        return this;
    },

    multiply: function (value) {
        vectorArg(value, (x, y) => {
            this.x *= x;
            this.y *= y;
        });
        return this;
    },

    divide: function (value) {
        vectorArg(value, (x, y) => {
            if (x !== 0) this.x /= x;
            if (y !== 0) this.y /= y;
        });
        return this;
    },

    inverse: function () {
        this.x *= -1;
        this.y *= -1;
        return this;
    },

    normalize: function (value = 1) {
        return this.multiply(value / this.length);
    },

    dot: function (vector) {
        return this.x * vector.x + this.y * vector.y;
    },

    cross: function (vector) {
        return this.x * vector.y - this.y * vector.x
    },

    distance: function (vector) {
        const x = this.x - vector.x;
        const y = this.y - vector.y;
        return Math.sqrt((x * x) + (y * y));
    },

    equals: function (vector) {
        return this.x === vector.x && this.y === vector.y;
    },

    magnitude: function (value) {
        this.length = value;
        return this;
    },

    limit: function (value) {
        if (this.length > value) {
            this.normalize(value);
        }
        return this;
    },

    radiansTo: function (vector) {
        const length = this.length * vector.length;
        return length === 0 ? NaN : Math.acos(this.dot(vector) / length);
    },

    angleTo: function (vector) {
        return this.radiansTo(vector) * 180 / Math.PI;
    },

    rotate: function (angle) {
        if (angle !== 0) {
            const rad = (this.angle + angle) * Math.PI / 180;
            this.x = Math.cos(rad) * this.length;
            this.y = Math.sin(rad) * this.length;
        }
        return this;
    },

    get length() {
        return Math.sqrt(this.dot(this));
    },

    set length(value) {
        this.normalize().multiply(value);
    },

    get radians() {
        return Math.atan2(this.y, this.x);
    },

    set radians(value) {
        this.set(
            Math.cos(value) * this.length,
            Math.sin(value) * this.length
        );
    },

    get angle() {
        return this.radians * 180 / Math.PI;
    },

    set angle(value) {
        this.radians(value * Math.PI / 180);
    },
}

Vector.random = function (a = 1, b = 1) {
    return new Vector(a * Math.random(), b * Math.random());
}

function vectorArg(value, callback) {
    if (value instanceof Vector) {
        callback(value.x, value.y);
    } else if (typeof value === 'number') {
        callback(value, value);
    }
}

function isZero(vector) {
    return vector.x === 0 && vector.y === 0;
}