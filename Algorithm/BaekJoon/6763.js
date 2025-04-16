/**
 * 문제
 * Many communities now have “radar” signs that tell drivers what their speed is, in the hope that they will slow down.
 * You will output a message for a “radar” sign. The message will display information to a driver based on his/her speed according to the following table:
 * 
 * 출력
 * If the driver is not speeding, the output should be:
 * Congratulations, you are within the speed limit!
 * If the driver is speeding, the output should be:
 * You are speeding and your fine is $F.
 * where F is the amount of the fine as described in the table above.
 */
const [limit, speed] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const solution = (diff) => {
  if (diff < 1) return 0;
  if (diff < 21) return 100;
  if (diff < 31) return 270;
  return 500;
}
const result = solution(speed - limit);
console.log(result !== 0 ? `You are speeding and your fine is $${result}.` : 'Congratulations, you are within the speed limit!');