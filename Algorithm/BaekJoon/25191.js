const [N, i] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const [A, B] = i.split(' ').map(Number);
const result = Math.floor(A / 2) + B;
console.log(result > +N ? +N : result);