/**
 * 문제
 * 맨 앞자리에 앉은 상근이는 수업시간이 아무리 지루해도 딴짓을 할 수가 없다. 그런데 오늘은 너무 딴짓이 하고 싶다.
 * 공책에 정인이에게 배운 숫자 카드놀이를 하려고 한다.
 * 숫자 카드놀이를 하려면 먼저 자연수 S를 골라야 한다. 그 다음, 각 자리를 모두 곱하면서 한 자리 수가 나오기 전까지 계속해서 새로운 수를 만드는 게임이다.
 * 예를 들어, 95로 시작한다면, 9 × 5 = 45를 얻게 된다. 45도 두 자리 이상이기 때문에, 4 × 5 = 20를 얻게 된다. 그 다음 2 × 0 = 0 이 되고, 0은 한 자리 숫자이기 때문에 게임은 끝나게 된다.
 * 또, 396에서 시작한다면, 아래와 같은 과정을 거쳐 2로 끝나게 된다.
 * 3 × 9 × 6 = 162 
 * 1 × 6 × 2 = 12 
 * 1 × 2 = 2 
 * 자연수 S가 주어졌을 때, 숫자 카드놀이를 하는 과정을 출력하는 프로그램을 작성하시오.
 * 
 * 출력
 * 0이 아닌 입력에 대해서, 숫자 카드놀이가 끝나기 전 까지 나온 수를 공백으로 구분하여 출력한다. 첫 값은 입력으로 주어진 값이다.
 */
const nums = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = [];
const solution = (num) => {
  const arr = [num];
  let newNum = num;
  while (newNum.length !== 1) {
    newNum = newNum.split('').map(Number).reduce((acc, cur) => acc * cur, 1);
    newNum = newNum.toString();
    arr.push(newNum);
  }
  return arr.join(' ');
}
nums.slice(0, -1).forEach(e => result.push(solution(e)));
console.log(result.join('\n'));