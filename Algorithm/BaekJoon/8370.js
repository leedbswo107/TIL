const [n1, k1, n2, k2] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
console.log(n1 * k1 + n2 * k2);