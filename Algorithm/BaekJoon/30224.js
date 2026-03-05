const N = require('fs').readFileSync(0, 'utf-8').trim();
console.log(N.includes(7) ? (+N % 7 === 0 ? 3 : 2) : (+N % 7 === 0 ? 1 : 0));
