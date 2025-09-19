/**
 * 문제
 *  A * B * C 모양의 직육면체를 1 * p * p 모양의 직육면체로 채울 수 있는지 판별하시오. 단, p는 소수이다.
 * 직육면체의 방향은 중요하지 않다. 즉, 직육면체를 돌려서 p * 1 * p, p * p * 1로 채우는 것도 가능하다.
 * 
 * 출력
 * 각각의 테스트 케이스에 대해 직육면체를 채울 수 있으면 1, 없으면 0을 출력한다. 한 줄에 하나씩 출력한다.
 */
const [[T], ...tests] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
let result = new Array(T);
tests.forEach(([A, B, C, p], i) => result[i] = ([A, B, C].filter(e => e % p === 0).length >= 2) ? (A * B * C) % (p * p) === 0 && 1 : 0);
console.log(result.join('\n'));