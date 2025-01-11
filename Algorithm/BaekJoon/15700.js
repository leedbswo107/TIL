/**
 * 문제
 * N×M 크기의 벽에 2×1, 1×2 크기의 타일을 채우려고 한다.
 * 겹치지 않게 놓는다면, 최대 몇 개를 채울 수 있을까?
 *
 * 출력
 * 첫째 줄에 채울 수 있는 타일 개수의 최댓값을 출력한다.
 */
const [N, M] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split(" ")
  .map(BigInt);
console.log(`${(N * M) / 2n}`);
