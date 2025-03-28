/**
 * 문제
 * 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다. 
 * 합을 나타낼 때는 수를 1개 이상 사용해야 한다.
 * 1+1+1+1
 * 1+1+2
 * 1+2+1
 * 2+1+1
 * 2+2
 * 1+3
 * 3+1
 * 정수 n과 m이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 
 * 프로그램을 작성하시오. 단, 사용한 수의 개수는 m개 이하 이어야 한다.
 * 
 * 출력
 * 각 테스트 케이스마다, n을 1, 2, 3의 합으로 나타내는 방법의 수를 
 * 1,000,000,009로 나눈 나머지를 출력한다. 단, 사용한 수의 개수는 m개 이하 이어야 한다.
 */
const [T, ...arr] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const testCase = arr.map(e => e.split(' ').map(Number));
const maxN = [...testCase].sort((a, b) => b[0] - a[0])[0][0];
const maxM = [...testCase].sort((a, b) => b[1] - a[1])[0][1];
const dp = Array.from({ length: maxN }, () => new Array(maxM).fill(0n));
const DIV_NUM = 1000000009n;
dp[0][0] = 1n;
dp[1][0] = 1n;
dp[2][0] = 1n;
dp[1][1] = 2n;
dp[2][1] = 3n;
dp[2][2] = 4n;
const solution = (n, m) => {
  for (let i = 3; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (i === j) dp[i][j] = (dp[i - 1][j - 1] + dp[i - 2][j - 2] + dp[i - 3][j - 3]) % DIV_NUM;
      else if (j === i - 1) dp[i][j] = (dp[i - 1][j - 1] + dp[i - 2][j - 1] + dp[i - 3][j - 2]) % DIV_NUM;
      else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 2][j - 1] + dp[i - 3][j - 1]) % DIV_NUM;
    }
  }
}
solution(maxN, maxM);
const result = testCase.map(e => dp[e[0] - 1][e[1] - 1]).join('\n');
console.log(result);