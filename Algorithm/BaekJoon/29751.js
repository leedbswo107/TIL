const [W, H] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
console.log((W * H / 2).toFixed(1));