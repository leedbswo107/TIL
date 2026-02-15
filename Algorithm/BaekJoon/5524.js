const [_, ...texts] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.toLocaleLowerCase());
console.log(texts.join('\n'));