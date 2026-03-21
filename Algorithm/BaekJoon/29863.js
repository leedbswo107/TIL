const[a,b] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
console.log(a >= 20 ? b -  a + 24 : b - a);
