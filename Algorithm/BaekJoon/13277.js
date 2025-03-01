/**
 * 문제
 * 두 정수 A와 B가 주어졌을 때, 두 수의 곱을 출력하는 프로그램을 작성하시오.
 * 
 * 출력
 * 두 수의 곱을 출력한다.
 */
console.log(require('fs').readFileSync('./input.txt', 'utf-8').split(' ').map(BigInt).reduce((acc, cur) => acc * cur, 1n).toString());