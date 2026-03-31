const input = require('fs').readFileSync(0, 'utf-8').trim().split(' ');
const [a, b, c] = input.filter((e,i) => i % 2 === 0).map(Number);
console.log(a + b === c ? 'YES' : 'NO');
