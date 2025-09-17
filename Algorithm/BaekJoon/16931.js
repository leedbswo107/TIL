/**
 * 문제
 * 크기가 N×M인 종이가 있고, 종이는 1×1크기의 칸으로 나누어져 있다. 이 종이의 각 칸 위에 1×1×1 크기의 정육면체를 놓아 3차원 도형을 만들었다.
 * 종이의 각 칸에 놓인 정육면체의 개수가 주어졌을 때, 이 도형의 겉넓이를 구하는 프로그램을 작성하시오.
 * 위의 그림은 3×3 크기의 종이 위에 정육면체를 놓은 것이고, 겉넓이는 60이다.
 * 
 * 출력
 * 첫째 줄에 도형의 겉넓이를 출력한다.
 */
let [[N, M], ...shapes] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const layer = Math.max(...[...shapes].flat());
let result = N * M * 2;
for (let l = 1; l <= layer; l++) {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (shapes[y][x] >= l) {
        let area = 4;
        if (x + 1 < M && (l <= shapes[y][x + 1])) { area -= 1; }
        if (x - 1 >= 0 && (l <= shapes[y][x - 1])) { area -= 1 }
        if (y + 1 < N && (l <= shapes[y + 1][x])) { area -= 1 }
        if (y - 1 >= 0 && (l <= shapes[y - 1][x])) { area -= 1 }
        result += area;
      }
    }
  }
}
console.log(result);