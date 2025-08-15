/**
 * 문제
 * Alice travels a lot for her work. Each time she travels, she visits a single city before returning home.
 * Someone recently asked her “how many different cities have you visited for work?” Thankfully Alice has kept a log of her trips. Help Alice figure out the number of cities she has visited at least once.
 * 
 * 출력
 * For each test case, simply output a single line containing a single integer that is the number of distinct cities that Alice has visited on her work trips.
 */
const [T, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = [];
for (let i = 0; i < input.length; i++) {
  const len = +input[i];
  result.push(new Set(input.slice(i + 1, i + 1 + len)).size);
  i += len;
}
console.log(result.join('\n'));