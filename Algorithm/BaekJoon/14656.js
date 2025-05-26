let [_, students] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
students = students.split(' ').map(Number);
const sorted = [...students].sort((a, b) => a - b);
const result = sorted.filter((e, i) => students[i] !== e).length;
console.log(result);