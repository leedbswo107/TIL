console.log(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number).slice(1).map(e => {
  let total = 0;
  for (let i = 1; i <= e; i++) total += i % 2 === 0 ? 0 : i;
  return total;
}).join('\n'));