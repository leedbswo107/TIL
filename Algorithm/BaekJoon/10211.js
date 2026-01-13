/**
 * 문제
 * 크기 N인 정수형 배열 X가 있을 때, X의 부분 배열(X의 연속한 일부분) 중 각 원소의 합이 가장 큰 부분 배열을 찾는 Maximum subarray problem(최대 부분배열 문제)은 컴퓨터 과학에서 매우 잘 알려져 있다.
 * 여러분은 N과 배열 X가 주어졌을 때, X의 maximum subarray의 합을 구하자. 즉, max1 ≤ i ≤  j ≤ N (X[i]+...+X[j])를 구하자.
 * 
 * 출력
 * 각 테스트케이스 별로 maximum subarray의 합을 줄로 구분하여 출력한다.
 */
const [T, ...input] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const result = new Array(T);
for (let i = 0; i < +T; i++) {
  const N = +input[i * 2];
  const sequnce = input[i * 2 + 1].split(' ').map(Number);
  const prefixSum = new Array(N + 1).fill(0);
  for (let j = 1; j <= N; j++) prefixSum[j] = prefixSum[j - 1] + sequnce[j - 1];
  let max = -Infinity;
  for (let a = 1; a <= N; a++) {
    const tmp = [];
    for (let b = 0; b <= N - a; b++) {
      const cur = prefixSum[a + b] - prefixSum[b];
      max = max < cur ? cur : max;
    }
  }
  result[i] = max;
}
console.log(result.join('\n'));
