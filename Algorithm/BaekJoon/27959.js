const [N, M] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
console.log(N * 100 >= M ? 'Yes' : 'No');