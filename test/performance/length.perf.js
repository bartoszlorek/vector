var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var error = require('./__error');
var random = require('./__random');
var fastLength = require('./length');
var x = random(-20, 20),
    y = random(-10, 10);

suite
    .add('length', function () {
        length(x, y);
    })
    .add('fastLength', function () {
        fastLength(x, y);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run();

function length(x, y) {
    return Math.sqrt(x * x + y * y);
}

// error(Math.atan2, fastAtan2, function () {
//     return [
//         random(-2000, 2000),
//         random(-2000, 2000)
//     ]
// }, 100000);