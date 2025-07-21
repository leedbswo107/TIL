const [N, F] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
let num = N - N % 100;
while (num % F !== 0) num++;
console.log(num.toString().slice(-2));