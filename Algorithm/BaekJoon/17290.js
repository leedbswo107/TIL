/**
 * 문제
 * 크레이지 아케이드를 하면서 폭탄을 피하려고 한다. 게임을 하는 곳은 10×10 크기의 배열로 나타낼 수 있고, 폭탄이 있는 칸은 o, 없는 칸은 x로 나타낸다. 폭탄이 터질 때, 폭탄과 같은 행 또는 같은 열에 있다면, 물방울에 갇히게 된다.
 * 예를 들어, 아래와 같은 배열에서 폭탄이 터지게 되면, (4,3)에 있어야 물방울에 갇히는 것을 피할 수 있다.
 * x x x o
 * o x x x
 * x o x x
 * x x x x
 * 위치와 게임판이 주어졌을 때, 물방울에 갇히지 않기 위해 움직여야 할 최소 이동 횟수를 구해보자. 한 번에 한 칸 가로 또는 세로로 이동할 수 있다. 폭탄 위를 지나갈 수 있으며, 움직이지 않아도 된다면 0을 출력한다.
 * 
 * 출력
 * 첫째 줄에 최소 이동 횟수를 출력한다.
 */
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const [R, C] = input[0].split(' ').map(Number);
const len = input.slice(1).length;
const init = () => new Array(len).fill(1).map((e, i) => e + i);
const getPosition = (arr, dir) => arr.filter(e => e !== false).map(e => e - dir < 0 ? dir - e : e - dir);
const [row, col] = [init(), init()];
input.slice(1).forEach((e, i) => e.split('').forEach((el, j) => el === 'o' && (row[i] = false, col[j] = false)));
console.log(getPosition(row, R).sort((a, b) => a - b)[0] + getPosition(col, C).sort((a, b) => a - b)[0]);