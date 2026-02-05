const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const a = input.slice(1).map(Number);
const prefixSum = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) prefixSum[i] = prefixSum[i - 1] + a[i - 1];
let result = -Infinity;
for (let i = k; i < n; i++) {
  const cur = prefixSum[i] - prefixSum[i - k];
  result = cur < result ? result : cur;
}
console.log(result);