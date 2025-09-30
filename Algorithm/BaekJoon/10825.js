/**
 * 문제
 * 도현이네 반 학생 N명의 이름과 국어, 영어, 수학 점수가 주어진다. 이때, 다음과 같은 조건으로 학생의 성적을 정렬하는 프로그램을 작성하시오.
 * 1) 국어 점수가 감소하는 순서로
 * 2) 국어 점수가 같으면 영어 점수가 증가하는 순서로
 * 3) 국어 점수와 영어 점수가 같으면 수학 점수가 감소하는 순서로
 * 4) 모든 점수가 같으면 이름이 사전 순으로 증가하는 순서로 (단, 아스키 코드에서 대문자는 소문자보다 작으므로 사전순으로 앞에 온다.)
 * 
 * 출력
 * 문제에 나와있는 정렬 기준으로 정렬한 후 첫째 줄부터 N개의 줄에 걸쳐 각 학생의 이름을 출력한다.
 */
let [_, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' '));
input = input.map(e => [e[0], ...e.slice(1).map(v => +v)]);
input.sort((a, b) => {
  if (a[1] === b[1] && a[2] === b[2] && a[3] === b[3]) {
    const len = a[0].length < b[0].length ? a[0].length : b[0].length;
    for (let i = 0; i < len; i++) {
      if (a[0][i] !== b[0][i]) return a[0][i].charCodeAt() - b[0][i].charCodeAt();
    }
  } else if (a[1] === b[1] && a[2] === b[2]) return b[3] - a[3];
  else if (a[1] === b[1]) return a[2] - b[2];
  return b[1] - a[1];
});
const result = input.map(e => e[0]).join('\n');
console.log(result);