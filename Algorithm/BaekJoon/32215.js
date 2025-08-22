const [n, m, k] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
console.log(m * (k + 1));