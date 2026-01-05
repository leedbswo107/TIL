/**
 * 문제
 * The Bureau for Artificial Problems in Competitions wants you to solve the following problem: Given n positive integers (a1, ... , an), what is the maximal value of(a1^2 + ... + ak^2 ) ... (a{k+1} + ... + an)?
 * 
 * 출력
 * Output the maximal value of the given expression.
 */
let [n, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const A = input.map(BigInt);
let result = 0n;
let prefixSum = new Array(n + 1).fill(0n);
let squarePrefixSum = new Array(n + 1).fill(0n);
for (let i = 1; i < n + 1; i++) {
  prefixSum[i] = prefixSum[i - 1] + A[i - 1];
  squarePrefixSum[i] = squarePrefixSum[i - 1] + ((A[i - 1]) ** 2n);
}
for (let k = 1; k < n; k++) {
  const a = squarePrefixSum[k];
  const b = prefixSum[n] - prefixSum[k];
  result = result <= a * b ? a * b : result;
}
console.log(`${result}`);