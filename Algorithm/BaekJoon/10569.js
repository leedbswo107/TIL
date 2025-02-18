/**
 * 문제
 * 수학자가 구를 깎아서 볼록다면체를 만들었다. 
 * 이 수학자는 임의의 볼록다면체에 대해 (꼭짓점의 수) - (모서리의 수) + (면의 수) = 2가 
 * 성립한다는 것을 알고 있다. 그래서 구를 깎는 게 취미인 이 사람은 꼭짓점, 모서리와 면의 수를 
 * 기록할 때 꼭짓점과 모서리의 수만 세고 면의 수는 세지 않는다.
 * 
 * 출력
 * 각 V와 E에 대해 볼록다면체의 면의 수를 한 줄에 하나씩 출력한다.
 */
const [T, ...C] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = new Array(+T);
const solution = (c) => {
  const [V, E] = c.split(' ').map(Number);
  return (E - V + 2);
}
C.forEach((e, i) => result[i] = solution(e));
console.log(result.join('\n'));