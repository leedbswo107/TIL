/**
 * 문제
 * Suppose we have an array of integers such as 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. It is easy to compute the sum of all its elements. We only need a loop! For example:
 * int size = 10;
 * int total = 0;
 * for (int i = 0; i < size; i += 1) {
 *     total = total + v[i];
 * }
 * If we want to count a different range of elements (for example, from position 5 to 7) we only need to change a few parts of the loop. In this problem you'll have to do this operation several times!
 * 
 * 출력
 * For each test, print the sum of the elements of the array from the position start to the position end inclusive.
 * That is: array[start] + array[start+1] + ... + array[end-1] + array[end].
 */
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = +input[0];
const numbers = input[1].split(' ').map(Number);
const m = +input[2];
const positions = input.slice(3, 3 + m).map(e => e.split(' ').map(Number));
let prefixSum = new Array(n + 1).fill(0);
for (let i = 1; i < n + 1; i++) prefixSum[i] = prefixSum[i - 1] + numbers[i - 1];
const result = positions.map(([start, end]) => prefixSum[end + 1] - prefixSum[start]).join('\n');
console.log(result);