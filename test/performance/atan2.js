var error = require('./error');
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var x = random(-20, 20),
	y = random(-10, 10);

suite
	.add('Math.atan2', function () {
		Math.atan2(y, x);
	})
	.add('diamondAtan2', function () {
		diamondAtan2(y, x);
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

// error < 0.07
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

// error < 0.005
// the accuracy is about 0.3 degrees
function fastAtan2(y, x) {
	var pi = Math.PI;
	if (x == 0) {
		if (y > 0) return pi / 2;
		if (y == 0) return 0;
		return -pi / 2;
	}

	var atan, z = y / x;
	if (z < -1 || z > 1) {
		atan = pi / 2 - z / (z * z + 0.28);
		if (y < 0) return atan - pi;
	}
	else {
		atan = z / (1 + 0.28 * z * z);
		if (x < 0) {
			if (y < 0) return atan - pi;
			return atan + pi;
		}
	}
	return atan;
}

function random(min, max) {
	return Math.random() * (max - min) + min;
}

// error(Math.atan2, diamondAtan2, function () {
// 	return [
// 		random(-2000, 2000),
// 		random(-2000, 2000)
// 	]
// }, 10000);

// error(Math.atan2, fastAtan2, function () {
//     return [
//         random(-2000, 2000),
//         random(-2000, 2000)
//     ]
// }, 10000);