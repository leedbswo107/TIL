/**
 * 문제
 * N×N개의 수가 N×N 크기의 표에 채워져 있다. (x1, y1)부터 (x2, y2)까지 합을 구하는 프로그램을 작성하시오. (x, y)는 x행 y열을 의미한다.
 * 예를 들어, N = 4이고, 표가 아래와 같이 채워져 있는 경우를 살펴보자.
 * 1	2	3	4
 * 2	3	4	5
 * 3	4	5	6
 * 4	5	6	7
 * 여기서 (2, 2)부터 (3, 4)까지 합을 구하면 3+4+5+4+5+6 = 27이고, (4, 4)부터 (4, 4)까지 합을 구하면 7이다.
 * 표에 채워져 있는 수와 합을 구하는 연산이 주어졌을 때, 이를 처리하는 프로그램을 작성하시오.
 * 
 * 
 * 출력
 * 총 M줄에 걸쳐 (x1, y1)부터 (x2, y2)까지 합을 구해 출력한다.
 */
const [[N, M], ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const matrix = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
const tmp = input.splice(0, N);
for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < N + 1; j++) matrix[i][j] = (matrix[i][j - 1] + tmp[i - 1][j - 1]);
  for (let j = 1; j < N + 1; j++) matrix[i][j] += matrix[i - 1][j];
}
const result = input.map(([x1, y1, x2, y2]) => matrix[x2][y2] - matrix[x2][y1 - 1] - matrix[x1 - 1][y2] + matrix[x1 - 1][y1 - 1]).join('\n');
console.log(result);