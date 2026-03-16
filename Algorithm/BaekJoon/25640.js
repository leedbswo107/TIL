const [t, _, ...peoples] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let result = 0;
peoples.forEach(e => e === t && result++);
console.log(result);
