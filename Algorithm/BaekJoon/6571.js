/**
 * 문제
 * 피보나치 수의 정의는 다음과 같다.
 * f1 := 1
 * f2 := 2
 * fn := fn-1 + fn-2 (n ≥ 3)
 * 두 수 a와 b가 주어졌을 때, 구간 [a, b]에 포함되는
 * 피보나치 수의 개수를 구하는 프로그램을 작성하시오.
 *
 * 출력
 * 각 테스트 케이스에 대해서, a ≤ fi ≤ b 인 피보나치 수 fi의 개수를 출력한다.
 */
let nums = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n");
nums.pop();
nums = nums.map((e) => e.split(" ").map(BigInt));
const dp = [];
const count = [];
const solution = (start, end) => {
  let c = 0;
  for (let i = 0n; i < end; i++) {
    if (dp[i - 1n] > end) break;
    if (i <= 2n) dp[i] = i + 1n;
    else if (dp[i]) dp[i];
    else dp[i] = dp[i - 1n] + dp[i - 2n];
    if (dp[i] >= start && dp[i] <= end) c++;
  }
  count.push(c);
};
nums.forEach((e) => solution(e[0], e[1]));
console.log(count.join("\n"));
