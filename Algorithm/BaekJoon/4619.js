/**
 * 문제
 * 양의 정수 B와 N이 주어졌을 때, B에 가장 가까운 AN의 정수 A를 찾는 프로그램을 작성하시오. AN은 B보다 작거나, 크거나, 같다.
 * 
 * 출력
 * 각 테스트 케이스에 해당하는 A를 출력한다.
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(" ").map(Number));
const result = [];
input.pop();
const solution = (b, n) => {
  let [prev, next] = [0, 1];
  while (true) {
    if (next ** n >= b) break;
    prev++;
    next++;
  }
  const result = Math.abs(prev ** n - b) > Math.abs(next ** n - b) ? next : prev;
  return result
}
input.forEach(([B, N]) => result.push(solution(B, N)));
console.log(result.join('\n'));