/**
 * 문제
 * A long, long time ago in a galaxy far, far away a big collision of integers is taking place right now. What happens when two integers collide? During collision, each digit of one number compares itself to the corresponding digit of the other number (the least significant digit with the other’s least significant digit, and so on). The smaller digit “falls out” of the number containing it. Additionally, if the digits are the same, nothing happens. If a number doesn’t consist of a corresponding digit, then we consider it to be zero. After all comparisons of corresponding digits, the leftover digits in the number come closer and create a new number. For example:
 * Write a programme that will, for two given integers, determine their values after collision. If it happens that all the digits of one number fell out, then for that number output the message “YODA”.
 * 
 * 출력
 * The first line of output must contain the new value of the first given integer from the task. The second line of output must contain the new value of the second given integer from the task.
 */
const [a, b] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split('').map(Number).reverse());
const solution = (x, y) => {
  const len = x.length < y.length ? y.length : x.length;
  let [r1, r2] = [[], []];
  for (let i = 0; i < len; i++) {
    if (y.length <= i) r1.push(x[i]);
    else if (x.length <= i) r2.push(y[i]);
    else {
      if (x[i] > y[i]) r1.push(x[i]);
      else if (x[i] < y[i]) r2.push(y[i]);
      else {
        r1.push(x[i]);
        r2.push(y[i]);
      }
    }
  }
  [r1, r2] = [(r1.length !== 0 ? +r1.reverse().join('') : 'YODA'), (r2.length !== 0 ? +r2.reverse().join('') : 'YODA')];
  return [r1, r2];
}
const result = solution(a, b).join('\n');
console.log(result);