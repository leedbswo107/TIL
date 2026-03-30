const [[N], A] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
console.log(A[N - 1] + A[N - 1] - A[N - 2]);
