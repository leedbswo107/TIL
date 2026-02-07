const [A, T] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
const P = 10 + 2 * (25 - A + T);
console.log(P < 0 ? 0 : P);