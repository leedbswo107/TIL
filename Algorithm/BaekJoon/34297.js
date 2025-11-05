const [M, K, C] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
console.log(M * C);