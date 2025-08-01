/**
 * 문제
 * "나는 요리사다"는 다섯 참가자들이 서로의 요리 실력을 뽐내는 티비 프로이다. 각 참가자는 자신있는 음식을 하나씩 만들어오고, 서로 다른 사람의 음식을 점수로 평가해준다. 점수는 1점부터 5점까지 있다.
 * 각 참가자가 얻은 점수는 다른 사람이 평가해 준 점수의 합이다. 이 쇼의 우승자는 가장 많은 점수를 얻은 사람이 된다.
 * 각 참가자가 얻은 평가 점수가 주어졌을 때, 우승자와 그의 점수를 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 첫째 줄에 우승자의 번호와 그가 얻은 점수를 출력한다.
 */
const scores = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number).reduce((acc, cur) => acc + cur, 0));
const max = Math.max(...scores);
const result = [scores.indexOf(max) + 1, max];
console.log(result.join(' '));