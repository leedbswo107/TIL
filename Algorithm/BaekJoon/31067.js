/**
 * 문제
 * 다오는 경주 대회를 열기 위해 N개의 트랙을 준비했다. i번째로 경주하는 트랙의 길이는 Ai이다.관중들은 트랙의 길이가 점점 길어져야 경주가 재미있다고 생각한다. 즉, A1< A2< ... < AN인 경우 경주가 재미있다고 생각한다. 이를 위해 다오는 다음과 같은 시행을 0회 이상 할 수 있다.
 * 1<= i<= N인 i를 고른 뒤, i번째 트랙의 길이를 K만큼 늘린다. 즉, Ai를 Ai+K로 바꾼다.
 * 위 시행은 각 i에 대해 최대 한 번만 할 수 있다.
 * 다오가 트랙의 길이를 점점 증가하도록 만들 수 있는지 판단하고, 만약 가능하다면 이를 위해 필요한 시행의 최소 횟수를 구하시오.
 * 
 * 출력
 * 만약 다오가 트랙의 길이를 점점 증가하도록 만들 수 있다면, 이를 위해 필요한 최소 시행의 횟수를 출력하여라.
 * 만약 다오가 트랙의 길이를 점점 증가하도록 만들 수 없다면, -1을 출력하여라.
 */
const [[N, K], A] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
let count = 0;
for (let i = 1; i < N; i++) {
  if (A[i - 1] >= A[i]) {
    A[i] += K;
    count++;
  };
}
let status = true;
for (let i = 1; i < N; i++) {
  if (A[i - 1] >= A[i]) {
    status = false;
    break;
  }
}
const result = status && (A.length === (new Set(A)).size) ? count : -1;
console.log(result);