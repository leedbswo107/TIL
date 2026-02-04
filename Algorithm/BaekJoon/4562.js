const [_, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const result = input.map(([a, b]) => `${a >= b ? 'MMM' : 'NO'} BRAINS`).join('\n');
console.log(result);