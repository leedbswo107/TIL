const [N, levels] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const solution = (arr) => {
  const result = new Array(+N).fill(0);
  arr.split(' ').map(Number).forEach((level, idx) => {
    result[idx] = level >= 300 ? 1 : level >= 275 ? 2 : level >= 250 ? 3 : 4;
  });
  return result.join(' ');
}
console.log(solution(levels));