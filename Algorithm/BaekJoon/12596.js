/**
 * 문제
 * You are hosting a party with G guests and notice that there is an odd number of guests! When planning the party you deliberately invited only couples and gave each couple a unique number C on their invitation. You would like to single out whoever came alone by asking all of the guests for their invitation numbers.
 * 
 * 출력
 * For each test case, output one line containing "Case #x: " followed by the number C of the guest who is alone.
 */
const [N, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = new Array(+N);
const passengers = input.map(e => e.split(' ').map(BigInt)).filter((_, i) => i % 2 !== 0);
const solution = (arr) => {
  const ps = Array.from(new Set(arr));
  const count = new Array(ps.length).fill(0);
  for (let i = 0; i < ps.length; i++) arr.forEach(e => e === ps[i] && count[i]++);
  return ps[count.indexOf(1)];
}
passengers.forEach((e, i) => result[i] = `Case #${i + 1}: ${solution(e)}`);
console.log(result.join('\n'));