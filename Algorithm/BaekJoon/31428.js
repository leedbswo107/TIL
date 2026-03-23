const [N, input, target] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let result = 0;
const pt = input.split(' ');
pt.forEach(e => e === target && result++);
console.log(result);
