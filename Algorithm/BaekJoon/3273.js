/**
 * 문제
 * n개의 서로 다른 양의 정수 a1, a2, ..., an으로 이루어진 수열이 있다.
 * ai의 값은 1보다 크거나 같고, 1000000보다 작거나 같은 자연수이다. 자연수 x가 주어졌을 때,
 * ai + aj = x (1 ≤ i < j ≤ n)을 만족하는 (ai, aj)쌍의 수를 구하는 프로그램을 작성하시오.
 *
 * 출력
 * 문제의 조건을 만족하는 쌍의 개수를 출력한다.
 */
let [_, nums, x] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n");
nums = nums
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let [left, right] = [0, nums.length - 1];
let count = 0;
x = +x;
while (left < right) {
  const sum = nums[left] + nums[right];
  if (sum === x) {
    count++;
    left++;
    right--;
  } else if (sum > x) {
    right--;
  } else left++;
}
console.log(count);
