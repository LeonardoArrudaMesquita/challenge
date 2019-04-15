var input = require('fs').readFileSync('1153.txt', 'utf8');
var lines = input.split('\r\n');

var fatorial = 1;

for (let i = 0; i != parseInt(lines[0]); i++) {
    
    fatorial += fatorial * i;
    
}

console.log(fatorial);