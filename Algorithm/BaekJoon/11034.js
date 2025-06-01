/**
 * 문제
 * 캥거루 세 마리가 사막에서 놀고 있다. 사막에는 수직선이 하나 있고, 캥거루는 서로 다른 한 좌표 위에 있다.
 * 한 번 움직일 때, 바깥쪽의 두 캥거루 중 한 마리가 다른 두 캥거루 사이의 정수 좌표로 점프한다. 한 좌표 위에 있는 캥거루가 두 마리 이상일 수는 없다.
 * 캥거루는 최대 몇 번 움직일 수 있을까?
 * 
 * 출력
 * 각 테스트에 대해 캥거루가 최대 몇 번 움직일 수 있는지 출력한다.
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const result = new Array(input.length);
const solution = (A, B, C) => {
  const prev = Math.abs(A - B);
  const next = Math.abs(B - C);
  return prev < next ? next : prev;
}
input.forEach((e, i) => result[i] = solution(...e) - 1);
console.log(result.join('\n'));