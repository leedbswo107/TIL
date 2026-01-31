/**
 * 문제
 * 초등학생인 도겸이는 숫자를 좋아한다. 어느 날 도겸이는 숫자 책을 보다가 간단한 놀이를 하나 생각해냈다. 숫자 놀이의 규칙은 다음과 같다.
 * 1. 주어진 숫자의 각 자릿수를 더한다.
 * 2. 결과가 한 자릿수가 될 때 까지 규칙1을 반복한다.
 * 예를들어, 숫자 673에 규칙을 적용해보면 결과는 7이 된다 ; 6 + 7 + 3 = 16, 1 + 6 = 7 
 * 도겸이는 당신과 함께 숫자놀이를 하고싶어한다. 도겸이가 주는 숫자들을 풀어보자.
 * 
 * 출력
 * 한 줄에 하나씩 한 자릿수 결과를 출력한다.
 */
const solution = (n) => {
  while (n.length > 1) n = n.split('').map(Number).reduce((acc, cur) => acc + cur, 0).toString();
  return n;
}
const result = require('fs').readFileSync(0, 'utf-8').trim().split('\n').slice(0, -1).map(v => solution(v)).join('\n');
console.log(result);
