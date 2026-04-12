const [_, h, a] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
console.log(Math.max(...h) + Math.max(...a));
