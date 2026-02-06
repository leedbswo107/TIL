const [_, a, b] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(''));
let result = 0;
a.forEach((e, i) => e === b[i] && e === 'C' && result++);
console.log(result);