const [[N], ...participants] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const result = new Array(N);
participants.forEach(([a, d, g], i) => result[i] = (a === d + g) ? a * (d + g) * 2 : a * (d + g));
console.log(Math.max(...result));