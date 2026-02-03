/**
 * 문제
 * 제1회 피갤컵이 2024년 8월에 열렸다.
 * 제2회 피갤컵은 2025년 3월에 열린다.
 * 이를 통해 피갤컵은 7개월 주기로 열린다는 사실을 알 수 있다.
 * 그렇다면 N번째 피갤컵은 언제 열릴까?
 * 
 * 출력
 * 첫째 줄에 N번째 피갤컵이 열리는 연도와 월을 공백을 두고 출력한다.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim() - 1;
let [year, month] = [2024, 8];
month += N * 7;
const tmpY = month % 12 !== 0 ? Math.floor(month / 12) : Math.floor(month / 12) - 1;
month = month % 12 === 0 ? 12 : month % 12;
console.log(year + tmpY, month);