const [_, ...d] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
console.log(d.filter(e => e % 2 !== 0).length);