const [n, ...nums] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(BigInt);
let result = new Array(n).fill(0n);
for (let i = 0; i < n; i++) result[i] = `${nums[i * 2] / nums[i * 2 + 1]}\n${nums[i * 2] % nums[i * 2 + 1]}\n`;
console.log(result.join('\n'));
