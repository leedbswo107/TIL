const list = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ')).slice(0, -1);
const result = list.map(([person, age, weight]) => `${person} ${age <= 17 && weight < 80 ? 'Junior' : 'Senior'}`).join('\n');
console.log(result);