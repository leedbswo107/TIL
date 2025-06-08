/**
 * 문제
 * 영어에서는 어떤 글자가 다른 글자보다 많이 쓰인다. 예를 들어, 긴 글에서 약 12.31% 글자는 e이다.
 * 어떤 글이 주어졌을 때, 가장 많이 나온 글자를 출력하는 프로그램을 작성하시오.
 * 
 * 출력
 * 첫째 줄에 가장 많이 나온 문자를 출력한다. 여러 개일 경우에는 알파벳 순으로 앞서는 것부터 모두 공백없이 출력한다.
 */
const txt = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split('')).flat().filter(e => e !== ' ');
const counts = {};
txt.forEach(e => counts[e] = !counts[e] ? 1 : counts[e] + 1);
const max = Math.max(...Object.values(counts));
const result = [];
for (const key in counts) (counts[key] === max) && result.push(key);
console.log(result.sort().join(''));