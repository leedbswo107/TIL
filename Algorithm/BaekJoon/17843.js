/**
 * 문제
 * 어느 날, 할 것이 없던 윤표는 시계를 관찰하기 시작했다. 어느 순간 윤표는 시계가 하나의 원이라는 사실을 깨달았다. 또, 시계의 중심에서 시침, 분침, 그리고 초침의 방향으로 반직선을 그어 시계의 둘레와 만나는 점을 각각 A, B, C라고 하고, 시계의 중심점을 O라고 했을 때 OA, OB, OC 중 어느 두 반직선이 이루는 각들을 비교하다가 어떤 각이 가장 작은지 궁금해졌다. OA, OB, OC 중 어느 두 반직선이 이루는 각 중 최소 각을 출력하는 프로그램을 만드시오. 단, 각도의 단위는 도(°)이다.
 * 
 * 출력
 * T개의 테스트 케이스 각각에 대해 OA, OB, OC 중 어느 두 반직선이 이루는 각 중 최소의 각을 출력한다.
 * 실제 정답과 출력 값의 절대오차 또는 상대오차가 10-6 이하이면 정답으로 처리된다.
 */
const [_, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const solution = (h, m, s) => {
  const arr = [6 * s, 6 * (m + s / 60), 30 * (h + m / 60 + s / (60 * 60))];
  const diffArr = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === j) continue;
      else {
        const diff = +(arr[i] - arr[j]).toFixed(6);
        diffArr.push(diff) && diffArr.push(360 - diff);
      }
    }
  }
  return Math.min(...diffArr.map(e => Math.abs(e)))
}
const result = input.map(e => solution(...e)).join('\n');
console.log(result);