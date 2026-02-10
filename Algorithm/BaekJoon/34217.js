const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const [a, b] = [input[0][0] + input[1][0], input[0][1] + input[1][1]];
const result = (function () {
  if (a === b) return 'Either';
  else if (a < b) return 'Hanyang Univ.';
  return 'Yongdap';
})();
console.log(result);