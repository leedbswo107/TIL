/**
 * 문제
 * 2×n 직사각형을 1×2, 2×1과 2×2 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
 *
 * 출력
 * 첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.
 */
const n = +require("fs").readFileSync("./input.txt", "utf-8").trim();
const NUMBER_OF_DIVIDE = 10007;
const dp = [1, 3];
const solution = (N) => {
  for (let i = 2; i < N; i++) {
    if (dp[i]) dp[i];
    else dp[i] = (dp[i - 2] * 2 + dp[i - 1]) % NUMBER_OF_DIVIDE;
  }
};
solution(n);
console.log(dp[n - 1]);
