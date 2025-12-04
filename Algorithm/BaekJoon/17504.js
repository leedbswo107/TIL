/**
 * 문제
 * 톰은 마트에서 치즈 1kg 을 사서 집으로 돌아왔습니다.
 * 그런데 톰이 한눈을 판 사이 제리가 와서 1/(a1 + 1 / (a2 + 1 / ... + (1 / aN) kg 만큼 훔쳐갔습니다.
 * 제리가 치즈를 훔쳐 간 후 톰이 가지고 있는 치즈의 무게는 얼마인가요?
 * 
 * 출력
 * 정답을 기약분수로 표현했을 때 P/Q kg 이라면 첫 번째 줄에 P와 Q를 공백을 사이에 두고 출력합니다.
 */
const [_, input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const A = input.split(' ').map(BigInt);
let [a,b] = [1n, A.pop()];
while(A.length > 0) {
  const tmpA = A.pop();
  a += tmpA * b;
  [a,b] = [b,a];
}
const result = `${b-a} ${b}`;
console.log(result);
