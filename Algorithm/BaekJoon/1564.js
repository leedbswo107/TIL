/**
 * 문제
 * 팩토리얼5란, N!의 0이 아닌 뒤 5자리를 말한다.
 * N이 주어졌을 때, 팩토리얼5를 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 첫째 줄에 N의 팩토리얼5를 계산한다.
 */
const N = BigInt(require('fs').readFileSync('./input.txt', 'utf-8').trim());
const factorial = (a, b) => {
  if (a < b) {
    const mix = factorial(a, (a + b) / 2n) * factorial(((a + b) / 2n) + 1n, b);
    return mix % 10n === 0n ? mix / 10n : mix;
  }
  return b;
}
let result = factorial(1n, N).toString().slice(-5);
console.log(result);