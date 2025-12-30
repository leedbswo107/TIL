/**
 * 문제
 * 아우으 우아으이야!! 으어아아아아아아아ㅏㅏㅏ아아앙ㅇ아아ㅏ
 * 수직선 위에 선분을 여러 개 그릴 거 야아아앙ㅇ아아아ㅏㅏ아아ㅏㅏ!!
 * 선분을 겹치게 그리는 것도 가능하다아어으우어우으아아아아아아아아아이야!!!!1
 * 선분을 모두 그렸을 때, 수직선 위에 그려진 선분 길이의 총합은 얼마아아으으우어으이으야이야!!!!
 * 
 * 출력
 * N개의 선분을 모두 그렸을 때, 수직선 위에 그어진 선분 길이의 총합을 출력한다아아어으잉에애야우아으아이아야아아아아아아이야!!!
 */
const [_, ...pos] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
let totalLength = 0;
let [x, y] = pos[0];
for (let i = 1; i < pos.length; i++) {
  const [a, b] = pos[i];
  if(y >= a) [x, y] = y >= b ? [x, y] : [x, b];
  else {
    totalLength += (y - x);
    [x, y] = [a, b];
  }
}
totalLength += (y - x);
console.log(totalLength);
