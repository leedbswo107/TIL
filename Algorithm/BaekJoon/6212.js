/**
 * 문제
 * Bessie was daydreaming one day as she drifted between wakefulness and that delicious drowsiness that we all feel when we are tired. For a moment, she counted sheep as couldn't quite sleep. Bessie's mind is razor sharp and visualizes the numbers as she counts. She started noticing the digits and wondered: how many instances of each digit appear in a counting sequence?
 * Write a program to answer this question. Given two integers M and N (1 <= M <= N <= 2,000,000,000 and N-M <= 500,000), how many of occurrences of each digit appear?
 * Consider the sequence 129..137: 129, 130, 131, 132, 133, 134, 135, 136, 137. Count the digits to find:
 *    1x0      1x5
 *   10x1      1x6
 *    2x2      1x7
 *    9x3      0x8
 *    1x4      1x9
 * 
 * 출력
 * Line 1: Ten space-separated integers that are the counts of the number of each digit (0..9) that appears while counting through the sequence.
 */
const [M, N] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);
let result = new Array(10).fill(0);
for (let i = M; i <= N; i++)`${i}`.split('').map(Number).forEach(idx => result[idx]++);
console.log(result.join(' '));