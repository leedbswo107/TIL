/**
 * 문제
 * 2×n 직사각형을 2×1과 2×2 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
 * 아래 그림은 2×17 직사각형을 채운 한가지 예이다.
 *
 * 출력
 * 입력으로 주어지는 각각의 n마다, 2×n 직사각형을 채우는 방법의 수를 출력한다.
 *
 * 주의사항
 * n 이 0 인경우 직사각형을 채우는 방법의 수를 1로 설정
 */
const N = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);
const dp = [];
const result = [];
const solution = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i < 2) dp[i] = 1n;
    else if (dp[i]) dp[i];
    else dp[i] = dp[i - 1] + dp[i - 2] * 2n;
  }
};
solution(Math.max(...N));
N.forEach((e, i) => (result[i] = dp[e]));
console.log(result.join("\n"));
