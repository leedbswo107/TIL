/**
 * 문제
 * 톰은 마트에서 치즈 1kg 을 사서 집으로 돌아왔습니다.
 * 그런데 톰이 한눈을 판 사이 제리가 와서 A/B kg 만큼 훔쳐갔습니다.
 * 제리가 치즈를 훔쳐 간 후 톰이 가지고 있는 치즈의 무게는 얼마인가요?
 *
 * 출력
 * 정답을 기약분수로 표현했을 때 P/Q kg 이라면 첫 번째 줄에 P와 Q를 공백을
 * 사이에 두고 출력합니다.
 */
const [a, b] = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split(" ");
console.log(b - a, b);
