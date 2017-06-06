var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var error = require('./__error');
var random = require('./__random');
var fastAtan2 = require('./atan2');
var x = random(-20, 20),
    y = random(-10, 10);

suite
    .add('Math.atan2', function () {
        Math.atan2(y, x);
    })
    .add('fastAtan2', function () {
        fastAtan2(y, x);
    })
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run();

// error(Math.atan2, fastAtan2, function () {
//     return [
//         random(-2000, 2000),
//         random(-2000, 2000)
//     ]
// }, 100000);