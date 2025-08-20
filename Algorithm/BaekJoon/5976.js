/**
 * 문제
 * Oh how the cows love to walk in their square pasture with sides of length N (1 <= N <= 750) and which is partitioned into N*N squares. They enjoy the sights, the smells, and the general ambience of the grass and trees.
 * Bessie has decided to take the cows on the longest possible walk from the upper left corner to the center (or near the center when N is even) of the pasture, passing through each and every square along the way after starting.
 * She has decided to create the obvious clockwise spiral route (example below) for this evening's stroll. Write a program to create a map for her that shows the order of squares she should visit.
 * By way of example, for pastures of size N=3 and N=4, here are the routes Bessie should use:
 * 
 * 출력
 * Lines 1..N: N space-separated integers
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
let result = Array.from({ length: N }, () => new Array(N));
let [i, s] = 1;
let [x, y] = [0, 0];
while (i <= N * N) {
  let cur = s % 4;
  result[y][x] = i++;
  switch (cur) {
    case 1: // x++
      if (x + 1 >= N || Boolean(result[y][x + 1])) s++ && y++;
      else x++;
      break;
    case 2: // y++
      if (y + 1 >= N || Boolean(result[y + 1][x])) s++ && x--;
      else y++;
      break;
    case 3: // x--
      if (x - 1 < 0 || Boolean(result[y][x - 1])) s++ && y--;
      else x--;
      break;
    default: // y--
      if (y - 1 < 0 || Boolean(result[y - 1][x])) s++ && x++;
      else y--;
      break;
  }
}
result = result.map(e => e.join(' ')).join('\n');
console.log(result);