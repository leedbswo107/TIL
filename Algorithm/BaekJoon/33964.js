const [X, Y] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);
console.log(+'1'.repeat(X) + +'1'.repeat(Y));