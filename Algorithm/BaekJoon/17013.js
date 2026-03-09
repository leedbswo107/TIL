const arr = [[1, 2], [3, 4]];
const input = require('fs').readFileSync(0, 'utf-8').trim().split('');
input.forEach(e => e === 'H' ? arr.reverse() : arr.forEach(v => v.reverse()));
const result = arr.map(e => e.join(' ')).join('\n');
console.log(result);