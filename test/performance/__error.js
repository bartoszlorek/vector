var precision = 4;

module.exports = function (method1, method2, params, iterations, reducer) {
    var isReducer = typeof reducer === 'function';
    var data, value1, value2, error, i;
    var sum = 0;
    var max = 0;

    for (i = 0; i < iterations; i++) {
        data = params();
        value1 = method1.apply(null, data);
        value2 = method2.apply(null, data);

        if (value1 !== 0) {
            if (isReducer) {
                error = Math.abs((reducer(value1) - reducer(value2)) / reducer(value1)) * 100;
            } else {
                error = Math.abs((value1 - value2) / value1) * 100;
            }
            sum += error;
            if (error > max) {
                max = error;
            }
            console.log(error.toFixed(precision) + '%  ', value1, '  ', value2);
        }
    }
    console.log('---------------------------------------------------');
    console.log('error avg: ' + (sum / iterations).toFixed(precision) + '%');
    console.log('error max: ' + max.toFixed(precision) + '%');
}