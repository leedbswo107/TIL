const [N, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = new Array(+N);
input.forEach((e, i) => {
  const mid = e.length / 2;
  result[i] = e[mid] === e[mid - 1] ? 'Do-it' : 'Do-it-Not'
});
console.log(result.join('\n'));