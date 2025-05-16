/**
 * 문제
 * 재귀 호출만 생각하면 신이 난다! 아닌가요?
 * 다음과 같은 재귀함수 w(a, b, c)가 있다.
 * if a <= 0 or b <= 0 or c <= 0, then w(a, b, c) returns:
 *     1
 * if a > 20 or b > 20 or c > 20, then w(a, b, c) returns:
 *     w(20, 20, 20)
 * if a < b and b < c, then w(a, b, c) returns:
 *     w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c)
 * otherwise it returns:
 *     w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1)
 * 위의 함수를 구현하는 것은 매우 쉽다. 하지만, 그대로 구현하면 값을 구하는데 매우 오랜 시간이 걸린다. (예를 들면, a=15, b=15, c=15)
 * a, b, c가 주어졌을 때, w(a, b, c)를 출력하는 프로그램을 작성하시오.
 * 
 * 출력
 * 입력으로 주어진 각각의 a, b, c에 대해서, w(a, b, c)를 출력한다.
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
input.pop();
const maxFunc = (idx) => [...input].sort((a, b) => b[idx] - a[idx])[0][idx];

const maxA = maxFunc(0);
const maxB = maxFunc(1);
const maxC = maxFunc(2);

let w = Array.from({ length: maxA + 1 }, () => Array.from({ length: maxB + 1 }, () => new Array(maxC + 1).fill(0)));
const solution = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) [a, b, c] = [20, 20, 20];
  for (let z = 0; z <= a; z++) {
    for (let y = 0; y <= b; y++) {
      for (let x = 0; x <= c; x++) {
        if (x <= 0 || y <= 0 || z <= 0) w[z][y][x] = 1;
        else if (z < y && y < x) w[z][y][x] = w[z][y][x - 1] + w[z][y - 1][x - 1] - w[z][y - 1][x];
        else w[z][y][x] = w[z - 1][y][x] + w[z - 1][y - 1][x] + w[z - 1][y][x - 1] - w[z - 1][y - 1][x - 1];
      }
    }
  }
  return w[a][b][c];
}
const result = new Array(input.length);
input.forEach((e, i) => {
  const [a, b, c] = [...e];
  result[i] = `w(${a}, ${b}, ${c}) = ${solution(a, b, c)}`;
});
console.log(result.join('\n'));