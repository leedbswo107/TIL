const [p, [x, y, r]] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
console.log(p.includes(x) ? p.indexOf(x) + 1 : 0);