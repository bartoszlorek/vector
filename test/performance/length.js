var fastAtan2 = require('./atan2');

// |error| ~ 0.002
// |error| < 0.005
function fastLength(x, y) {
    var angle = fastAtan2(y, x),
        sin = Math.sin(angle),
        cos = Math.cos(angle);
    return cos * x + sin * y;
}

module.exports = fastLength;