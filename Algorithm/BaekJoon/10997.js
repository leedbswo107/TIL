/**
 * 문제
 * 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
 * 
 * 출력
 * 첫째 줄부터 차례대로 별을 출력한다.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
const [X, Y] = [4 * (N - 1) + 1, N !== 1 ? 4 * (N - 1) + 3 : 1];
const stars = Array.from({ length: Y }, () => new Array(X - 1).fill(' '));
const solution = (n) => {
  for (let x = n === 0 ? X - 2 * n - 1 : X - 2 * n; x > 2 * n; x--) stars[2 * n][x] = '*';
  for (let y = 2 * n; y <= Y - 2 * n - 1; y++) stars[y][2 * n] = '*';
  if (n !== N - 1) {
    for (let x = 2 * n + 1; x < X - 2 * n - 1; x++) stars[Y - 2 * n - 1][x] = '*';
    for (let y = Y - 2 * n - 1; y >= 2 * (n + 1); y--) stars[y][X - 1 - 2 * n] = '*';
    solution(n + 1);
  }
}
solution(0);
const result = stars.map(e => e.join('').trim()).join('\n');
console.log(result);