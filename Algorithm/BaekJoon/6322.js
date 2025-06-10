/**
 * 문제
 * 컴퓨터를 이용하면 수학 계산이 조금 쉬워진다. 다음과 같은 예를 살펴보자. 세 변의 길이가 a, b, c(c는 빗변)이면서 a2+b2=c2를 만족하는 삼각형을 직각삼각형이라고 한다. 이 공식은 피타고라스의 법칙이라고 한다.
 * 직각 삼각형의 두 변의 길이가 주어졌을 때, 한 변의 길이를 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 각 테스트 케이스에 대해서, 입력으로 주어진 길이로 직각 삼각형을 만들 수 있다면, "s = l"을 출력한다. s는 길이가 주어지지 않은 변의 이름이고, l은 길이이다. l은 소수점 셋째 자리까지 출력한다. 삼각형을 만들 수 없는 경우에는 "Impossible."을 출력한다.
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
input.pop();
const solution = (a, b, c) => {
  if (a === -1) return ['a', Math.sqrt(c ** 2 - b ** 2)];
  else if (b === -1) return ['b', Math.sqrt(c ** 2 - a ** 2)];
  return ['c', Math.sqrt(a ** 2 + b ** 2)];
}
let result = new Array(input.length);
input.forEach((e, i) => result[i] = solution(...e));
result = result.map((e, i) => `Triangle #${i + 1}\n${(isNaN(e[1]) || e[1] === 0) ? 'Impossible.' : e[0] + ' = ' + e[1].toFixed(3)}`).join('\n\n');
console.log(result);