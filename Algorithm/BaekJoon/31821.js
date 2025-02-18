/**
 * 문제
 * 화석인 당신은 국민대학교에 갓 입학한 새내기들에게 학식을 사주기로 했다. 
 * 국민대학교 학생식당에서는 서로 다른 번호가 부여된 여러 코너에서 각기 다른 식사 
 * 메뉴를 판매하는데, 새내기들이 먹고 싶어 하는 메뉴가 다양해서 결제해야 하는 
 * 금액을 계산하는 데 어려움을 겪고 있다.
 * 각 코너에서 판매하는 메뉴의 가격과 새내기들이 먹고 싶어 하는 메뉴를 판매하는 
 * 코너의 번호가 주어지면 결제해야 하는 금액의 총액을 출력해 보자.
 * 
 * 출력
 * 당신이 결제해야 하는 금액의 총액을 출력한다.
 */
const [T, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const arr = input.splice(0, T);
const solution = (a) => {
  a.shift();
  let sum = 0;
  a.forEach(e => sum += arr[e - 1]);
  return sum;
}
const result = solution(input);
console.log(result);