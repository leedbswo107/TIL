const [i1, ...i2] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const [_, x, y] = i1.split(' ').map(Number);
const result = i2.map(e => +e * y / x);
console.log(result.join('\n'));