const [_, a, b] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
let result = 0;
a.map((e,i) => (e < b[i]) && (result += b[i] - e));
console.log(result);
