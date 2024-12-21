/**
 * 문제
 * A pyramid of blocks is constructed by first building
 * a base layer of n blocks and then adding n-1 blocks to the next layer.
 *  This process is repeated until the top layer only has one block.
 *
 * 출력
 * For each positive integer print the total number of blocks
 * needed to build the pyramid with the specified base.
 */
const nums = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);
const result = [];
const solution = (n) => {
  if (n === 1) return 1;
  return n + solution(n - 1);
};
for (let i = 0; i < nums.length - 1; i++) result[i] = solution(nums[i]);
console.log(result.join("\n"));
