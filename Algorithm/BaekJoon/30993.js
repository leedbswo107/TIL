/**
 * 문제
 * 같은 차종의 빨간색 자동차 A대, 초록색 자동차 B대, 파란색 자동차 C대를 N칸의 주차장에 1대씩 주차하려고 한다.
 * 모든 자동차를 한 칸에 한 대씩 주차할 수 있는 경우의 수를 구하라.
 * 
 * 츌력
 * 첫 번째 줄에 정답을 출력한다.
 */
const [N, A, B, C] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
const factorial = (num) => {
  if (num === 1) return 1;
  return factorial(num - 1) * num;
}
const result = factorial(N) / (factorial(A) * factorial(B) * factorial(C));
console.log(result);