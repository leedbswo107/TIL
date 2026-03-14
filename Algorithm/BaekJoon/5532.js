const [L, A, B, C, D] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
const [M, K] = [Math.ceil(A/C), Math.ceil(B/D)];
console.log(L - Math.max(M,K));
