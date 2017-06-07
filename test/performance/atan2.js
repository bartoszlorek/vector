// error avg: 6.2982%
// error max: 57.0723%
// the accuracy is about 4 degrees
function diamondAtan2(y, x) {
    var ax = Math.abs(x),
        ay = Math.abs(y),
        p = y / (ax + ay);

    if (x < 0) {
        p = (y < 0 ? -2 : 2) - p;
    }
    // multiply by half of PI
    return p * 1.5707963267948966;
}

// error avg: 0.2217%
// error max: 0.8586%
// the accuracy is about 0.3 degrees
// https://jsperf.com/faster-atan2/3
function fastAtan2(y, x) {
    var PI = Math.PI,
        PI2 = PI / 2,
        atan,
        z;

    if (x === 0) {
        if (y === 0) return 0;
        return y > 0 ? PI2 : -PI2;
    }
    z = y / x;
    if (z < -1 || z > 1) {
        atan = PI2 - z / (z * z + 0.28);
        if (y < 0) return atan - PI;
    } else {
        atan = z / (1 + 0.28 * z * z);
        if (x < 0) {
            if (y < 0) return atan - PI;
            return atan + PI;
        }
    }
    return atan;
}

module.exports = diamondAtan2;//fastAtan2;