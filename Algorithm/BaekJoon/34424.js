const [n, x] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
console.log((n - 1) * x);