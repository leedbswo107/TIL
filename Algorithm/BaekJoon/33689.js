const [_, ...names] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
console.log(names.filter(e => e[0] === 'C').length);
