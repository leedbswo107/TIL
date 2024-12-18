/**
 * 문제
 * 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다. 합을 나타낼 때는
 * 수를 1개 이상 사용해야 한다.
 * 1+1+1+1
 * 1+1+2
 * 1+2+1
 * 2+1+1
 * 2+2
 * 1+3
 * 3+1
 * 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를
 * 구하는 프로그램을 작성하시오.
 *
 * 출력
 * 각 테스트 케이스마다, n을 나타낼 때 사용한 수의 개수가 홀수인 방법의 수,
 * 짝수인 방법의 수를 공백으로 구분해 출력한다.
 * 방법의 수는 1,000,000,009로 나눈 나머지를 출력해야 한다.
 */
const [T, ...N] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);
const dp = [
  [0, 0],
  [1, 0],
  [1, 1],
  [2, 2],
];
const NUMBER_OF_DIVIDE = 1000000009;
const result = new Array(T);
const solution = (n) => {
  for (let i = 4; i <= n; i++) {
    if (dp[i]) dp[i];
    else
      dp[i] = [
        (dp[i - 1][1] + dp[i - 2][1] + dp[i - 3][1]) % NUMBER_OF_DIVIDE,
        (dp[i - 1][0] + dp[i - 2][0] + dp[i - 3][0]) % NUMBER_OF_DIVIDE,
      ];
  }
  return dp[n];
};
solution(4);
N.forEach((e, i) => (result[i] = solution(e).join(" ")));
console.log(result.join("\n"));
