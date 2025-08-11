/**
 * 문제
 * 체스판은 8×8크기이고, 검정 칸과 하얀 칸이 번갈아가면서 색칠되어 있다. 가장 왼쪽 위칸 (0,0)은 하얀색이다. 체스판의 상태가 주어졌을 때, 하얀 칸 위에 말이 몇 개 있는지 출력하는 프로그램을 작성하시오.
 * 
 * 출력
 * 첫째 줄에 문제의 정답을 출력한다.
 */
const chess = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(''));
let result = 0;
for (let y = 0; y < 8; y++) {
  const isEven = y % 2 === 0 ? n => n % 2 === 0 : n => n % 2 === 1;
  for (let x = 0; x < 8; x++) isEven(x) && chess[y][x] === 'F' && result++;
}
console.log(result);