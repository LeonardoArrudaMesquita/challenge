var input = require('fs').readFileSync('1074.txt', 'utf8');
var lines = input.split('\r\n');

for (i = 1; i < lines.length; i++) {
    var N = parseInt(lines[i]);

    if (N < 0) {
        if (N % 2 == 0)
            console.log("EVEN NEGATIVE");
        else
            console.log("ODD NEGATIVE");
    }
    else if (N > 0) {
        if (N % 2 == 0)
            console.log("EVEN POSITIVE");
        else
            console.log("ODD POSITIVE");
    }
    else if (N == 0) {
        console.log("NULL");
    }
}
