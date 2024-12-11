/**
 * 문제
 * 형택이는 건축가이다. 지금 막 형택이는 형택이의 남자 친구 기훈이의 집을 막
 * 완성시켰다. 형택이는 기훈이 방의 바닥 장식을 디자인했고, 이제 몇 개의 나무
 * 판자가 필요한지 궁금해졌다. 나무 판자는 크기 1의 너비를 가졌고, 양수의 길이를
 * 가지고 있다. 기훈이 방은 직사각형 모양이고, 방 안에는 벽과 평행한 모양의
 * 정사각형으로 나누어져 있다.
 *
 * 이제 ‘-’와 ‘|’로 이루어진 바닥 장식 모양이 주어진다. 만약 두 개의 ‘-’가
 * 인접해 있고, 같은 행에 있다면, 두 개는 같은 나무 판자이고, 두 개의 ‘|’가
 * 인접해 있고, 같은 열에 있다면, 두 개는 같은 나무 판자이다.
 *
 * 기훈이의 방 바닥을 장식하는데 필요한 나무 판자의 개수를 출력하는
 * 프로그램을 작성하시오.
 *
 * 출력
 * 첫째 줄에 문제의 정답을 출력한다.
 */
const [i1, ...i2] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n");
const [N, M] = i1.split(" ").map(Number);
const tiles = i2.map((e) => e.split("")).flat();
let count = 0;
let i = 0;
while (i < N * M) {
  if (tiles[i] === "-") {
    ((i + 1 < Math.ceil((i + 1) / M) * M && tiles[i] !== tiles[i + 1]) ||
      i === Math.ceil((i + 1) / M) * M - 1) &&
      count++;
  } else (tiles[i] !== tiles[i + M] || Math.ceil(i / M) === N) && count++;
  i++;
}
console.log(count);
