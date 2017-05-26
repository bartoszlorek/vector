function Vector(x, y) {
    if (!(this instanceof Vector)) {
        return new Vector(x, y);
    }
    this.x = x || 0;
    this.y = y || 0;
}

const prototypes = {
    /**
     *  Utility
     */
    clone: function () {
        return new Vector(this.x, this.y);
    },

    equals: function (vector) {
        return this.x === vector.x && this.y === vector.y;
    },

    /**
     *  Properties
     */
    get length() {
        return Math.sqrt(this.dot(this));
    },

    set length(value) {
        this.normalize().multiply(value);
    },

    get angle() {
        return this.radians * 180 / Math.PI;
    },

    set angle(value) {
        this.radians(value * Math.PI / 180);
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

    /**
     *  Manipulation
     */
    set: function () {
        vectorArg(arguments, (x, y) => {
            this.x = x;
            this.y = y;
        });
        return this;
    },

    add: function () {
        vectorArg(arguments, (x, y) => {
            this.x += x;
            this.y += y;
        });
        return this;
    },

    subtract: function () {
        vectorArg(arguments, (x, y) => {
            this.x -= x;
            this.y -= y;
        });
        return this;
    },

    multiply: function () {
        vectorArg(arguments, (x, y) => {
            this.x *= x;
            this.y *= y;
        });
        return this;
    },

    divide: function () {
        vectorArg(arguments, (x, y) => {
            if (x !== 0) this.x /= x;
            if (y !== 0) this.y /= y;
        });
        return this;
    },

    negate: function () {
        this.x *= -1;
        this.y *= -1;
        return this;
    },

    normalize: function (value = 1) {
        this.multiply(value / this.length);
        return this;
    },

    limit: function (value) {
        if (this.length > value) {
            this.normalize(value);
        }
        return this;
    },

    magnitude: function (value) {
        this.length = value;
        return this;
    },

    rotate: function (angle) {
        if (angle) {
            const rad = (this.angle + angle) * Math.PI / 180;
            const length = this.length;
            this.x = Math.cos(rad) * length;
            this.y = Math.sin(rad) * length;
        }
        return this;
    },

    /**
     *  Products
     */
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

    angleTo: function (vector) {
        return this.radiansTo(vector) * 180 / Math.PI;
    },

    radiansTo: function (vector) {
        const length = this.length * vector.length;
        return length === 0 ? NaN : Math.acos(this.dot(vector) / length);
    }
}

Vector.random = function (a, b) {
    a = a || 1;
    b = b || a;
    return new Vector(
        a * Math.random(),
        b * Math.random()
    );
}

Vector.prototype = addImmutable(prototypes, [
    'set',
    'add',
    'subtract',
    'multiply',
    'divide',
    'negate',
    'normalize',
    'limit',
    'magnitude',
    'rotate',
]);

function vectorArg(args, callback) {
    const a = args[0];
    const b = args[1];
    if (typeof a === 'number') {
        callback(a, b !== undefined ? b : a);

    } else if (a instanceof Vector) {
        callback(a.x, a.y);

    } else if (isArray(a)) {
        callback(a[0], a[1]);
    }
}

function immutable(method) {
    return function () {
        const next = this.clone();
        return next[method].apply(next, arguments);
    }
}

function addImmutable(proto, methods) {
    for (let i = 0; i < methods.length; i++) {
        let name = methods[i];
        proto['i' + name] = immutable(name);
    }
    return proto;
}

function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
}

module.exports = Vector;