// 리팩토링 필요
/**
 * 문제
 * 두 정수 A와 B가 있을 때, A에 포함된 숫자의 순서를 섞어서 새로운 수 C를 만들려고 한다.
 * 즉, C는 A의 순열 중 하나가 되어야 한다.
 * 가능한 C 중에서 B보다 작으면서, 가장 큰 값을 구해보자. C는 0으로 시작하면 안 된다.
 *
 * 출력
 * B보다 작은 C중에서 가장 큰 값을 출력한다. 그러한 C가 없는 경우에는 -1을 출력한다.
 */

let [A, B] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split(" ")
  .map(Number);
A = A.toString().split("").map(Number);
const lenA = A.length;
let btResult = 0;
const backTracking = (arr, line) => {
  if (line.length !== lenA) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      const copyArr = [...arr];
      const copyLine = [...line];
      const num = copyArr.splice(i, 1);
      copyLine.push(...num);
      backTracking(copyArr, copyLine);
    }
  } else {
    const num = Number.parseInt(line.join(""), 10);
    if (num < B)
      btResult = Math.max(btResult, Number.parseInt(line.join(""), 10));
    line = [];
  }
};
backTracking(A, []);
console.log(Math.ceil(Math.log10(btResult)) === lenA ? btResult : -1);
