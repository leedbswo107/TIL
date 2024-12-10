/**
 * 문제
 * 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
 *
 * 출력
 * 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
 */
const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
const result = [];
for (let i = 1; i <= N; i++)
  result.push(" ".repeat(N - i) + (i === 1 ? "*" : "* ".repeat(i - 1) + "*"));
console.log(result.join("\n"));
