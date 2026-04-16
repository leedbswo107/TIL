const N = +require('fs').readFileSync('/dev/stdin', 'utf-8').trim();
const [p1, p2] = [('@'.repeat(5 * N) + '\n').repeat(N), ('@'.repeat(N) + '\n').repeat(N) ];
const result = p1 + p2 + p1 + p2 + p2;
console.log(result);
