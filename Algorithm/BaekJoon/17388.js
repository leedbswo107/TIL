const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
let result = 'OK';
const univ = ['Soongsil', 'Korea', 'Hanyang'];
if (input.reduce((acc, cur) => acc + cur, 0) < 100) result = univ[input.indexOf(Math.min(...input))];
console.log(result);