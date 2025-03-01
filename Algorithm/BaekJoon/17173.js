/**
 * 문제
 * 신원이는 백준에서 배수에 관한 문제를 풀다가 감명을 받아 새로운 문제를 만들어보았다. 
 * 자연수 N과 M개의 자연수 Ki가 주어진다. 
 * Ki중 적어도 하나의 배수이면서 1 이상 N 이하인 수의 합을 구하여라.
 * 
 * 출력
 * 배수들의 합을 출력한다.
 */
const [i1, K] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const nums = [];
const [N, _] = i1;
K.forEach(e => {
  let num = e;
  while (num <= N) {
    !(nums.includes(num)) && nums.push(num);
    num += e;
  }
});
console.log(nums.reduce((acc, cur) => acc + cur, 0));