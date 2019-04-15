var input = require('fs').readFileSync('1002.txt', 'utf8');
var lines = input.split('\r\n');

var A = 3.14159 * (parseFloat(lines[0] * parseFloat(lines[0])));

console.log("A=" + A.toFixed(4));