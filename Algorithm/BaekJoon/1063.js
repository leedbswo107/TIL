/**
 * 문제
 * 8*8크기의 체스판에 왕이 하나 있다. 킹의 현재 위치가 주어진다. 체스판에서 말의 위치는 다음과 같이 주어진다. 알파벳 하나와 숫자 하나로 이루어져 있는데, 알파벳은 열을 상징하고, 숫자는 행을 상징한다. 열은 가장 왼쪽 열이 A이고, 가장 오른쪽 열이 H까지 이고, 행은 가장 아래가 1이고 가장 위가 8이다. 예를 들어, 왼쪽 아래 코너는 A1이고, 그 오른쪽 칸은 B1이다.
 * 킹은 다음과 같이 움직일 수 있다.
 * R : 한 칸 오른쪽으로
 * L : 한 칸 왼쪽으로
 * B : 한 칸 아래로
 * T : 한 칸 위로
 * RT : 오른쪽 위 대각선으로
 * LT : 왼쪽 위 대각선으로
 * RB : 오른쪽 아래 대각선으로
 * LB : 왼쪽 아래 대각선으로
 * 체스판에는 돌이 하나 있는데, 돌과 같은 곳으로 이동할 때는, 돌을 킹이 움직인 방향과 같은 방향으로 한 칸 이동시킨다. 아래 그림을 참고하자.
 * 입력으로 킹이 어떻게 움직여야 하는지 주어진다. 입력으로 주어진 대로 움직여서 킹이나 돌이 체스판 밖으로 나갈 경우에는 그 이동은 건너 뛰고 다음 이동을 한다.
 * 킹과 돌의 마지막 위치를 구하는 프로그램을 작성하시오.
 *
 * 출력
 * 첫째 줄에 킹의 마지막 위치, 둘째 줄에 돌의 마지막 위치를 출력한다.
 */
const [input, ...moves] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const [K, R, _] = input.split(' ').map(e => e.split(''));
const rows = new Array(8).fill(65).map((e, i) => String.fromCharCode(e + i));
let [kx, ky] = [K[0].charCodeAt() - 65, +K[1] - 1];
let [rx, ry] = [R[0].charCodeAt() - 65, +R[1] - 1];
moves.forEach(move => {
  let [x, y] = [0, 0];
  if (move === 'R') x += 1;
  else if (move === 'L') x = -1;
  else if (move === 'B') y = - 1;
  else if (move === 'T') y += 1;
  else if (move === 'RT') (x = 1) && (y = 1);
  else if (move === 'LT') (x = -1) && (y = 1);
  else if (move === 'RB') (x = 1) && (y = -1);
  else if (move === 'LB') (x = -1) && (y = -1);
  if ((kx + x >= 0 && kx + x < 8) && (ky + y >= 0 && ky + y < 8)) {
    if ((kx + x) === rx && (ky + y) === ry) {
      if ((rx + x < 8 && rx + x >= 0) && (ry + y < 8 && ry + y >= 0)) {
        [rx, ry] = [rx + x, ry + y];
        [kx, ky] = [kx + x, ky + y];
      }
    } else[kx, ky] = [kx + x, ky + y];
  }
});
const result = [rows[kx] + (ky + 1), rows[rx] + (ry + 1)].join('\n');
console.log(result);