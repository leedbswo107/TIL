/**
 * 문제
 * Your copier broke down last week, and you need to copy a list of numbers for a class project due tomorrow! Luckily, you can use your computer to copy the numbers for you. Given a list of numbers, each on their own line, print out the number, a space, and then another copy of the number.
 * 
 * 출력
 * For each of the n lines, print out the original number and a copy of the number, with one space of separation.
 */
const [_, ...nums] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => `${e} ${e}`);
console.log(nums.join('\n'));