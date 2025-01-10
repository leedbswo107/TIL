/**
 * 문제
 * 3×N 크기의 벽을 2×1, 1×2 크기의 타일로 채우는 경우의 수를 구해보자.
 *
 * 출력
 * 첫째 줄에 경우의 수를 출력한다.
 */
const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
const dp = [0, 3, 0, 11];
const solution = (n) => {
  for (let i = 4; i < n; i++) {
    dp[i] = !((i + 1) % 2) ? dp[i - 2] * 4 - dp[i - 4] : 0;
  }
};
solution(N);
console.log(dp[N - 1]);
