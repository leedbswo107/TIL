const [m, n, y] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
console.log(m * n);
