const [a, b] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
console.log(b.split(' ').map(Number).map(e => e < +a ? e : +a).reduce((acc,cur) => acc + cur, 0));
