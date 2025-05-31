const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
console.log(((N <= 100000) && (N % 2024 === 0)) ? 'Yes' : 'No');