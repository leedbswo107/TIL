/**
 * 문제
 * 현권이는 평소 신기한 수열을 찾는 것을 좋아한다. 평소와 같이 현권이는 신기한 수열을 찾다가 재미있는 수열 A를 하나 발견했다.수열 A는 다음 조건을 만족한다. 
 * A{0} = 0
 * A{i} = A{i - 1} - i
 * 단, 위 조건으로 구한 Ai가 음수이거나 A0, ... ,A{i - 1} 중에 존재하는 값이면, A{i} = A{i - 1} + i 이다.
 * 현권이는 이 수열을 구하는 프로그램을 만들고 싶어 한다. 현권이를 도와 N이 주어졌을 때, A{N}을 구하는 프로그램을 만들어 보자.
 * 
 * 출력
 * 첫 번째 줄에 A{N}을 출력한다.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
let visited = {};
let A = [];
for (let i = 0; i <= N; i++) {
  let tmp = i === 0 ? 0 : A[i - 1] - i;
  tmp = (tmp < 0 || visited[tmp]) ? A[i - 1] + i : tmp;
  visited[tmp] = true;
  A[i] = tmp;
}
console.log(A[N]);