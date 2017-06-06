var error = require('./error');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var x = random(-20, 20),
    y = random(-10, 10);

// suite
//     .add('Math.atan2', function () {
//         Math.atan2(y, x);
//     })
//     .add('atan2', function () {
//         atan2(y, x);
//     })
//     .add('approxAtan2', function () {
//         approxAtan2(y, x);
//     })
//     .add('arctan2', function () {
//         arctan2(y, x);
//     })
//     .on('cycle', function (event) {
//         console.log(String(event.target));
//     })
//     .on('complete', function () {
//         console.log('Fastest is ' + this.filter('fastest').map('name'));
//     })
//     .run();


// error < 0.07
function atan2(y, x) {
    var ax = Math.abs(x),
        ay = Math.abs(y),
        p = y / (ax + ay);

    if (x < 0) {
        p = (y < 0 ? -2 : 2) - p;
    }
    // multiply by half of PI
    return p * 1.5707963267948966;
}


var PI_FLOAT = 3.14159265;
var PIBY2_FLOAT = 1.5707963;

// error < 0.005
function approxAtan2(y, x) {
    if (x === 0) {
        if (y > 0) return PIBY2_FLOAT;
        if (y === 0) return 0;
        return -PIBY2_FLOAT;
    }
    var atan,
        z = y / x;
    if (Math.abs(z) < 1) {
        atan = z / (1 + 0.28 * z * z);
        if (x < 0) {
            if (y < 0) return atan - PI_FLOAT;
            return atan + PI_FLOAT;
        }
    }
    else {
        atan = PIBY2_FLOAT - z / (z * z + 0.28);
        if (y < 0) return atan - PI_FLOAT;
    }
    return atan;
}


// error < 0.01
function arctan2(y, x) {
    var ONEQTR_PI = Math.PI / 4,
        THRQTR_PI = 3 * ONEQTR_PI,
        absY = Math.abs(y) + 1e-10,     // kludge to prevent 0/0 condition
        angle,
        r;

    if (x < 0) {
        r = (x + absY) / (absY - x);
        angle = THRQTR_PI;
    }
    else {
        r = (x - absY) / (x + absY);
        angle = ONEQTR_PI;
    }
    angle += (0.1963 * r * r - 0.9817) * r;
    if (y < 0) {
        return (-angle);    // negate if in quad III or IV
    } else {
        return (angle);
    }
}


function random(min, max) {
    return Math.random() * (max - min) + min;
}

error(Math.atan2, atan2, function () {
    return [
        random(-20, 20),
        random(-10, 10)
    ]
});

// error(Math.atan2, approxAtan2, function () {
//     return [
//         random(-20, 20),
//         random(-10, 10)
//     ]
// });

// error(Math.atan2, arctan2, function () {
//     return [
//         random(-20, 20),
//         random(-10, 10)
//     ]
// });