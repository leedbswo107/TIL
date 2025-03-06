/**
 * 문제
 * P[0], P[1], ...., P[N-1]은 0부터 N-1까지(포함)의 수를 한 번씩 포함하고 있는 
 * 수열이다. 수열 P를 길이가 N인 배열 A에 적용하면 길이가 N인 배열 B가 된다. 적용하는 방법은 B
 * [P[i]] = A[i]이다.
 * 배열 A가 주어졌을 때, 수열 P를 적용한 결과가 비내림차순이 되는 수열을 찾는 프로그램을 
 * 작성하시오. 비내림차순이란, 각각의 원소가 바로 앞에 있는 원소보다 크거나 같을 경우를 말한다. 
 * 만약 그러한 수열이 여러개라면 사전순으로 앞서는 것을 출력한다.
 * 
 * 출력
 * 첫째 줄에 비내림차순으로 만드는 수열 P를 출력한다.
 */
const [N, A] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const solution = (arr) => {
  let sequenceIdx = new Array(+N);
  const nums = arr.split(' ').map(Number);
  const sequence = [...nums].sort((a, b) => a - b);
  nums.forEach((e, i) => {
    let num = sequence.indexOf(e);
    while (sequenceIdx.includes(num)) num += 1;
    sequenceIdx[i] = num;
  });

  return sequenceIdx;
}
const result = solution(A).join(' ');
console.log(result);