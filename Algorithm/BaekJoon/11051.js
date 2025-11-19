/**
 * 문제
 * 자연수 N과 정수 K가 주어졌을 때 이항 계수 (N | K)를 10,007로 나눈 나머지를 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * (N | K) 를 10,007로 나눈 나머지를 출력한다.
 */
const [N, K] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
const dp = Array.from({ length: N + 1 }, () => []);
for (let i = 0; i <= N; i++) for (let j = 0; j <= i; j++) dp[i][j] = (j === i || j === 0) ? 1 : (dp[i - 1][j - 1] + dp[i - 1][j]) % 10007;
console.log(dp[N][K]);