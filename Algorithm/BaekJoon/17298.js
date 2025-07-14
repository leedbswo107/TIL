/**
 * 문제
 * 크기가 N인 수열 A = A1, A2, ..., AN이 있다. 수열의 각 원소 Ai에 대해서 오큰수 NGE(i)를 구하려고 한다. Ai의 오큰수는 오른쪽에 있으면서 Ai보다 큰 수 중에서 가장 왼쪽에 있는 수를 의미한다. 그러한 수가 없는 경우에 오큰수는 -1이다.
 * 예를 들어, A = [3, 5, 2, 7]인 경우 NGE(1) = 5, NGE(2) = 7, NGE(3) = 7, NGE(4) = -1이다. A = [9, 5, 4, 8]인 경우에는 NGE(1) = -1, NGE(2) = 8, NGE(3) = 8, NGE(4) = -1이다.
 * 
 * 출력
 * 총 N개의 수 NGE(1), NGE(2), ..., NGE(N)을 공백으로 구분해 출력한다.
 */
const [[N], A] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const result = [];
const arr = [];
for (let i = 0; i < N; i++) {
  const a = A.pop();
  if (arr.length === 0) {
    result.push(-1);
  } else {
    if (a >= arr[arr.length - 1]) {
      while (1) {
        if (arr[arr.length - 1] > a) {
          result.push(arr[arr.length - 1]);
          break;
        } else if (arr.length === 0) {
          result.push(-1);
          break;
        }
        arr.pop();
      }
    } else if (a < arr[arr.length - 1]) {
      result.push(arr[arr.length - 1]);
    }
  }
  arr.push(a);
}
console.log(result.reverse().join(' '));