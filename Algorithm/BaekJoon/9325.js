/**
 * 문제
 * 해빈이는 학교를 다니면서 틈틈히 번 돈으로 자동차를 사려고 한다. 자동차에 여러 가지 옵션을 포함시킬 수 있는데 해빈이는 덧셈과 곱셈을 하지 못하기 때문에 친구 태완이에게 도움을 청했다. 하지만 태완이도 덧셈과 곱셈을 못한다. 불쌍한 이 두 친구를 위해 모든 옵션이 주어진 자동차를 구매하는데 필요한 액수를 계산해 주자.
 * 
 * 출력
 * 각 테스트 케이스 마다, 해빈이가 최종적으로 구매하려는 자동차의 가격을 한줄씩 출력한다.
 */
const [_, ...car] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = [];
const solution = (arr) => {
  let sum = 0;
  arr.forEach(e => sum += e.split(' ').map(Number).reduce((acc, cur) => acc * cur, 1));
  return sum;
}
for (let i = 0; i < car.length; i++) {
  let s = +car[i];
  let n = +car[i + 1];
  result.push(s + solution(car.slice(i + 2, i + 2 + n)));
  i += (n + 1);
}
console.log(result.join('\n'));