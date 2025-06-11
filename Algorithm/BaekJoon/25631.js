/**
 * 문제
 * 마트료시카는 속이 비어있는 인형이다. 성빈이는N개의 마트료시카를 가지고 있다.i번째 마트료시카의 크기는ai이고, 마트료시카 속은 모두 비어있다성빈이는 남아 있는 마트료시카 중에서i번째와j번(i \neq j)$ 마트료시카를 고른 뒤에i번째 마트료시카를j번째 마트료시카 속에 넣을 수 있다. 단,j번째 마트료시카의 속이 비어있어야 하고,i번째 마트료시카보다j번째 마트료시카가 더 커야 한다. 합친 후에는 남아 있는 마료시카의 개수가 한 개 줄어든다.성빈이는 마트료시카를 최대한 합쳐서 정리하려고 한다. 성빈이가마트료시카를 잘 합친다면 남아 있는 마트료시카의 최소 개수는 얼마일까?
 * 
 * 출력
 * 남아있는 마트료시카의 최소 개수를 출력한다.
 */
const [_, A] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
A.sort((a, b) => b - a);
const result = [];
while (A.length > 0) {
  let arr = [];
  arr.push(A.shift());
  for (let i = 0; i < A.length; i++) {
    if (arr[arr.length - 1] > A[i]) {
      if (!arr.includes(A[i])) {
        arr.push(...A.splice(i--, 1));
      } else i++;
    }
  }
  result.push(arr);
}
console.log(result.length);