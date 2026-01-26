const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
/**
 * N - 원금
 * B - 이자
 * M - 목표
 */
const solution = (N, B, M) => {
  let year = 0;
  let cur = N;
  while (cur < M) {
    cur += (cur * B / 100);
    year++;
  }
  return year;
}
const result = input.map(e => solution(...e)).join('\n');
console.log(result);