/**
 * 문제
 * 평면에 네 개의 직사각형이 놓여 있는데 그 밑변은 모두 가로축에 평행하다.
 * 이 네 개의 직사각형들은 서로 떨어져 있을 수도 있고, 겹쳐 있을 수도 있고,
 * 하나가 다른 하나를 포함할 수도 있으며, 변이나 꼭짓점이 겹칠 수도 있다.
 * 이 직사각형들이 차지하는 면적을 구하는 프로그램을 작성하시오.
 *
 * 출력
 * 첫 줄에 네개의 직사각형이 차지하는 면적을 출력한다.
 */
let position = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n");
let whiteSquare = Array.from({ length: 100 }, () => new Array(100).fill(0));
position = position.map((e) => e.split(" ").map(Number));
position.forEach((e) => {
  const [x1, y1, x2, y2] = [e[0], e[1], e[2], e[3]];
  for (let x = x1; x < x2; x++) {
    for (let y = y1; y < y2; y++) whiteSquare[y][x] = 1;
  }
});
console.log(whiteSquare.flat().filter((e) => e === 1).length);
