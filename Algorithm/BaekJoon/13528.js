const [C, _, ...areas] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
let costs = 0;
areas.forEach(e => costs += e.split(' ').map(Number).reduce((acc, cur) => acc * cur, 1) * +C);
console.log(costs.toFixed(7));