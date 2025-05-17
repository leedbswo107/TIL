const [t1, t2] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
console.log(t1 >= t2 ? t2 : t1);