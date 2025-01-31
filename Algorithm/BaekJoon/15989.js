/**
 * 문제
 * 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 4가지가 있다. 
 * 합을 나타낼 때는 수를 1개 이상 사용해야 한다. 
 * 합을 이루고 있는 수의 순서만 다른 것은 같은 것으로 친다.
 * 1+1+1+1
 * 2+1+1 (1+1+2, 1+2+1)
 * 2+2
 * 1+3 (3+1)
 * 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 각 테스트 케이스마다, n을 1, 2, 3의 합으로 나타내는 방법의 수를 출력한다.
 */
const [T, ...N] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const max = Math.max(...N);
const dp = [0];
const result = new Array(+T);
let num = 1;
for (let i = 1; i <= max; i++) {
  if (!(i % 6)) {
    dp[i] = dp[i - 1] + num + 1;
    dp[i + 1] = dp[i] + num;
    num++;
  } else if (dp[i]) dp[i];
  else dp[i] = dp[i - 1] + num;
}
N.forEach((e, i) => result[i] = dp[e]);
console.log(result.join('\n'));

// 패턴파악용 백트래킹 코드
// const N = 13;
// const arr = [1, 2, 3];
// let result = [];
// const solution = (arr, line, n) => {
//   if (line.length !== n) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       const copyArr = [...arr];
//       const copyLine = [...line];
//       const num = copyArr[i];
//       // if (num !== copyLine[line.length - 1] || copyLine.length === 0) {
//       copyLine.push(num);
//       solution(copyArr, copyLine, n);
//       // }
//     }
//   } else {
//     const total = line.reduce((acc, cur) => acc + cur, 0);
//     line = line.sort((a, b) => a - b)
//     if (total === N) result.push(line.join(' '));
//     line = [];
//   }
// }
// for (let i = 1; i < N + 1; i++) {
//   solution(arr, [], i);
// }
// result = Array.from(new Set(result));
// console.log(result.length);