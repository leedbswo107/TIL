/**
 * 문제
 * N이 주어졌을 때, fibonacci(N)을 호출했을 때, 0과 1이 각각 몇 번 출력되는지 구하는 프로그램을 작성하시오.
 *
 * 출력
 * 각 테스트 케이스마다 0이 출력되는 횟수와 1이 출력되는 횟수를 공백으로 구분해서 출력한다.
 */
const [T, ...arr] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);
const result = [];
const fibo = (N) => {
  let dp = [];
  for (let i = 0; i <= N; i++) {
    if (i === 0) dp[i] = [1, 0];
    else if (i === 1) dp[i] = [0, 1];
    else dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
  }
  return dp[N].join(" ");
};
arr.forEach((e) => result.push(fibo(e)));
console.log(result.join("\n"));
