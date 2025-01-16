/**
 * 문제
 * 욱제는 15라는 수를 굉장히 싫어한다. 그래서 0으로 시작하지 않고 1과
 * 5로만 구성된 N자리 양의 정수 중에서, 15의 배수가 몇 개인지 궁금해졌다.
 * 참가자 여러분도 궁금하지요?
 * 안 궁금함? 15ㄱ
 *
 * 출력
 * 문제의 답을 1,000,000,007로 나눈 나머지를 출력한다.
 */
const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
const dp = [0n, 1n];
const solution = (n) => {
  for (let i = 2; i < n; i++) {
    if (dp[i]) dp[i];
    else dp[i] = (dp[i - 1] + dp[i - 2] * 2n) % 1000000007n;
  }
  return dp[n - 1];
};
const result = solution(N);
console.log(`${result}`);

// 패턴 파악 코드
// let result = [];
// const N = 7;
// const solution = (arr, line) => {
//   if (line.length !== N) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       const copyArr = [...arr];
//       const copyLine = [...line];
//       const num = copyArr[i];
//       copyLine.push(num);
//       solution(copyArr, copyLine);
//     }
//   } else {
//     !(+line.join("") % 15) && result.push(+line.join(""));
//     line = [];
//   }
// };
// solution([1, 5], []);
// result = Array.from(new Set(result));
// console.log(result);
// console.log(result.length);
