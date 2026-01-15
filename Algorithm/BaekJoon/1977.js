/**
 * 문제
 * M과 N이 주어질 때 M이상 N이하의 자연수 중 완전제곱수인 것을 모두 골라 그 합을 구하고 그 중 최솟값을 찾는 프로그램을 작성하시오. 예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 완전제곱수는 64, 81, 100 이렇게 총 3개가 있으므로 그 합은 245가 되고 이 중 최솟값은 64가 된다.
 * 
 * 출력
 * M이상 N이하의 자연수 중 완전제곱수인 것을 모두 찾아 첫째 줄에 그 합을, 둘째 줄에 그 중 최솟값을 출력한다. 단, M이상 N이하의 자연수 중 완전제곱수가 없을 경우는 첫째 줄에 -1을 출력한다.
 */
const [M, N] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);
let cur = M;
let valueSum = 0;
let min = 10000;
while(cur <= N) {
  const squareNum = Math.sqrt(cur);
  if(squareNum === Math.floor(squareNum)) {
    valueSum += cur;
    min = min < cur ? min : cur;
  }
  cur++;
}
const result = valueSum === 0 ? -1 : `${valueSum}\n${min}`;
console.log(result);
