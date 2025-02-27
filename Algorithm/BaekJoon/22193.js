/**
 * 문제
 * Write a program that computes a product of two non-negative integers A and B. 
 * The integers are represented in decimal notation and have N and M digits, 
 * respectively.
 * 
 * 출력
 * Output the product of A and B without leading zeros.
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = input.slice(1).map(BigInt).reduce((acc, cur) => acc * cur, 1n).toString();
console.log(result);