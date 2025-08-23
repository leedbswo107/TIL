/**
 * 1 -> 2
 * 2 -> 4
 * 3 -> 6
 * 4 -> 9
 * 5 -> 12
 * 6 -> 16
 * 7 -> 20
 * 8 -> 25
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
console.log(N % 2 === 0 ? ((N / 2) + 1) ** 2 : (Math.ceil(N / 2) + 1) * (Math.floor(N / 2) + 1));