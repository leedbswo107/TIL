/**
 * 문제
 * 상근이의 남자 친구의 수와 여자 친구의 수가 주어졌을 때, 친구는 총 몇 명인지 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 각 테스트 케이스마다 상근이의 친구의 수를 출력한다.
 */
const arr = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number).reduce((acc, cur) => acc + cur, 0));
console.log(arr.slice(0, -1).join('\n'));