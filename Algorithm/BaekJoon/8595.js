/**
 * 문제
 * 단어에 숫자가 숨어있다. 이 숫자를 히든 넘버라고 한다. 알파벳 대/소문자와 숫자로 이루어진 단어가 주어졌을 때, 모든 히든 넘버의 합을 구하는 프로그램을 작성하시오.
 * 단어와 히든 넘버는 아래와 같은 성질을 갖는다.
 * 연속된 숫자는 한 히든 넘버이다.
 * 두 히든 넘버 사이에는 글자가 적어도 한 개 있다.
 * 히든 넘버는 6자리를 넘지 않는다.
 * 
 * 출력
 * 입력으로 주어진 단어에 숨어있는 모든 히든 넘버의 합을 출력한다. 만약, 히든 넘버가 없는 경우에는 0을 출력한다.
 */
let [n, word] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
word = word.split('').map(Number);
let result = 0n;
let count = 0;
for (let i = 0; i <= word.length; i++) {
  if (i !== word.length && !Number.isNaN(word[i])) count++;
  else {
    result += BigInt(word.slice(i - count, i).join(''));
    count = 0;
  }
}
console.log(result.toString());