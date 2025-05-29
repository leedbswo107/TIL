const N = BigInt(require('fs').readFileSync('./input.txt', 'utf-8').trim());
const factorial = (a, b) => {
  if (a < b) {
    return factorial(a, (a + b) / 2n) * factorial(((a + b) / 2n) + 1n, b);
  } else return a;
}
const result = factorial(1n, N).toString();
console.log(result);