/**
 * 문제
 * 2021년 5월 8일 SMUPC 대회의 첫 개최에 신이 난 화은이는 SMUPC를 기념하기 위해 "SMUPC"를 예술적으로 출력하는 프로그램을 작성하고자 했다. 화은이는 각 알파벳에 해당하는 아스키코드 값을 10진법으로 나타내었을 때, 각 자릿수의 합만큼 출력하도록 하는 프로그램을 만들고자 한다. 하지만 화은이는 지금 문제를 출제해야 해서 정신이 없다. 문제 출제로 정신이 없는 화은이를 위해 화은이가 만들고자 하는 프로그램을 대신 만들어 보자.
 * 
 * 출력
 * 단어 S의 각 문자에 대한 프로그램의 출력값을 각 줄별로 출력한다.
 */
const S = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('');
const result = [];
S.forEach((e, i) => {
  const len = (e.charCodeAt().toString().split('').map(Number)).reduce((acc, cur) => acc + cur, 0);
  result[i] = e.repeat(len);
});
console.log(result.join('\n'));