const [a, b] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
console.log(a * (b - 1) + 1);