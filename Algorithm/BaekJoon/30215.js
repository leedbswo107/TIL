/**
 * 문제
 * Dr. O has two granddaughters (named Alyssa and Konari) and they keep Dr. O young!
 * When people ask Dr. O how old he is, rather than giving one positive integer (his age), Dr. O provides two positive integers a and k; Dr. O’s age can then be computed using the expression (a × Alyssa’s age) + (k × Konari’s age).
 * Given three positive integers (Dr. O’s age, Alyssa’s age, and Konari’s age), determine if the positive integers a and k exist.
 * 
 * 출력
 * Print 1 (one) if a and k exist, 0 (zero) otherwise. Note that a and k must both be greater than zero.
 */
const [O, A, K] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
let [a, k] = [1, 1];
let result = false;
while (A * a < O) {
  while (A * a + K * k < O) k++;
  if (A * a + K * k === O) {
    result = true;
    break;
  }
  a++;
  k = 1;
}
console.log(result ? 1 : 0);