const len = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(String).pop().match(/[aeiou]/gi);
console.log(len ? len.length : 0);