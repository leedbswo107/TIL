/**
 * 문제
 * 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 3가지가 있다. 합을 나타낼 때는 수를 1개
 * 이상 사용해야 한다. 단, 합은 대칭을 이루어야 한다.
 * 1+1+1+1
 * 1+2+1
 * 2+2
 * 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을
 * 작성하시오.
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
const result = new Array(T).fill(0);
const dp = [];
const NUMBER_OF_DIVIDE = 1000000009n;
const solution = (n) => {
  for (let i = 0n; i <= n; i++) {
    if (i < 3n) dp[i] = i + 1n;
    else if (dp[i]) dp[i];
    else dp[i] = dp[i - 1n] + dp[i - 2n] + dp[i - 3n];
  }
};
const maxNum = Math.max(...N);
const num = !(maxNum % 2) ? maxNum / 2 : (maxNum - 1) / 2;
solution(num);
N.forEach((e, i) => {
  const num = !(e % 2) ? e / 2 : (e - 1) / 2;
  result[i] = dp[num] % NUMBER_OF_DIVIDE;
});
console.log(result.join("\n"));
