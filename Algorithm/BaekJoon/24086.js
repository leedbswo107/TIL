const [A, B] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
console.log(B - A);
