const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('');
let result = [];
for (let i = 0; i < input.length; i++) {
  if (!isNaN(+input[i])) {
    for (let j = i; j <= input.length; j++) {
      if (isNaN(+input[j])) {
        result.push(input.slice(i, j).join(''));
        i = j;
        break;
      }
    }
  }
}
console.log(new Set(result).size);