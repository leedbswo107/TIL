/**
 * 문제
 * Let’s face it... you are not that handy. When you need to make a major home repair, you often need to hire someone to help. When they come for the first visit, they make an estimate of the cost. Here they must be careful: if they overestimate the cost, it might scare you off, but if they underestimate, the work might not be worth their time.
 * Because the worker is so careful, it can take a long time for them to produce the estimate. But that’s frustrating — when you ask for an estimate, you really are asking for the magnitude of the cost. Will this be $10 or $100 or $1 000? That’s all you really want to know on a first visit.
 * Please help the worker make the type of estimate you desire. Write a program that, given the worker’s estimate, reports just the magnitude of the cost — the number of digits needed to represent the estimate.
 * 
 * 출력
 * For each estimated cost, output the number of digits required to represent it.
 */
const [N, ...costs] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = new Array(N);
costs.forEach((e, i) => result[i] = e.length);
console.log(result.join('\n'));