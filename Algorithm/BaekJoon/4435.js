/**
 * 문제
 * 중간계에 전쟁이 일어나려고 한다. 간달프는 사우론에 대항하기 위한 군대를 
 * 소집했고, 여러 종족이 이 군대에 가담했다. 
 * 전쟁을 시작하기 전에 간달프는 각 종족에 점수를 매겼다.
 * 간달프의 군대의 각 종족의 점수는 다음과 같다.
 * 호빗 - 1
 * 인간 - 2
 * 엘프 - 3
 * 드워프 - 3
 * 독수리 - 4
 * 마법사 - 10
 * 사우론의 군대의 점수는 다음과 같다.
 * 오크 - 1
 * 인간 - 2
 * 워그(늑대) - 2
 * 고블린 - 2
 * 우럭하이 - 3
 * 트롤 - 5
 * 마법사 - 10
 * 중간계는 매우 신비한 곳이어서 각 전투의 승리는 날씨, 장소, 용맹에 영향을 받지 
 * 않는다. 전투에 참여한 각 종족의 점수를 합한 뒤, 큰 쪽이 이긴다.
 * 전투에 참여한 종족의 수가 주어졌을 때, 어느 쪽이 이기는지 구하는 프로그램을 
 * 작성하시오.
 * 
 * 출력
 * 각 전투에 대해서, "Battle"과 전투 번호를 출력한다. 
 * 그 다음에 간달프의 군대가 이긴다면 "Good triumphs over Evil"를, 
 * 사우론의 군대가 이긴다면 "Evil eradicates all trace of Good", 
 * 점수의 합이 같아 이기는 쪽이 없다면 "No victor on this battle 
 * field"를 출력한다.
 */
const [T, ...scores] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const MSG = {
  WIN: "Good triumphs over Evil",
  DRAW: "No victor on this battle field",
  LOSE: "Evil eradicates all trace of Good"
}
const result = new Array(+T);
const gArmy = [1, 2, 3, 3, 4, 10];
const sArmy = [1, 2, 2, 2, 3, 5, 10];
const solution = (arr, armyType) => {
  const army = arr.split(' ').map(Number);
  let sum = 0;
  for (let i = 0; i < army.length; i++) sum += (army[i] * armyType[i]);
  return sum;
}
for (let i = 0; i < +T; i++) {
  const G = solution(scores[i * 2], gArmy);
  const S = solution(scores[i * 2 + 1], sArmy);
  let msg;
  G > S && (msg = MSG.WIN);
  G === S && (msg = MSG.DRAW);
  G < S && (msg = MSG.LOSE);
  result[i] = `Battle ${i + 1}: ${msg}`;
}
console.log(result.join('\n'));