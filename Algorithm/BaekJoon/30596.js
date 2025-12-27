const a = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
console.log(a.filter((_, i) => i % 2 === 0).reduce((acc, cur) => acc * cur, 1));