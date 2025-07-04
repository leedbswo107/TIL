const [A, B, C] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
console.log(B - A - 1 > C - B - 1 ? B - A - 1 : C - B - 1);