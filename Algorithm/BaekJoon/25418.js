/**
 * 문제
 * 입력으로 양의 정수 A와 K가 주어지면, 아래 연산을 이용하여 A를 K로 변경하려고 한다.
 *  정수 A를 변경할 때 사용할 수 있는 연산 종류는 다음과 같다.
 * 연산 1: 정수 A에 1을 더한다.
 * 연산 2: 정수 A에 2를 곱한다.
 * 정수 A를 정수 K로 만들기 위해 필요한 최소 연산 횟수를 출력하자.
 *
 * 출력
 * 첫 번째 줄에 양의 정수 A를 양의 정수 K로 만들기 위해 필요한 최소 연산
 * 횟수를 출력한다.
 */
const [A, K] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split(" ")
  .map(Number);
const dp = [K];
const solution = (a) => {
  for (let i = 1; i <= a; i++) {
    if (dp[i - 1] === A) break;
    else if (dp[i]) dp[i];
    else {
      if (!(dp[i - 1] % 2) && dp[i - 1] / 2 >= A) {
        dp[i] = dp[i - 1] / 2;
      } else dp[i] = dp[i - 1] - 1;
    }
  }
};
solution(K);
console.log(dp.length - 1);
