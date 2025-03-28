/**
 * 문제
 * After several months struggling with a diet, Jack has become obsessed with the idea of weighing less. In an odd way, he finds it very comforting to think that, if he had simply had the luck to be born on a different planet, his weight could be considerably less.
 * Of course, the planets are far out of reach, but even the Earth’s moon would yield a dramatic weight loss. Objects on the moon weight only 0.167 of their weight on Earth.
 * 
 * 출력
 * For each line of input data, your program should print a single line of the form
 * Objects weighing X on Earth will weigh Y on the moon.
 * where X is the weight from the input and Y is the corresponding weight on the moon. Both output numbers should be printed to a precision of 2 digits after the decimal point.
 */
const data = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
data.pop();
const result = data.map(e => {
  const num = +e;
  return `Objects weighing ${num.toFixed(2)} on Earth will weigh ${(num * 0.167).toFixed(2)} on the moon.`;
});
console.log(result.join('\n'));