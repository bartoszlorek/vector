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
    get lengthSqr() {
        return this.dot(this);
    },

    get length() {
        return Math.sqrt(this.lengthSqr);
    },

    set length(value) {
        this.normalize(value);
    },

    get angle() {
        return Math.atan2(this.y, this.x);
    },

    set angle(value) {
        this.set(
            Math.cos(value) * this.length,
            Math.sin(value) * this.length
        );
    },

    get degrees() {
        return this.angle * 180 / Math.PI;
    },

    set degrees(value) {
        this.angle = value * Math.PI / 180;
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
        if (this.length > 0) {
            this.multiply(value / this.length);
        }
        return this;
    },

    limit: function (value) {
        if (this.length > value) {
            this.normalize(value);
        }
        return this;
    },

    rotate: function (angle) {
        if (angle) {
            angle += this.angle;
            const length = this.length;
            this.x = Math.cos(angle) * length;
            this.y = Math.sin(angle) * length;
        }
        return this;
    },

    rotateDeg: function (angle) {
        return this.rotate(angle * Math.PI / 180);
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

    distanceSqr: function (vector) {
        const x = this.x - vector.x;
        const y = this.y - vector.y;
        return x * x + y * y;
    },

    distance: function (vector) {
        return Math.sqrt(this.distanceSqr(vector));
    },

    angleTo: function (vector) {
        const length = this.length * vector.length;
        return length > 0 ? Math.acos(this.dot(vector) / length) : NaN;
    },

    degreesTo: function (vector) {
        return this.angleTo(vector) * 180 / Math.PI;
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
    'rotate',
    'rotateDeg'
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