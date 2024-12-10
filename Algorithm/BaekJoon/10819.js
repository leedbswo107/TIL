/**
 * 문제
 * N개의 정수로 이루어진 배열 A가 주어진다. 이때, 배열에 들어있는 정수의 순서를
 * 적절히 바꿔서 다음 식의 최댓값을 구하는 프로그램을 작성하시오.
 * |A[0] - A[1]| + |A[1] - A[2]| + ... + |A[N-2] - A[N-1]|
 *
 * 출력
 * 첫째 줄에 배열에 들어있는 수의 순서를 적절히 바꿔서 얻을 수 있는 식의 최댓값을 출력한다.
 */
let [N, A] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n");
const nums = [];
A = A.split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const numberOfCases = [];
const backTracking = (arr, line) => {
  if (line.length !== +N) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      const copyArr = [...arr];
      const copyLine = [...line];
      const num = copyArr.splice(i, 1);
      copyLine.push(...num);
      backTracking(copyArr, copyLine);
    }
  } else {
    numberOfCases.push(line);
    line = [];
  }
};
backTracking(A, []);
numberOfCases.forEach((e) => {
  let sum = 0;
  for (let i = 1; i < +N; i++) sum += Math.abs(e[i - 1] - e[i]);
  nums.push(sum);
});
console.log(Math.max(...nums));
