/**
 * 문제
 * 양의 정수 n이 주어진다. 아래 조건을 만족하는 양의 정수 A의 개수를 구하자.
 * 정수 A는 n개의 자릿수를 갖는 정수이며, 각각의 자릿수는 0이 아니다.
 * 정수 A의 이웃한 두 자리의 숫자의 차이는 2 이하이다. 즉, 정수 A의 각 자리의 숫자를 높은 자릿수부터 낮은 자릿수 순서로 A1, A2, ..., An이라고 할 때, |Ai - Ai+1| ≤ 2 (1 ≤ i ≤ n-1) 이다.
 * 
 * 출력
 * 첫 번째 줄에 양의 정수 A의 개수를 987,654,321로 나눈 나머지를 출력한다.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
const DIV_NUM = 987654321;
let dp = Array.from({ length: N }, () => new Array(9).fill(0));
for (let i = 0; i < N; i++) {
  if (i === 0) dp[i] = dp[i].map(e => e = 1);
  else {
    for (let j = 0; j < 9; j++) {
      if (j === 0) dp[i][j] = (dp[i - 1][j] + dp[i - 1][j + 1] + dp[i - 1][j + 2]) % DIV_NUM;
      else if (j === 1) dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j] + dp[i - 1][j + 1] + dp[i - 1][j + 2]) % DIV_NUM;
      else if (j === 7) dp[i][j] = (dp[i - 1][j - 2] + dp[i - 1][j - 1] + dp[i - 1][j] + dp[i - 1][j + 1]) % DIV_NUM;
      else if (j === 8) dp[i][j] = (dp[i - 1][j - 2] + dp[i - 1][j - 1] + dp[i - 1][j]) % DIV_NUM;
      else dp[i][j] = (dp[i - 1][j - 2] + dp[i - 1][j - 1] + dp[i - 1][j] + dp[i - 1][j + 1] + dp[i - 1][j + 2]) % DIV_NUM;
    }
  }
}
console.log(dp.pop().reduce((acc, cur) => acc + cur, 0) % DIV_NUM);