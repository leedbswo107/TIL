const N = +require('fs').readFileSync(0, 'utf-8').trim();
const p1 = ('@'.repeat(N * 5) + '\n').repeat(N);
const p2 = ('@'.repeat(N) + ' '.repeat(N * 3) + '@'.repeat(N) + '\n').repeat(N * 3);
const result = p1 + p2 + p1;
console.log(result);
