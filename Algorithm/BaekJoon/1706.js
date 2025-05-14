/**
 * 문제
 * 동혁이는 크로스워드 퍼즐을 좋아한다. R×C 크기의 크로스워드 퍼즐을 생각해 보자. 이 퍼즐은 R×C 크기의 표로 이루어지는데, 퍼즐을 다 풀면 금지된 칸을 제외하고는 각 칸에 알파벳이 하나씩 적혀 있게 된다. 아래는 R = 5, C = 5 인 경우 다 푼 퍼즐의 한 예이다. 검은 칸은 금지된 칸이다.
 * 세로 또는 가로로 연속되어 있고, 더 이상 확장될 수 없는 낱말이 퍼즐 내에 존재하는 단어가 된다. 위의 퍼즐과 같은 경우, 가로 낱말은 good, an, messy, it, late의 5개가 있고, 세로 낱말은 game, one, sit, byte의 4개가 있다. 이 중 사전식 순으로 가장 앞서 있는 낱말은 an이다.
 * 다 푼 퍼즐이 주어졌을 때, 퍼즐 내에 존재하는 모든 낱말 중 사전식 순으로 가장 앞서 있는 낱말을 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 첫째 줄에 사전식 순으로 가장 앞서 있는 낱말을 출력한다.
 */
const [i1, ...i2] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const [R, C] = i1.split(' ').map(Number);
const arr = i2.map(e => e.split(''));
const solution = (puzzle) => {
  return puzzle.map(e => e.split('#')).flat().filter(e => e !== '' && e.length !== 1);
}
const arr1 = solution(i2);
const arr2 = Array.from({ length: C }, () => new Array(R));
for (let y = 0; y < R; y++) {
  for (let x = 0; x < C; x++) arr2[x][y] = arr[y][x];
}
const total = [...arr1, ...solution(arr2.map(e => e.join('')))];
console.log(total.sort()[0]);