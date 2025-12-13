/**
 * 문제
 * ISIS Puzzle은 "Identify, Sort, Index, Solve"의 절차로 푸는 퍼즐을 통칭한다. 퍼즐을 좋아하는 하이비는 HCPC에 아래와 같은 ISIS 퍼즐 문제를 내기로 했다. 
 * N개의 문자열 S1, S2, ..., SN 이 주어진다.
 * Identify: 각 문자열과 대응되는 문제의 제목을 알아낸 뒤, 그 문제의 번호 Ii와 난이도 Di를 알아낸다.
 * Sort: 문제들을 번호 Ii 의 오름차순으로 정렬한다.
 * Index: 각 문제 이름 Si에서 Di번째의 글자를 추출한다. 이때 추출된 글자가 소문자라면 대문자로 변환한다.
 * Solve: Index 단계에서 추출한 글자들을 Sort 단계에서 정렬한 순서대로 나열한다.
 * 하지만 Identify는 구현이 어려울 것이라고 생각해, Identify까지 완료된 자료를 주기로 했다.
 * Identify가 완료된 자료가 주어질 때, Sort, Index, Solve까지 완료한 뒤 나오는 문자열을 출력해보자.
 * 
 * 출력
 * Solve 단계까지 완료한 뒤 나오는 문자열을 출력한다.
 */
const [_, ...S] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = S.map(e => e.split(' ').map((e, i) => i > 0 ? +e : e)).sort((a, b) => a[1] - b[1]).map(([s, _, d]) => isNaN(s[d - 1]) ? s[d - 1].toUpperCase() : s[d - 1]).join('');
console.log(result);