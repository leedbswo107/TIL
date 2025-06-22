const [X, Y, N] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
const arr = new Array(N).fill(1).map((e, i) => e + i);
const result = new Array(N);
arr.forEach((e, i) => {
  if (e % X === 0 && e % Y === 0) {
    result[i] = 'FizzBuzz';
  } else if (e % X === 0) {
    result[i] = 'Fizz';
  } else if (e % Y === 0) {
    result[i] = 'Buzz';
  } else result[i] = e;
});
console.log(result.join('\n'));