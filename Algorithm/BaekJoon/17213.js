/**
 * 문제
 * 민건이네 과일 농장은 N가지 종류의 과일을 재배하는 중이다. 평소 민건이에게 앙심을 품고 있던 지환이는 민건이를 골탕 먹이기 위하여 민건이네 과일 농장에서 과일들을 훔치기로 다짐했다.  
 * 지환이는 완벽한 범죄를 위하여 처음 생각한 개수 만큼만 훔치려고 한다. 이때 지환이가 훔칠 수 있는 경우의 수가 몇가지나 될 지 알아보자. 단, 모든 종류의 과일을 적어도 1개는 훔친다.
 * 
 * 출력
 * 첫째 줄에 훔칠 수 있는 경우의 수를 출력한다.
 */
const [N, M] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
let dp = Array.from({length: N + 1}, () => new Array(M + 1).fill(0));
for (var i = 1; i <= N; i++) {
  for (var j = 1; j <= M; j++) {
    dp[i][j] = i === 1 ? 1 : dp[i][j - 1] + dp[i-1][j-1];
  }
}
console.log(dp[N][M]);
