/**
 * 문제
 * 0보다 크거나 같고, 9보다 작거나 같은 숫자로 이루어진 문자열 S에서 연속된 세 숫자가 몇 번 등장하는지 출력하라. 단, 네 숫자 이상이 연속일 경우에는 그 일부를 세지 않고, 연속된 세 숫자는 오름차순이어야 한다.
 * 
 * 출력
 * 연속된 세 숫자가 등장한 횟수를 출력한다.
 */
const S = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('').map(Number);
let result = 0;
for (let i = 1; i < S.length; i++) {
  let count = 0;
  let j = 0;
  while (S[i + j] - S[i - 1 + j] === 1) {
    count++;
    j++;
  }
  count === 2 && result++;
  i += j;
}
console.log(result);