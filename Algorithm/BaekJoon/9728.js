/**
 * 문제
 * You are given an integer array of size N and an integer M.
 * This array has (N*(N-1))/2 different pairs.
 * You need to calculate how many of those pairs have the sum equal to M.
 * For example, if the array is {1,2,3,4} and M is 5,
 * then there are exactly 2 pairs {1,4} and {2,3} whose sum is equal to M.
 *
 * 출력
 * For each test case, the output contains a line in the format
 * Case #x: R, where x is the case number (starting from 1) and R is
 * the number of pairs whose sum is exactly the given M
 */
const [T, ...arr] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n");
const result = new Array(+T).fill(0);
const solution = (i1, i2) => {
  const [N, M] = i1.split(" ").map(Number);
  const arr = i2.split(" ").map(Number);
  let start = 0;
  let end = arr.length - 1;
  let count = 0;
  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum === M) {
      count++;
      start++;
      end--;
    }
    if (sum < M) start++;
    if (sum > M) end--;
  }
  return count;
};
for (let i = 0; i < +T; i++)
  result[i] = `Case #${i + 1}: ${solution(arr[i * 2], arr[i * 2 + 1])}`;
console.log(result.join("\n"));
