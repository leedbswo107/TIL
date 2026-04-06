const [[w, h], [r]] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
console.log(Math.floor((w * h - r * r * Math.PI / 4) * 100) / 100);