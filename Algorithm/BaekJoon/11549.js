const [T, i] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = i.split(' ').map(Number).filter(e => e === +T).length;
console.log(result);