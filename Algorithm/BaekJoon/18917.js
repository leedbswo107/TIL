/**
 * 문제
 * 처음에 0이 하나 포함되어있는 배열 A가 있다. 이때, 다음 쿼리를 수행해야 한다.
 * 1 x: A의 가장 뒤에 x를 추가한다.
 * 2 x: A에서 x를 제거한다. A에 x가 두 개 이상 있는 경우에는 가장 앞에 있는 하나만 
 * 제거한다. 항상 A에 x가 있는 쿼리만 주어진다.
 * 3: A에 포함된 모든 원소를 더한 값을 출력한다.
 * 4: A에 포함된 모든 원소를 XOR한 값을 출력한다.
 * 
 * 출력
 * 3번 혹은 4번 쿼리가 등장할 때마다, 답을 한 줄에 하나씩 출력한다.
 */
const [M, ...Q] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = [];
let sum = 0;
let xor = 0;
const solution = (q) => {
  const [query, x] = q.split(' ').map(Number);
  switch (query) {
    case 1:
      sum += x;
      xor ^= x;
      break;
    case 2:
      sum -= x;
      xor ^= x;
      break;
    case 3:
      result.push(sum);
      break;
    case 4:
      result.push(xor);
      break;
  }
}
Q.forEach(e => solution(e));
console.log(result.join('\n'));