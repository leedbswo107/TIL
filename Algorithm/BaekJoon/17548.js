const s = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('');
const count = [...s].filter(e => e === 'e').length;
console.log(`h${'e'.repeat(count * 2)}y`);