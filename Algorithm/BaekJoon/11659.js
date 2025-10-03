/**
 * 문제
 * 수 N개가 주어졌을 때, i번째 수부터 j번째 수까지 합을 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 총 M개의 줄에 입력으로 주어진 i번째 수부터 j번째 수까지 합을 출력한다.
 */
const [[N, M], A, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const arr = Array.from({ length: N + 1 }).fill(0);
for (let i = 0; i < N; i++) arr[i + 1] = arr[i] + A[i];
const result = input.map(([start, end]) => arr[end] - arr[start - 1]).join('\n');
console.log(result);