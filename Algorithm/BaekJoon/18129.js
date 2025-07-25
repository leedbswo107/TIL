/**
 * 문제
 * 가톨릭대학교에 살고 있는 고양이 황톨릭은 이웃집 고양이 엄컴공을 좋아한다. 엄컴공은 알파벳으로만 이루어진 문자열을 이상한 암호로 바꾸는 일을 하고 있다. 이상한 암호로 바꾸기 위해선 다음과 같은 과정을 따라야 한다.
 * 먼저 입력받은 문자열을 대소문자 구분없이 왼쪽에서부터 연속되어 나타나는 같은 알파벳끼리 묶어 구간으로 나타낸다. 그 후 왼쪽에서부터 차례로 각 구간에 아래와 같은 규칙을 적용한다.
 * 한 구간의 길이가 K 이상이라면 그 구간은 하나의 정수 1로 치환한다.
 * 한 구간의 길이가 K 미만이라면 그 구간은 하나의 정수 0으로 치환한다.
 * 한 구간의 알파벳이 이전에 0이나 1로 치환된 적이 있다면 그 구간은 삭제한다.
 * 엄컴공의 마음을 사로잡고 싶은 황톨릭은 주어진 문자열을 이상한 암호로 바꿔주는 코드를 짜고 싶다. 황톨릭이 마음을 얻을 수 있게 도와주자!
 * 
 * 출력
 * 고양이 언어 규칙을 이용해 바뀐 문자열을 출력한다
 */
let [S, K] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ');
const result = [];
const visited = [];
let count = 1;
S = S.toLowerCase();
for (let i = 1; i <= S.length; i++) {
  const [prev, next] = [S[i - 1], S[i]];
  if (prev === next) count++;
  else {
    if (visited.includes(prev)) continue;
    visited.push(prev);
    result.push(count >= +K ? 1 : 0);
    count = 1;
  }
}
console.log(result.join(''));