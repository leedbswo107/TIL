/**
 * 문제
 * Consider an N-element strictly increasing integer sequence A and an integer S.
 * Write a program to count the number of pairs of elements of A whose sum is S.
 *
 * 출력
 * The only line of output should contain the number of pairs that
 * consist of two distinct elemets of the sequence and sum to S.
 */
const [i1, ...i2] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n");
const [N, S] = i1.split(" ").map(Number);
const A = i2.map((e) => +e);
let [start, end] = [0, A.length - 1];
let result = 0;
while (start < end) {
  const sum = A[start] + A[end];
  if (sum === S) {
    start++;
    end--;
    result++;
  } else if (sum < S) start++;
  else end--;
}
console.log(result);
