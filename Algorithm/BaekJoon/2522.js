/**
 * 문제
 * 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
 *
 * 출력
 * 첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.
 */
const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
const result = [];
for (let i = 1; i <= N * 2 - 1; i++) {
  const [a, b] = i <= N ? [N - i, i] : [i - N, 2 * N - i];
  result.push(" ".repeat(a) + "*".repeat(b));
}
console.log(result.join("\n"));
