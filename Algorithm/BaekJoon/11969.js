/**
 * 문제
 * Farmer John's N cows, conveniently numbered 1 ... N, are all standing in a row (they seem to do so often that it now takes very little prompting from 
 * Farmer John to line them up). Each cow has a breed ID: 1 for Holsteins, 2 for Guernseys, and 3 for Jerseys. Farmer John would like your help counting the 
 * number of cows of each breed that lie within certain intervals of the ordering.
 * 
 * 출력
 * For each of the Q queries (a,b), print a line containing three numbers: the number of cows numbered a ... b that are Holsteins (breed 1), Guernseys 
 * (breed 2), and Jerseys (breed 3).
 */
const input = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const cows = input.slice(1, N + 1).map(Number);
const range = input.slice(N + 1, N + Q + 2).map(e => e.split(' ').map(Number));
const arr = [[0,0,0]];
let tmp = [0, 0, 0];
for (let i = 1; i <= N; i++) {
  tmp[cows[i-1] - 1]++;
  arr[i] = [...tmp];
}
const result = range.map(([start, end]) => [arr[end][0] - arr[start-1][0], arr[end][1] - arr[start-1][1], arr[end][2] - arr[start-1][2]].join(' ')).join('\n');
console.log(result);
