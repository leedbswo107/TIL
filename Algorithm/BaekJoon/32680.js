/**
 * 문제
 * Kaisa and her friends are going to the sauna!
 * Now they have to pick the temperature. Each of them has their own temperature preferences as an inclusive range of acceptable values. Can you help them find the temperatures that everyone is happy with?
 * Since there might be a large number of possible temperatures, they have asked you to just tell them how many options there are and what the lowest temperature that works for everyone is, as then the sauna will need less time to heat up.
 * 
 * 출력
 * Output two integers: first, the number of different temperatures (in millidegrees Celsius) that fit all preferences; and second, the lowest such value.
 * If there are no values that fit all preferences, instead output "bad news".
 */
const [_, ...values] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const [start, end] = [Math.max(...values.map(e => e[0])), Math.min(...values.map(e => e[1]))];
console.log(start <= end ? `${end - start + 1} ${start}` : 'bad news');