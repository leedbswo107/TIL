const N = +require('fs').readFileSync(0, 'utf-8').trim();
const result =
  ('G'.repeat(N) + '...'.repeat(N) + '\n').repeat(N) +
  ('.'.repeat(N) + 'I'.repeat(N) + '.'.repeat(N) + 'T'.repeat(N) + '\n').repeat(N) +
  ('..'.repeat(N) + 'S'.repeat(N) + '.'.repeat(N) + '\n').repeat(N);
console.log(result);