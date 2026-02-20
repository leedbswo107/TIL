const [N, C, P] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
console.log(N <= (C * P) ? 'yes' : 'no');