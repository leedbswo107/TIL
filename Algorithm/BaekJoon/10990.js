/**
 * 문제
 * 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
 *
 * 출력
 * 규칙대로 별을 출력한다.
 */
const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
const result = [];
for (let i = 1; i <= N; i++) {
  result.push(
    i === 1
      ? " ".repeat(N - i) + "*"
      : " ".repeat(N - i) + "*" + " ".repeat(i * 2 - 3) + "*"
  );
}
console.log(result.join("\n"));
