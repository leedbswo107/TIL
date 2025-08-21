const [s1, s2] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
console.log(s2 / s1 > 2 ? 'H' : 'E');