/**
 * 문제
 * You’d like to figure out whether a car was speeding while it was driving down a straight road. Unfortunately you don’t have any radar guns or related instruments for measuring speed directly; all you have are photographs taken of the car at various checkpoints on the road at various times. Given when and where these photographs were taken, what is the fastest speed that you can prove the car must have been going at some point along the road?
 * 
 * 출력
 * Output the greatest integral speed that you can be certain the car was going at some point.
 */
let [[N], ...nums] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
let result = 0;
for (let i = 1; i < N; i++) {
  const cur = Math.floor((nums[i][1] - nums[i - 1][1]) / (nums[i][0] - nums[i - 1][0]));
  result = cur >= result ? cur : result;
}
console.log(result);