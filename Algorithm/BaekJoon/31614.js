const [H, M] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
console.log(H * 60 + M);