/**
 * 문제
 * 부산사이버대학교 학생 성택이는 엄마의 의뢰를 받아 주어진 문자열이 현관문 비밀번호에 사용 
 * 가능한지 알아내야 한다. 성택이는 공부해야 하므로 우리가 도와주자!
 * 사용할 수 있는 비밀번호의 규칙은 다음과 같다.
 * 비밀번호는 6자리 이상 9자리 이하여야 한다.
 * 예를 들어, 123124는 올바른 비밀번호이고, 1202727161은 잘못된 비밀번호이다. 
 * 문자열이 주어졌을 때 현관문 비밀번호로 사용할 수 있는지 판단하자.
 * 
 * 출력
 * 줄마다 사용할 수 있는 비밀번호면 yes, 그렇지 않으면 no를 출력한다.
 */
const [N, ...txts] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = new Array(+N).fill('no');
txts.forEach((e, i) => (e.length >= 6 && e.length <= 9) && (result[i] = 'yes'))
console.log(result.join('\n'));