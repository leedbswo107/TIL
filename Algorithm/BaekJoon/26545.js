/**
 * 문제
console.log(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number).slice(1).reduce((acc, cur) => acc + cur, 0));
 * 
 * 
 * 출력
 * Output the resulting integer. The output should be one line containing one integer value.
 */
console.log(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number).slice(1).reduce((acc, cur) => acc + cur, 0));