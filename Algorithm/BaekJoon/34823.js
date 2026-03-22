const [y, c, p] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);
console.log(Math.min(y, Math.floor(c / 2), p));
