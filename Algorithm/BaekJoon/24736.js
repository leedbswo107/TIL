/**
 * 문제
 * There are five ways to score points in american professional football:
 * Touchdown - 6 points
 * Field Goal - 3 points
 * Safety - 2 points
 * After touchdown
 * 1 point (Field Goal or Safety) - Typically called the “Point after”
 * 2 points (touchdown) - Typically called the “Two-point conversion”
 * (https://operations.nfl.com/the-rules/nfl-video-rulebook/scoring-plays/)
 * Given the box score values for two competing teams, calculate the point total for each team.
 * 
 * 출력
 * The single output line consists of two space-separated integers showing the visiting score and the home score respectively.
 */
const scores = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const result = scores.map(e => e[0] * 6 + e[1] * 3 + e[2] * 2 + e[3] + e[4] * 2).join('\n');
console.log(result);