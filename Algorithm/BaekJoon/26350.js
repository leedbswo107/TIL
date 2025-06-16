const [[n], ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const solution = (coins) => {
  let status = false;
  for (let i = 1; i < coins.length; i++) {
    if (coins[i - 1] * 2 > coins[i]) {
      status = true;
      break;
    }
  }
  return status ? 'Bad coin denominations!' : 'Good coin denominations!';
}
const result = new Array(n);
input.forEach((e, i) => result[i] = `Denominations: ${e.slice(1).join(' ')}\n${solution(e.slice(1))}`);
console.log(result.join('\n\n'));