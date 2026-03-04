const [a, b] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(BigInt);
console.log(`${(a - b) / 2n + b}\n${(a - b) / 2n}`);