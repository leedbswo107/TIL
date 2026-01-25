const [_, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const result = input.map(([a, b]) => (a < b ? b - a : a - b).toFixed(1)).join('\n');
console.log(result);