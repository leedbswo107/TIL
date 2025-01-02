/**
 * 문제
 * 욱제는 ‘삼’이란 음절을 참 좋아한다. 인삼, 홍삼, 해삼, 삼성, 이춘삼(李春森), 삼식이, 삼시세끼,
 *  ㄴㄴ 그거 안 삼, 삼과 죽음, 알았삼, 걷다보니 신천역 삼, 그리고 특히 일이삼을 좋아한다.
 * 그래서 욱제는 3을 가지고 놀아보기로 했삼.
 * 3개 숫자(0, 1, 2)만 가지고 N자리 3의 배수를 만들어 보삼. 만드는 배수는 자연수 이삼.
 * 0으로 시작하는 수는 만들 수 없는 수 이삼. 3의 배수가 몇 개나 나올 수 있삼?
 *
 * 출력
 * 0, 1, 2만 가지고 만들 수 있는 N자리 3의 배수의 개수를 출력하삼.
 * 숫자가 너무 커질 수 있으니까 답을 109+9(1,000,000,009)로 나눈 나머지를 출력하삼.
 */
const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
const dp = [0n, 2n];
const solution = (n) => {
  for (let i = 2; i < n; i++) {
    if (dp[i]) dp[i];
    else dp[i] = dp[i - 1] * 3n;
  }
};
solution(N);
console.log(`${dp[N - 1] % 1000000009n}`);

// back tracking 검사
// const result = [];
// const N = 6;
// const backTracking = (arr, line) => {
//   if (line.length !== N) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       const copyArr = [...arr];
//       const copyLine = [...line];
//       const num = copyArr[i];
//       copyLine.push(num);
//       backTracking(copyArr, copyLine);
//     }
//   } else {
//     if (line[0] !== 0) {
//       const num = +line.join("");
//       !(num % 3) && result.push(num);
//     }
//     line = [];
//   }
// };
// backTracking([0, 1, 2], []);
// console.log(result);
// console.log(result.length % 1000000009);
