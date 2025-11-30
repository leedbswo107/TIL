const [T, S] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
let result = 280;
if (T >= 12 && T <= 16 && S === 0) result = 320;
console.log(result);