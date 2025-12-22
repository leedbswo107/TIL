/**
 * 문제
 * Little Ivica received N math grades and wants to calculate their average. He knows that the average of two numbers a and b is calculated as (a + b) / 2, but he still doesn’t know how to do it for multiple numbers. He calculates the average by writing down N grades and repeating the following operations N - 1 times:
 * He chooses two numbers and erases them.
 * He writes down the average of the two chosen numbers.
 * After precisely N - 1 steps, the only number written down will be the one representing the average grade to Ivica. It is your task to determine the largest average that can be obtained this way.
 * 
 * 출력
 * Output the largest possible average from the task. Your solution is allowed to deviate from the official one for 0.000001.
 */
const [_, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
const nums = input.sort((a, b) => a - b);
let avg = nums.shift();
nums.forEach(e => avg = (avg + e) / 2);
console.log(avg.toFixed(6));