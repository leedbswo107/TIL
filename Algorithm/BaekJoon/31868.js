/**
 * 문제
 * 1단계 과일은 체리, N단계 과일은 수박이다. i단계 과일 2개를 소모하여 i+1단계 과일 1개를 만들 수 있다. (1 \leq i \leq N-1)K개의 체리로 최대 몇 개의 수박을 만들 수 있는지 구해보자!
 * 
 * 출력
 * 첫 번째 줄에 만들 수 있는 수박의 최대 개수를 출력한다.
 */
const [N, K] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
console.log(Math.floor(K / 2 ** (N - 1)));