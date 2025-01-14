/**
 * 문제
 * 실수 a와 정수 b가 주어졌을 때, a의 b제곱을 정확하게 계산하는 프로그램을 작성하시오.
 *
 * 출력
 * 첫째 줄에 a의 b제곱을 출력한다.
 */
let [a, b] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split(" ");
const decimalPointIndex = a.length - a.indexOf(".") - 1;
a = BigInt(a.split(".").join(""));
const result = (a ** BigInt(b)).toString().split("");
const decimalPointAfterCalc = b * decimalPointIndex;
if (result.length < decimalPointAfterCalc) {
  const len = decimalPointAfterCalc - result.length;
  for (let i = 0; i <= len; i++) result.unshift(0);
}
result.splice(result.length - decimalPointAfterCalc, 0, ".");
console.log(result.join(""));

// 아래 코드로도 출력은 원하는 값이 나오나, 채점시 틀림
// let [a, b] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ");
// let count = 0;
// while (!Number.isInteger(a)) {
//   a *= 10;
//   count++;
// }
// a = BigInt(a);
// const result = (a ** BigInt(b)).toString().split("");
// if (result.length < count * b) {
//   const len = result.length;
//   for (let i = 0; i <= count * b - len; i++) {
//     result.unshift("0");
//   }
// }
// result.splice(result.length - count * b, 0, ".");
// while (result[result.length - 1] === "0") result.pop();
// console.log(result.join(""));
