/**
 * 문제
 * N × N 크기의 정사각형 모양 과수원이 있고, N × N 개의 사과나무가 1 × 1 크기의 간격으로 모든 칸에 심어져있다.
 * 농부 형곤이가 가을을 맞아 사과를 수확하려는데, 땅주인 신영이가 "너는 과수원 내에 사과나무를 K × K 의 크기의 정사각형 모양으로만 수확해 가져갈 수 있어, 이때 K는 1보다 크거나 같고 N보다 작거나 같은 정수라구! 나머지는 내가 먹을께! 하하!" 라고 통보했다.
 * 하나의 사과나무를 수확할 때, 사과를 통해 얻을 수 있는 이익과 노동비로 빠져나가는 손해가 동시에 이루어진다.
 * 그래서 형곤이는 나무의 위치를 좌표로 하여, 사과를 통해 얻은 이익과 노동비를 더한 총이익을 2차원 배열의 형태로 정리했다.
 * 악독한 땅주인 신영이로부터 고통받는 귀여운 형곤이에게 최대 총이익을 안겨주고 싶은 당신, 형곤이를 도와주자!
 * 
 * 출력
 * 첫 번째 줄에 최댓값을 출력한다.
 */
const [[N], ...matrix] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const arr = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
let max;
for (let y = 1; y < N + 1; y++) for (let x = 1; x < N + 1; x++) arr[y][x] = arr[y][x - 1] + matrix[y - 1][x - 1];
for (let y = 1; y < N + 1; y++) for (let x = 1; x < N + 1; x++) arr[y][x] += arr[y - 1][x];
for (let i = 0; i < N; i++) {
  for (let y = 1; y < N + 1 - i; y++) {
    for (let x = 1; x < N + 1 - i; x++) {
      const cur = arr[y + i][x + i] - arr[y - 1][x + i] - arr[y + i][x - 1] + arr[y - 1][x - 1];
      if (!max) max = cur;
      else max = max < cur ? cur : max;
    }
  }
}
console.log(max);