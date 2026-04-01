const [_, code] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(e => e.split(''));
const result = code.map(e => e === 'I' ? 'i' : 'L').join('');
console.log(result);
