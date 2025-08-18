const [lv, Q] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ');
const q = { 'miss': 0, 'bad': 200, 'cool': 400, 'great': 600, 'perfect': 1000 };
console.log(q[Q] * +lv);