/**
 * 문제
 * Professor Santos has decided to hide a secret formula for a new type of biofuel. She has, however, left a sequence of coded instructions for her assistant.
 * Each instruction is a sequence of five digits which represents a direction to turn and the number of steps to take.
 * The first two digits represent the direction to turn:
 * If their sum is odd, then the direction to turn is left.
 * If their sum is even and not zero, then the direction to turn is right.
 * If their sum is zero, then the direction to turn is the same as the previous instruction.
 * The remaining three digits represent the number of steps to take which will always be at least 100.
 * Your job is to decode the instructions so the assistant can use them to find the secret formula.
 * 
 * 출력
 * There must be one line of output for each line of input except the last line of input. These output lines correspond to the input lines (in order). Each output line gives the decoding of the corresponding instruction: either right or left, followed by a single space, followed by the number of steps to be taken in that direction.
 */
const nums = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').slice(0, -1).map(e => e.split('').map(Number));
let direct;
let result = new Array(nums.length);
nums.forEach(([a, b, ...c], i) => {
  if (a + b !== 0) direct = (a + b) % 2 === 0 ? 'right' : 'left';
  result[i] = `${direct} ${c.join('')}`;
});
console.log(result.join('\n'));