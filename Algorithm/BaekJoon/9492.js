/**
 * 문제
 * A Perfect Shuffle of a deck of cards is executed by dividing the deck exactly in 
 * half, and then alternating cards from the two halves, starting with the top half. 
 * Given a deck of cards, perform a Perfect Shuffle. If there is an odd number of 
 * cards, give the top half split one more card than the bottom half.
 * 
 * 출력
 * For each test case, output n lines, consisting of the deck after a perfect 
 * shuffle. Output no extra spaces. Do not print a blank line between answers.
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
let i = 0;
const result = [];
while (true) {
  const n = +input[i];
  if (n === 0) break;
  const len = Math.ceil(n / 2);
  const arr = [...input.slice(i + 1, n + i + 1)];
  for (let j = 0; j < len; j++) {
    result.push(arr[j]);
    arr[j + len] && result.push(arr[j + len]);
  }
  i += (n + 1);
}
console.log(result.join('\n'));
