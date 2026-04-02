const [N, S] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
console.log(S.slice(N - 5));