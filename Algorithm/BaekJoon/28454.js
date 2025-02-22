/**
 * 문제
 * 임스는 여러 사람에게 기프티콘을 받았다. 현재 사용할 수 있는 기프티콘이 몇 개인지 궁금했던 
 * 임스는 지금까지 받은 기프티콘을 확인하고자 한다. 임스가 현재 사용할 수 있는 기프티콘의 총개수를 
 * 구해 임스를 도와주자. 현재 날짜 이후의 유효기간을 가진 기프티콘만 사용 가능하다.
 * 임스가 받은 N개의 기프티콘의 유효기간이 주어질 때, 임스가 현재 사용할 수 있는 기프티콘의 
 * 개수를 구하여라. 주어지는 날짜 형식은 YYYY-MM-DD이고 이 문제에서 윤년은 고려하지 않는다. 
 * 즉, 연도와 관계없이 항상 2월은 28일까지만 주어진다.
 * 
 * 출력
 * 임스가 현재 사용할 수 있는 기프티콘의 개수를 출력한다.
 */
const [tDate, _, ...times] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const dateParser = (date) => new Date(date).getTime();
const result = times.map(e => dateParser(e) >= dateParser(tDate)).filter(e => e === true).length;
console.log(result);