const [_, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number).reduce((acc,cur) => acc * cur, 1));
let result = 0;
input.forEach(e => result = result < e ? e : result);
console.log(result);
