/**
 * 문제
 * 팰린드롬은 앞으로 읽으나 뒤로 읽으나 똑같은 단어나 숫자들을 말한다. 
 * 일반적으로 대소문자를 구분하지 않지만, 공백은 구분한다.
 * 다음은 팰린드롬의 예시이다.
 * Anna
 * Harrah
 * Arora
 * Nat tan
 * 9998999
 * 123 321
 * $$$&&$$$
 * 모든 라인에 대해 팰린드롬인지 아닌지를 구분하는 프로그램을 작성하시오.
 * 
 * 출력
 * 각 테스트 케이스에 대해 정답을 출력한다.
 * 팰린드롬일 경우 "Yes"를 출력하고, 그렇지 않을 경우 "No"를 출력한다.
 */
const [N, ...arr] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.trim().toLocaleLowerCase());
const result = new Array(+N);
const solution = (txt) => {
  const origin = txt;
  const reverse = origin.split('').reverse().join('');
  if (origin === reverse) return 'Yes';
  return 'No';
}
arr.forEach((e, i) => result[i] = solution(e));
console.log(result.join('\n'));