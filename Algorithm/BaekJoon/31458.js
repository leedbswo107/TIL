const [_, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(''));
const result = [];
const solution = (arr) => {
  let [a, b] = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '!') break;
    a++;
  }
  let n = +arr[a] === 1 ? true : false;
  b = arr.length - a - 1;
  if (b > 0) n = true;
  for (let i = 0; i < a; i++) n = !n;
  return n ? 1 : 0;
}
input.forEach(e => result.push(solution(e)));
console.log(result.join('\n'));