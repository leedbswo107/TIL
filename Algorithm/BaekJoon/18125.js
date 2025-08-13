/**
 * 문제
 * 가톨릭대학교 풀숲 속 집에 살고 있는 고양이 황톨릭은 다른 고양이들에 비해 많이 예민한 고양이이다. 톨릭이네 집에는 어렸을 때부터 전시해왔던 사료 사진이 있는데 톨릭이네 식구들은 학생들이 나눠 준 사료가 사진 속 사료와 동일할 때만 먹는다. 하지만 바람에 의해 사진이 반시계 방향으로 90도 돌아가버린 바람에 톨릭이네 식구들은 사료를 먹지 못하고 있다.
 * 키가 작은 톨릭이네 식구들은 사진을 돌려놓지 못한다. 톨릭이네를 위해 학생들이 나눠준 사료를 구분하여 만약 먹을 수 없다면 놀란 고양이(예제 출력1)를 먹을 수 있다면 윙크하는 고양이(예제 출력2)를 보여주자!
 * 
 * 출력
 * 톨릭이가 학생들이 준 사료를 먹을 수 있다면 윙크하는 고양이를 그렇지 않다면 놀란 고양이를 출력한다.
 */
const [[R, C], ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const num = input.splice(0, C);
const rNum = Array.from({ length: R }, () => new Array(C));
for (let x = 0; x < R; x++) for (let y = 0; y < C; y++) rNum[x][C - y - 1] = num[y][x];

const solution = () => {
  let status = true;
  for (let x = 0; x < R; x++) {
    for (let y = 0; y < C; y++) {
      if (rNum[x][y] !== input[x][y]) {
        status = false;
        break;
      }
    }
    if (!status) break;
  }
  return status;
}
const result = solution();
console.log(result ?
  `|>___/|        /}
| O < |       / }
(==0==)------/ }
| ^  _____    |
|_|_/     ||__|` :
  `|>___/|     /}
| O O |    / }
( =0= )""""  \\
| ^  ____    |
|_|_/    ||__|`);