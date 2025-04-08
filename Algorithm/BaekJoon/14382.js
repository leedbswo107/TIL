/**
 * 문제
 * 블리트릭스라는 양은 더 빨리 잠을 들기 위한 전략을 세웠다.
 * 먼저, 숫자 N을 뽑는다. 그리고 N, 2 × N, 3 × N 등을 떠올린다. 숫자를 떠올릴 때 마다, 그 숫자의 모든 자리수의 숫자들을 적어놓는데, 이미 적은 숫자는 또 적지 않는다. 0에서 9까지의 모든 숫자가 적히게 되면 잠이 든다.
 * 블리트릭스는 N에서 시작해서 i × N 후에는 (i + 1) × N을 떠올리게 된다. 예를 들어 N = 1692 일 경우, 다음 과 같이 진행된다:
 * N = 1692. 1, 2, 6, 9가 기록된다.
 * 2N = 3384. 1, 2, 3, 4, 6, 8, 9가 기록된다.
 * 3N = 5076. 모든 수가 기록되고, 잠에 빠진다.
 * 블리트릭스가 잠에 빠지는 수는 무엇인가? 영원히 잠에 들 수 없다면 INSOMNIA라고 출력하라.
 * 
 * 출력
 * 각 케이스에 대해서, 케이스 번호가 x이고 y가 정답일 때, Case #x: y라고 출력해야 한다.
 */
const [T, ...N] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const result = new Array(+T);
for (let i = 0; i < N.length; i++) {
  const offset = new Array(10).fill(false);
  let num = N[i];
  if (num === 0) {
    result[i] = `Case #${i + 1}: INSOMNIA`;
    continue;
  }
  while (offset.some(e => e === false)) {
    const txt = num.toString().split('').map(Number);
    txt.forEach(e => offset[e] = true);
    num += N[i];
  }
  result[i] = `Case #${i + 1}: ${num - N[i]}`;
}
console.log(result.join('\n'));