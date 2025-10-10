/**
 * 문제
 * In a finite sequence of positive integers not greater than a billion, representing lengths of line segments, we want to find three numbers such that one can build a triangle from segments of such lengths.
 * Write a program which examines whether among the line segments - lengths of which are written in the standard input - there exist three such that one can build a triangle from them. If so, the program writes the lengths of those three segments in the standard output. If there exist no such triple, the program writes one word NIE ("no") in the file standard output.
 * If there exist many triples of line segments of lengths written in the standard input such that one can build a triangle from them, then your program should find and write only one (arbitrary) of them.
 * 
 * 출력
 * In the standard output there should be either one word NIE, or three lengths of line segments chosen from the standard input, from which one can build a triangle. The lengths are separated by single spaces.
 */
const nums = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number).slice(0, -1).sort((a, b) => a - b);
let arr = [];
for (let i = 0; i < nums.length - 2; i++) {
  let status = true;
  for (let j = i + 1; j < nums.length - 1; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      const [a, b, c] = [nums[i], nums[j], nums[k]];
      if (a + b <= c) {
        i++;
        status = false;
        break;
      } else {
        arr = [a, b, c];
        break;
      }
    }
  }
  if (status) break;
}
console.log(arr.length > 0 ? arr.join(' ') : 'NIE');