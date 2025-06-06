const [T, ...X] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const solution = (x) => Array.from(new Set(x.split(''))).length;
const result = new Array(+T);
X.forEach((e, i) => result[i] = solution(e));
console.log(result.join('\n'));