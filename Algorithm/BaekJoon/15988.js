/**
 * 문제
 * 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다. 합을 나타낼 때는 수를 1개
 * 이상 사용해야 한다.
 * 1+1+1+1
 * 1+1+2
 * 1+2+1
 * 2+1+1
 * 2+2
 * 1+3
 * 3+1
 * 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.
 *
 * 출력
 * 각 테스트 케이스마다, n을 1, 2, 3의 합으로 나타내는 방법의 수를 1,000,000,009로
 * 나눈 나머지를 출력한다.
 */
const [T, ...N] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);
const DIVIDE_NUM = 1000000009;
const result = [];
const dp = [1, 2, 4];
const solution = (n) => {
  for (let i = 3; i < n; i++) {
    if (dp[i]) dp[i];
    else dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % DIVIDE_NUM;
  }
};
N.forEach((e, i) => {
  solution(e);
  result[i] = dp[e - 1];
});
console.log(result.join("\n"));
