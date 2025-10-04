/**
 * 문제
 * 평면에 색깔이 서로 다른 직사각형 모양의 색종이 N장이 하나씩 차례로 놓여진다. 이때 색종이가 비스듬하게 놓이는 경우는 없다. 즉, 모든 색종이의 변은 서로 평행하거나, 서로 수직이거나 둘 중 하나이다. 그림-1은 1번, 2번, 3번 세 장의 색종이가 순서대로 놓인 상태를 보여준다.
 * 여기에 그림-2에서 보인 것처럼 4번 색종이가 하나 더 놓이면 3번 색종이는 완전히 가려서 보이지 않게 된다. 그리고, 1번 색종이와 2번 색종이는 부분적으로 가려 보이며, 4번 색종이는 완전히 보이게 된다.
 * N장의 색종이가 주어진 위치에 차례로 놓일 경우, 각 색종이가 보이는 부분의 면적을 구하는 프로그램을 작성하시오. 
 * 
 * 출력
 * 입력에서 주어진 순서에 따라 N장의 색종이를 평면에 놓았을 때, 입력에서 주어진 순서대로 각 색종이가 보이는 부분의 면적을 한 줄에 하나씩 하나의 정수로 출력한다. 만약 색종이가 보이지 않는다면 정수 0을 출력한다. 
 */
const [[N], ...papers] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split("\n").map(e => e.split(' ').map(Number));
const area = Array.from({ length: 1001 }, () => new Array(1001).fill(0));
const result = new Array(N + 1).fill(0);
papers.forEach(([x, y, w, l], idx) => {
  for (let i = y; i < y + l; i++) for (let j = x; j < x + w; j++) area[i][j] = idx + 1;
});
for (let i = 0; i < 1001; i++) for (let j = 0; j < 1001; j++) result[area[i][j]]++;
console.log(result.slice(1).join('\n'));