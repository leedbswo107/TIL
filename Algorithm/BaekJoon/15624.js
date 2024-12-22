/**
 * 문제
 * 피보나치 수는 0과 1로 시작한다. 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1이다.
 * 그 다음 2번째 부터는 바로 앞 두 피보나치 수의 합이 된다.
 * 이를 식으로 써보면 Fn = Fn-1 + Fn-2 (n ≥ 2)가 된다.
 * n=17일때 까지 피보나치 수를 써보면 다음과 같다.
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
 * n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.
 *
 * 출력
 * 첫째 줄에 n번째 피보나치 수를 1,000,000,007으로 나눈 나머지를 출력한다.
 */

const n = BigInt(require("fs").readFileSync("./input.txt", "utf-8").trim());
const NUMBER_OF_DIVIDE = 1000000007;
const dp = [];
const fibo = (i) => {
  for (let j = 0; j <= i; j++) {
    if (j <= 1) dp[j] = j;
    else if (dp[j]) dp[j];
    else dp[j] = (dp[j - 2] + dp[j - 1]) % NUMBER_OF_DIVIDE;
  }
};
fibo(n);
console.log(dp[n]);
