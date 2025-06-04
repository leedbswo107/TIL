/**
 * 문제
 * 먹고또자니 <거기 누구세요> 코너에서는 "돌림판"을 돌려 상품을 얻을 수 있다. 이 돌림판은 큰 원형판이 N등분되어있는 형태이다.
 * N등분 된 각 부분은 0부터 9사이의 숫자가 하나씩 적혀있다. 게임이 시작되면, 임의의 M자리의 수 X와 Y(X ≤ Y)가 주어진다. (단, 이 수는 0으로 시작될 수도 있다.)
 * 그리고 참가자는 돌림판을 힘차게 돌린다. 힘차게 돌던 돌림판이 완전히 멈추게 되는 순간, 12시 방향의 스피너가 특정 부분을 가리키게 될 것이다. 거기서부터 시계방향으로 M칸 연속되는 수를 읽으면 M자리의 수 Z를 얻을 수 있다.
 * 이때 얻은 Z가 X ≤ Z ≤ Y를 만족한다면 게임을 승리하고 Z만원을 얻을 수 있다!
 * The wheel of Numbers
 * 예를 들어, 돌림판이 N = 8 등분되어있고, 시계방향으로 읽었을 때 [3, 7, 8, 3, 1, 9, 2, 7] 과 같다고 하자. X = 200 이고 Y = 311일 경우 "숫자 2"가 적힌 부분부터 시작한다면 Z = 273 으로 X = 200 ≤ 273 ≤ 311 = Y 를 만족하여 게임을 승리한다.
 * 돌림판의 상태와 X, Y가 주어질 때 어느 부분부터 시작하면 게임을 승리할 수 있을 지 알 수 있다. 주어진 조건에 대해서 게임을 승리할 수 있는 가지수를 계산하는 프로그램을 작성하시오.
 * 
 * 출력
 * 각 테스트케이스에 대하여 한 줄씩 정답을 출력한다.
 * 즉, 돌림판에서 X ≤ Z ≤ Y를 만족하는 M자리의 수 Z가 몇 개가 있는 지를 출력한다. 단, 같은 수라도 시작 부분이 다르다면 다른 가지수로 센다. 예를 들어, X와 Y 사이에 있는 수가 123 밖에 없는 데 돌림판에서 2번 나온다면, 1이 아닌 2를 출력한다.
 */
const [T, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const result = new Array(+T);
const solution = (N, M, X, Y, spinner) => {
  const len = N;
  let count = 0;
  const numX = +X.join('');
  const numY = +Y.join('');
  for (let i = 0; i < len; i++) {
    if (spinner[i % N] >= X[0] && spinner[i % N] <= Y[0]) {
      const suspect = i + M > N ?
        +[...spinner.slice(i, N), ...spinner.slice(0, i + M - N)].join('') :
        +spinner.slice(i, i + M).join('');
      if (suspect >= numX && suspect <= numY) count++;
    }
  }
  return count;
}
for (let i = 0; i < +T; i++) {
  const [N, M] = input[i * 4];
  const X = input[i * 4 + 1];
  const Y = input[i * 4 + 2];
  const arr = input[i * 4 + 3];
  result[i] = solution(N, M, X, Y, arr);
}
console.log(result.join('\n'));