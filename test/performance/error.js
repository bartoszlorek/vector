var count = 1000;

module.exports = function (method1, method2, params) {
    var value1, value2, data, error, errorAbs, i;
    var sum = 0;
    var max = 0;

    for (i = 0; i < count; i++) {
        data = params();
        value1 = method1.apply(null, data);
        value2 = method2.apply(null, data);
        error = value1 - value2;
        errorAbs = Math.abs(error);
        sum += errorAbs;

        if (errorAbs > max) {
            max = errorAbs;
        }
        console.log((error > 0 ? ' ' : '') + error, value1, value2);
    }
    console.log('-----------------------------------------------');
    console.log('error average: ' + sum / count);
    console.log('error max: ' + max);
}