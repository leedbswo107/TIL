const [Ur, Tr, Uo, To] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
console.log(Ur * 56 + Tr * 24 + Uo * 14 + To * 6);