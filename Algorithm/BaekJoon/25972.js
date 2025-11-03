/**
 * 문제
 * 미야노는 N개의 도미노를 가지고 놀고 있다. 각각의 도미노는 1차원 좌표계의 x좌표 위에 위치하고 있고 길이를 가진다. i번째 도미노의 x좌표를 ai, 길이를 li라 하자. 도미노는 오른쪽으로 무너트릴 수 있다. 길이 li를 가지는 도미노가 위치 ai에 있을 때 오른쪽으로 무너질 경우 좌표 값이 ai보다 크고 ai+li보다 작거나 같은 도미노 중 가장 작은 좌표를 가지는 도미노가 오른쪽으로 무너진다.
 * 미야노는 도미노를 최소한의 횟수로 무너트려서 모든 도미노를 무너트리려고 한다. 머리가 나쁜 미야노는 최소한의 횟수를 구하지 못해 여러분에게 답을 물어봤다. 미야노를 위해 모든 도미노가 무너지려면 처음에 몇 개의 도미노를 무너트려야 하는지 구해주자.
 * 
 * 출력
 * 모든 도미노가 무너지기 위해 미야노가 처음에 무너트려야 할 도미노의 갯수를 구해주자.
 */
const [[N], ...dominoes] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
dominoes.sort((a, b) => a[0] - b[0]);
let result = 1;
for (let i = 1; i < N; i++) {
  const [a1, l1] = dominoes[i - 1];
  const a2 = dominoes[i][0];
  a2 > (a1 + l1) && result++;
}
console.log(result);