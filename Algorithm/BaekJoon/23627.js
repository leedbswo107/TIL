/**
 * 문제
 * 드립이는 "driip"으로 끝나는 문자열은 모두 귀엽다고 생각한다.
 * 다음 문자열들은 드립이가 귀엽다고 생각하는 문자열들의 예시이다. "dogdriip", "catdriip", "driip"
 * 다음 문자열들은 드립이가 귀엽다고 생각하지 않는 문자열들의 예시이다. "dogdrip", "driipcat", "driiiiip"
 * 문자열이 주어지면, 드립이가 주어진 문자열을 귀엽다고 생각하는지 판단하는 프로그램을 작성하자.
 * 
 * 출력
 * 드립이가 생각하기에 주어진 문자열이 귀여우면 "cute", 그렇지 않으면 "not cute"를 출력한다. (따옴표 제외)
 */
const S = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('driip');
let result = 'not cute';
(S.includes('')) && (S.reverse().indexOf('') === 0) && (result = 'cute');
console.log(result);