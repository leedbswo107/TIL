const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
const topThree = (arr) => arr.sort((a,b) => a - b).slice(-3).reduce((acc,cur) => acc + cur, 0);
const result = `${topThree(input.slice(0, 10))} ${topThree(input.slice(10))}`;
console.log(result);
