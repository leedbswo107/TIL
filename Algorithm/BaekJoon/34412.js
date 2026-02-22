const x = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
console.log(x >= 13 ? x + 1 : x);