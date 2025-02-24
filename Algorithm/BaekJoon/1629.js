/**
 * 문제
 * 자연수 A를 B번 곱한 수를 알고 싶다. 
 * 단 구하려는 수가 매우 커질 수 있으므로 이를 C로 나눈 나머지를 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 첫째 줄에 A를 B번 곱한 수를 C로 나눈 나머지를 출력한다.
 */
const [A, B, C] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(BigInt);
const solution = (a, b, c) => {
  if (b === 0n) return 1n;
  let half = solution(a, b / 2n, c);
  let result = (half * half) % c;
  if (b % 2n === 1n) result = (result * a) % c;
  return result;
}
const result = solution(A, B, C).toString();
console.log(result);