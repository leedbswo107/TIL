const [S, M, L] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const total = S + M * 2 + L * 3;
console.log(total >= 10 ? 'happy' : 'sad');