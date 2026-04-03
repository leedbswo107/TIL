const input = require('fs').readFileSync0, 'utf-8').trim().split('\n');
let D = +input[0];
for (let i = 1; i <= +input[1]; i++) D = input[i * 2] === '+' ? D + +input[i * 2 + 1] : D - +input[i * 2 + 1];
console.log(D);
