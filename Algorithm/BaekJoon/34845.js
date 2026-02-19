/**
 * 문제
 * 알고리즘 수업에는 총 N개의 강의평들이 달려 있다. i번째 강의평의 점수 Ai는 0 이상 100 이하의 정수이다.
 * 알고리즘을 너무나도 좋아하는 로하는 이 수업에 100점짜리 강의평을 최소 개수만큼 추가해서 평균 점수를 X 이상으로 만들기로 했다. 
 * 100점짜리 강의평을 최소 몇 개 추가해야 평균 점수가 X 이상이 될지 구하여라.
 * 
 * 출력
 * 첫째 줄에 최소로 추가해야 하는 강의평의 개수를 출력한다.
 */
let [[N, X], A] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
let total = A.reduce((acc, cur) => acc + cur, 0);
let result = 0;
while (total / N < X) {
  total += 100;
  result++;
  N++;
}
console.log(result);