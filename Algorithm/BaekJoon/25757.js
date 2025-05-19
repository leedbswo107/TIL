/**
 * 문제
 * 임스가 미니게임을 같이할 사람을 찾고 있습니다.플레이할 미니게임으로는 윷놀이 Y, 같은 그림 찾기 F, 원카드 O가 있습니다. 각각 2, 3, 4 명이서 플레이하는 게임이며 인원수가 부족하면 게임을 시작할 수 없습니다.
 * 사람들이 임스와 같이 플레이하기를 신청한 횟수 N과 임스가 플레이할 게임의 종류가 주어질 때, 최대 몇 번이나 임스와 함께 게임을 플레이할 수 있는지 구하시오.
 * 임스와 여러 번 미니게임을 플레이하고자 하는 사람이 있으나, 임스는 한 번 같이 플레이한 사람과는 다시 플레이하지 않습니다.
 * 임스와 함께 플레이하고자 하는 사람 중 동명이인은 존재하지 않습니다. 임스와 lms0806은 서로 다른 인물입니다.
 * 
 * 출력
 * 임스가 최대로 몇 번이나 게임을 플레이할 수 있는지 구하시오.
 */
const [i1, ...i2] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const game = i1.split(' ')[1];
const peoples = Array.from(new Set(i2)).length;
let result = 0;

switch (game) {
  // 윷놀이 2
  case 'Y':
    result += peoples;
    break;
  // 같은 그림 찾기 3
  case 'F':
    result += Math.floor(peoples / 2);
    break;
  //원카드 4
  case 'O':
    result += Math.floor(peoples / 3);
    break;
}
console.log(result);