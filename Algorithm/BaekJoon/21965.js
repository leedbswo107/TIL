/**
 * 문제
 * 드높은 남산 위에 우뚝 선
 * (중략)
 * 세워라 반석 위에
 * 선린의 터를
 * 어떤 수열 
 * A가 산이라는 것은, 수열이 어떤 지점 이전까지는 증가하다가, 해당 지점 이후부터는 감소하는 것을 의미한다. 다시 말해, 1 < j <= i인 j에 대해 A{j-1} < Aj이고 i < j <= N인 j에 대해 A{j-1} > Aj를 만족하는 N 이하의 자연수 i가 존재한다는 것을 의미한다.
 * 예를 들어 1 2 3 4 2는 4번째 수까지는 증가하는 수열이고, 4번째 수 이후로는 감소하는 수열이므로 산이다(i = 4). 1 2 3 4 5 역시 산이다(i = 5). 하지만 1 2 2 3 1은 산이 아니다.
 * 입력으로 주어지는 수열이 산인지 산이 아닌지 판별하는 프로그램을 작성하자.
 * 
 * 출력
 * 입력으로 주어진 수열 A가 산이면 "YES"를, 산이 아니면 "NO"를 출력한다.
 */
const [[N], A] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
let diff = new Array(N - 1).fill(0);
let result = true;
for (let i = 1; i < N; i++) {
  if (A[i - 1] === A[i]) {
    result = false;
    break;
  }
  if (A[i - 1] - A[i] > 0) diff[i - 1] = false;
  else diff[i - 1] = true;
}
if (result) {
  let count = 0;
  for (let i = 1; i < N - 1; i++) if (diff[i - 1] !== diff[i]) count++;
  if (count > 1) result = false;
}
console.log(result ? 'YES' : 'NO');