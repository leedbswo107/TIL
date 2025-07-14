const N = BigInt(require('fs').readFileSync('./input.txt', 'utf-8').trim());
const solution = (n) => {
  if (n >= 2n ** 31n || n < (-2n) ** 31n) return 'long long';
  else if (n >= 2n ** 15n || n < (-2n) ** 15n) return 'int';
  return 'short';
}
console.log(solution(N));