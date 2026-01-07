/**
 * 문제
 * The herd has run its first marathon!  The N (1 <= N <= 5,000) times have been posted in the form of Hours (0 <= Hours <= 99), Minutes (0 <= Minutes <= 59), and Seconds (0 <= Seconds <= 59). Bessie must sort them (by Hours, Minutes, and Seconds) into ascending order, smallest times first.
 * Consider a simple example with times from a smaller herd of just 3 cows (note that cows do not run 26.2 miles so very quickly):
 *     11:20:20
 *     11:15:12
 *     14:20:14
 * The proper sorting result is:
 *     11:15:12
 *     11:20:20
 *     14:20:14
 * 
 * 출력
 * Lines 1..N: Each line contains a cow's time as three space-separated integers
 */
const [_, ...records] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
records.sort((a,b) => {
  if(a[0] === b[0] && a[1] === b[1]) return a[2] - b[2];
  if(a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});
const result = records.map(e => e.join(' ')).join('\n');
console.log(result);
