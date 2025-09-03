/**
 * 문제
 * The Sum Squared Digits function, SSD(b, n) of a positive integer n, in base b is defined by representing n in base b as in:
 * n = a0 + a1*b + a2*b2 + …
 * then:
 * SSD(b, n) = a02 + a12 + a22 + …
 * is the sum of squares of the digits of the representation.
 * Write a program to compute the Sum Squared Digits function of an input positive number.
 * 
 * 출력
 * For each data set there is a single line of output.
 * The single line of output consists of the data set number, K, followed by a single space followed by the value of SSD(b, n) as a decimal integer.
 */
const [P, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
let result = new Array(+P);
input.forEach((e, i) => {
  const [K, b, n] = e.split(' ').map(Number);
  result[i] = `${K} ${n.toString(b).split('').map(el => parseInt(el, b) ** 2).reduce((acc, cur) => acc + cur, 0)}`;
});
console.log(result.join('\n'));