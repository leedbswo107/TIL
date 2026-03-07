/**
 * 문제
 * 종현은 영도와 함께 학교 포털 사이트에서 데이터를 가져와 본인의 학점을 계산하는 프로그램을 만들고 있다. 종현은 영도가 사이트에서 추출한 등급 데이터를 사용해서 평균 학점을 출력하고자 한다.
 * 등급별 학점은 다음의 표를 따른다.
 * 등급	학점
 * A+	4.5
 * A	4.0
 * B+	3.5
 * B	3.0
 * C+	2.5
 * C	2.0
 * D+	1.5
 * D	1.0
 * F	0.0
 * 
 * 출력
 * 문자열 S에 나열된 등급으로 구한 학점의 산술평균을 첫째 줄에 출력한다. 정답과 출력값의 절대/상대 오차는 10^-4까지 허용한다.
 */
const S = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('');
const scores = {
  'A': 4,
  'B': 3,
  'C': 2,
  'D': 1,
  'F': 0,
  '+': 0.5,
}
const count = [...S].filter(e => e !== '+').length;
let total = 0;
S.forEach(e => total += scores[e]);
console.log(+(total / count).toFixed(5));