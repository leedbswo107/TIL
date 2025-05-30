/**
 * 문제
 * N!의 값을 계산한 후에, 0이 아닌 가장 낮은 자리 수를 구하시오.
 * 예를 들어, 4! = 24 이기 때문에, 0이 아닌 가장 낮은 자리 수는 4이다. 또, 5! = 120이기 때문에, 0이 아닌 가장 낮은 자리 수는 2 이다.
 * 
 * 출력
 * 첫째 줄에 N!의 0이 아닌 마지막 자리수를 출력한다.
 */
const n = BigInt(require('fs').readFileSync('./input.txt', 'utf-8').trim());
const factorial = (a, b) => {
  if (a < b) {
    const mid = (a + b) / 2n;
    const prev = factorial(a, mid);
    const next = factorial(mid + 1n, b);
    const mix = (prev % 10n === 0n ? prev / 10n : prev) * (next % 10n === 0n ? next / 10n : next)
    return mix;
  }
  return b;
}
const result = factorial(1n, n).toString().slice(-1);
console.log(result);