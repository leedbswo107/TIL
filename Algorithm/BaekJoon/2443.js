/**
 * 문제
 * 첫째 줄에는 별 2×N-1개, 둘째 줄에는 별 2×N-3개, ..., N번째 줄에는 별 1개를 찍는 문제
 * 별은 가운데를 기준으로 대칭이어야 한다.
 *
 * 출력
 * 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
 */
const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
const result = [];
for (let i = 0; i < N; i++)
  result.push(" ".repeat(i) + "*".repeat(N - i + N - i - 1));
console.log(result.join("\n"));
