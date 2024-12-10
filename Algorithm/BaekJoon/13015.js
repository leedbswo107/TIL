/**
 * 문제
 * 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
 *
 * 출력
 * 규칙대로 별을 출력한다.
 */
const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
const result = [];
for (let i = 1; i <= N * 2 - 1; i++) {
  if (i === 1 || i === N * 2 - 1)
    result.push(
      "*".repeat(N) + " ".repeat(Math.abs(2 * (N - i)) - 1) + "*".repeat(N)
    );
  else {
    if (i < N) {
      result.push(
        " ".repeat(i - 1) +
          "*" +
          " ".repeat(N - 2) +
          "*" +
          " ".repeat(2 * (N - i) - 1) +
          "*" +
          " ".repeat(N - 2) +
          "*"
      );
    } else if (i === N) {
      result.push(
        " ".repeat(i - 1) +
          "*" +
          " ".repeat(N - 2) +
          "*" +
          " ".repeat(N - 2) +
          "*"
      );
    } else {
      result.push(
        " ".repeat(N - (i - N) - 1) +
          "*" +
          " ".repeat(N - 2) +
          "*" +
          " ".repeat(2 * (i - N) - 1) +
          "*" +
          " ".repeat(N - 2) +
          "*"
      );
    }
  }
}
console.log(result.join("\n"));
