/**
 * 문제
 * 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
 *
 * 출력
 * 첫째 줄부터 차례대로 별을 출력한다.
 */
const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
const solution = (N) => {
  const size = (N - 1) * 4 + 1;
  const pattern = Array.from({ length: size }, () => new Array(size).fill(" "));
  let num = 0;
  const handlePattern = (num) => {
    if (num >= N - 1) {
      const index = Math.ceil(size / 2) - 1;
      pattern[index][index] = "*";
      return;
    }
    for (let i = 0; i < size; i++) {
      if (i === num * 2 || i === size - num * 2 - 1) {
        for (let j = num * 2; j < size - num * 2; j++) {
          pattern[i][j] = "*";
        }
      }
      if (i < size - num * 2 && i >= num * 2) {
        for (let j = num * 2; j < size - num * 2; j++) {
          if (j === num * 2 || j === size - num * 2 - 1) pattern[i][j] = "*";
        }
      }
    }
    return handlePattern(num + 1);
  };
  handlePattern(num);
  return pattern;
};
const result = solution(N).map((e) => e.join(""));
console.log(result.join("\n"));
