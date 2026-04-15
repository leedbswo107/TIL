const [A, B, N] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);
const result = new Array(N);
for (let i = 1; i <= N; i++) result[i - 1] = A * (N - i) + (A + B) * i; 
console.log(result.join(' '));
