/**
 * 문제
 * 수 N개가 주어졌을 때, N개의 합을 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 각 테스트 케이스마다 입력받은 수 N개의 합을 한 줄에 하나씩 입력받은 순서대로 출력한다.
 */
const [_, ...result] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number).reduce((acc, cur) => acc + cur, 0));
console.log(result.join('\n'));