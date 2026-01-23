/**
 * 문제
 * 양의 정수 n이 주어졌을 때, 이를 이진수로 나타냈을 때 1의 위치를 모두 찾는 프로그램을 작성하시오. 최하위 비트(least significant bit, lsb)의 위치는 0이다.
 * 
 * 출력
 * 각 테스트 케이스에 대해서, 1의 위치를 공백으로 구분해서 줄 하나에 출력한다. 위치가 낮은 것부터 출력한다.
 */
const [T, ...nums] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(e => (+e).toString(2).split('').reverse());
const result = nums.map(e => {
  const tmp = [];
  for (let i = 0; i < e.length; i++) e[i] === '1' && tmp.push(i);
  return tmp.join(' ');
}).join('\n');
console.log(result);
