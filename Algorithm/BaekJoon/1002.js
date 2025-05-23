/**
 * 문제
 * 조규현과 백승환은 터렛에 근무하는 직원이다. 하지만 워낙 존재감이 없어서 인구수는 차지하지 않는다. 다음은 조규현과 백승환의 사진이다.
 * 이석원은 조규현과 백승환에게 상대편 마린(류재명)의 위치를 계산하라는 명령을 내렸다. 조규현과 백승환은 각각 자신의 터렛 위치에서 현재 적까지의 거리를 계산했다.
 * 조규현의 좌표 (x1, y1)와 백승환의 좌표 (x2, y2)가 주어지고, 조규현이 계산한 류재명과의 거리 r1과 백승환이 계산한 류재명과의 거리 r2가 주어졌을 때, 류재명이 있을 수 있는 좌표의 수를 출력하는 프로그램을 작성하시오.
 * 
 * 출력
 * 각 테스트 케이스마다 류재명이 있을 수 있는 위치의 수를 출력한다. 만약 류재명이 있을 수 있는 위치의 개수가 무한대일 경우에는 -1 출력한다.
 */
const [T, ...inputs] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = new Array(+T);
const solution = (x1, y1, r1, x2, y2, r2) => {
  const diffX = x1 >= x2 ? x1 - x2 : x2 - x1;
  const diffY = y1 >= y2 ? y1 - y2 : y2 - y1;
  const cross = Math.sqrt(diffX ** 2 + diffY ** 2);
  if (diffX === 0 && diffY === 0) {
    if (r1 === r2) return -1;
    return 0;
  } else {
    if (cross > r1 + r2) return 0;
    else if ((cross + r1) ** 2 === r2 ** 2 || (cross + r2) ** 2 === r1 ** 2) return 1;
    else if ((cross + r1) ** 2 < r2 ** 2 || (cross + r2) ** 2 < r1 ** 2) return 0;
    else if (cross ** 2 === (r1 + r2) ** 2) return 1;
    else if (cross ** 2 < (r1 + r2) ** 2) return 2;
  }
}
inputs.forEach((e, i) => result[i] = solution(...e.split(" ").map(Number)));
console.log(result.join('\n'));