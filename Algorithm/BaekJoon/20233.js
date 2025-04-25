/**
 * 문제
 * After a long time at home during the quarantine, in November you decided to go to work by bicycle! Since you do not have your own bicycle, you have to rent one. The bike rental allows you to choose one of two monthly options:
 * The monthly fee is a roubles. Every day, the first 30 minutes are free, and every minute above that costs x roubles.
 * The monthly fee is b roubles. Every day, the first 45$ minutes are free, and every minute above that costs y roubles.
 * There are 21 working days in November, and you spend T minutes commuting to work and back home in total every day. Calculate how many roubles you would spend if you use either one of two monthly options.
 * 출력
 * The only line of the output should contain two integers --- the amount of money you would spend on the first option and the second option, respectively.
 * 
 * 
 */
const [a, x, b, y, T] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const date = 21;
const A = (T - 30) * x * date + a;
const B = (T - 45) * y * date + b;
console.log(A < a ? a : A, B < b ? b : B);