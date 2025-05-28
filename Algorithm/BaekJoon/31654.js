const [A, B, C] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
console.log(A + B === C ? 'correct!' : 'wrong!');