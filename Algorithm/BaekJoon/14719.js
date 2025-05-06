/**
 * 문제
 * 2차원 세계에 블록이 쌓여있다. 비가 오면 블록 사이에 빗물이 고인다.
 * 비는 충분히 많이 온다. 고이는 빗물의 총량은 얼마일까?
 * 
 * 출력
 * 2차원 세계에서는 한 칸의 용량은 1이다. 고이는 빗물의 총량을 출력하여라.
 * 빗물이 전혀 고이지 않을 경우 0을 출력하여라.
 */
const [[H, W], walls] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
let space = Array.from({ length: H }, () => new Array(W).fill(0));
const init = (h, w) => {
  for (let i = H - 1; i >= H - h; i--) space[i][w] = 1;
}
let result = 0;
walls.forEach((w, index) => init(w, index));
space.forEach((e => {
  let start = undefined;
  let count = 0;
  for (let i = 0; i < W; i++) {
    if (e[i] === 1) {
      if (start !== undefined) {
        result += count;
        count = 0;
      }
      start = i;
    } else if (start !== undefined) count++;
  }
}));
console.log(result);