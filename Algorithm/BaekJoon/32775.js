const [s, f] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
console.log(s > f ? 'flight' : 'high speed rail');