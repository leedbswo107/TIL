const [[N, H], A] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
console.log(A.filter(e => e <= H).length);