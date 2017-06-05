var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

// suite
// 	.add('Math.atan2', function () {
// 		Math.atan2(y, x);
// 	})
// 	.add('atan2', function () {
// 		atan2(y, x);
// 	})
// 	.on('cycle', function (event) {
// 		console.log(String(event.target));
// 	})
// 	.on('complete', function () {
// 		console.log('Fastest is ' + this.filter('fastest').map('name'));
// 	})
// 	.run();

function random(min, max) {
	return Math.random() * (max - min) + min;
}

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

var sum = 0;
var count = 500;

for (var i = 0; i < count; i++) {
	var x = random(-20, 20),
		y = random(-10, 10);

	var math2Value = Math.atan2(y, x),
		atan2Value = atan2(y, x),
		error = Math.abs(math2Value - atan2Value);
	sum += error;

	console.log(error, math2Value, atan2Value);
}

var average = sum / count;
console.log('-----------------------------------------------');
console.log('error: ' + average);