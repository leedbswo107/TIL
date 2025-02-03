/**
 * 문제
 * 심해에는 두 종류의 생명체 A와 B가 존재한다. A는 B를 먹는다. 
 * A는 자기보다 크기가 작은 먹이만 먹을 수 있다. 
 * 예를 들어, A의 크기가 {8, 1, 7, 3, 1}이고, B의 크기가 {3, 6, 1}인 경우에 A가 B를 먹을 수 있는 
 * 쌍의 개수는 7가지가 있다. 
 * 8-3, 8-6, 8-1, 
 * 7-3, 7-6, 7-1, 
 * 3-1.
 * 두 생명체 A와 B의 크기가 주어졌을 때, A의 크기가 B보다 큰 쌍이 몇 개나 있는지 구하는 
 * 프로그램을 작성하시오.
 * 
 * 출력
 * 각 테스트 케이스마다, A가 B보다 큰 쌍의 개수를 출력한다.
 */
const [T, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const destructuring = (arr) => arr.split(' ').map(Number);
const solution = (a, b) => {
  let startA = 0;
  let startB = 0;
  let result = 0;
  while (startA < a.length) {
    if (a[startA] > b[startB]) {
      startB++;
    } else {
      result += startB;
      startA++;
    }
  }
  return result;
}
let result = new Array(+T);
for (let i = 0; i < +T; i++) {
  const [N, M] = destructuring(input[i * 3]);
  const A = destructuring(input[i * 3 + 1]).sort((a, b) => a - b);
  const B = destructuring(input[i * 3 + 2]).sort((a, b) => a - b);
  result[i] = solution(A, B);
}
console.log(result.join('\n'));