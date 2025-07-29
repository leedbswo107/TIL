const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number).filter(e => e === 0).length);
const result = new Array(input.length);
input.forEach((e, i) => result[i] = e === 1 ? 'A' : e === 2 ? 'B' : e === 3 ? 'C' : e === 4 ? 'D' : 'E');
console.log(result.join('\n'));