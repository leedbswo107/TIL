const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
console.log(N * (N - 1));