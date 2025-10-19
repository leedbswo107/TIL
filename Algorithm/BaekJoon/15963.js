const [a, b] = require('fs').readFileSync(0,'utf-8').trim().split(' ').map(Number);
console.log(a===b ? 1 : 0);