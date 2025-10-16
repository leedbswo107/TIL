/**
 * 문제
 * You are programming a cup stacking module for your robot. This robot is equiped with several sensors that can accurately determine the radius and color of a cup. The problem is that there is a glitch in the robot’s core routine that processess sensor inputs so the radius is doubled, if the result of the color sensor arrives to the routine after the radius.
 * For instance, for a red cup with a radius of 5 units, your module will receive either “red 5” or “10 red” message.
 * Given a list of messages from the core routine, each describing a different cup, can you put the cups in order of the smallest to the largest?
 * 
 * 출력
 * Output colors of cups, one color per line, in order of increasing radius.
 */
let [_, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' '));
const result = input.map(([a, b]) => (!isNaN(+a)) ? [b, +a / 2] : [a, +b]).sort((a, b) => a[1] - b[1]).map(e => e[0]).join('\n');
console.log(result);