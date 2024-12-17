/**
 * 문제
 * 2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오
 * 아래 그림은 2×5 크기의 직사각형을 채운 한 가지 방법의 예이다.
 *
 * 출력
 * 첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.
 */
const n = +require("fs").readFileSync("./input.txt", "utf-8").trim();
const dp = [];
const NUMBER_OF_DIVIDE = 10007;
const solution = (N) => {
  for (let i = 0; i <= N; i++) {
    if (i <= 3) dp[i] = i;
    else if (dp[i]) dp[i];
    else dp[i] = (dp[i - 1] + dp[i - 2]) % NUMBER_OF_DIVIDE;
  }
};
solution(n);
console.log(dp[n]);
