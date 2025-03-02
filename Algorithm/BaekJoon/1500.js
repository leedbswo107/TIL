/**
 * 문제
 * 세준이는 정수 S와 K가 주어졌을 때, 합이 S인 K개의 양의 정수를 찾으려고 한다. 
 * 만약 여러개일 경우 그 곱을 가능한 최대로 하려고 한다.
 * 가능한 최대의 곱을 출력한다.
 * 만약 S=10, K=3이면, 3,3,4는 곱이 36으로 최대이다.
 * 
 * 출력
 * 첫째 줄에 정답을 출력한다. 답은 9223372036854775807보다 작다.
 */
const [S, K] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(BigInt);
const solution = (s, k) => (!(s % k)) ? (s / k) ** k : (s / k) ** (k - s % k) * (s / k + 1n) ** (s % k);
const result = solution(S, K).toString();
console.log(result);