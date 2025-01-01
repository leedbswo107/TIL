/**
 * 문제
 * 피보나치 수열은 아래와 같이 표현된다.
 * 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * 각 숫자는 앞의 두 숫자의 합으로 나타내는 것을 알 수 있다.
 * P와 Q 그리고 n이 주어질 때, P번째 피보나치 숫자를 Q로 나눈 나머지를 구하여라.
 *
 * 출력
 * 각 테스트 케이스마다 "Case #x: M" 형식으로 출력한다.
 * x는 테스트 케이스 번호(1부터 시작), M은 P번째 피보나치 숫자를 Q로 나눈 나머지이다.
 */
const [T, ...caseList] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n");
const dp = [];
const result = new Array(+T);
const solution = (p) => {
  for (let i = 0n; i <= p; i++) {
    if (i < 2n) dp[i] = i;
    else if (dp[i]) dp[i];
    else dp[i] = dp[i - 1n] + dp[i - 2n];
  }
};
solution(10000n);
caseList.forEach((e, i) => {
  const [P, Q] = e.split(" ").map(BigInt);
  result[i] = `Case #${i + 1}: ${dp[P] % Q}`;
});
console.log(result.join("\n"));
