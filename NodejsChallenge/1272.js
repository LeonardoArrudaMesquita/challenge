var input = require('fs').readFileSync('1272.txt', 'utf8');
var lines = input.split('\r\n');

N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {

    var texto = "";
    cod = lines[i].split(" ");

    for (let j = 0; j < cod.length; j++) {

        texto += cod[j].charAt(0);
    }

    console.log(texto);
}