/**
 * 문제
 * 피보나치 수열은 다음과 같이 그 전 두 항의 합으로 계산되는 수열이다. 
 * 첫 두 항은 1로 정의된다.
 * f(1) = 1, f(2) = 1, f(n > 2) = f(n − 1) + f(n − 2)
 * 정수를 입력받아, 그에 해당하는 피보나치 수를 출력하는 프로그램을 작성하여라.
 */
const N = BigInt(require('fs').readFileSync('./input.txt', 'utf-8').trim());
const dp = [];
const solution = (n) => {
  for (let i = 0n; i <= n; i++) {
    if (i < 2) dp[i] = i;
    else if (dp[i]) dp[i];
    else dp[i] = dp[i - 1n] + dp[i - 2n];
  }
}
solution(N);
console.log(`${dp.pop()}`);