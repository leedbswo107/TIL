const [_, S] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(''));
const alpha = {
  'H': 0,
  'I': 0,
  'A': 0,
  'R': 0,
  'C': 0
}
S.forEach(e => alpha[e] >= 0 && alpha[e]++);
console.log(Math.min(...Object.values(alpha)));