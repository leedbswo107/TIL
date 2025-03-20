/**
 * 문제
 * M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.
 * 
 * 출력
 * 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.
 */
const [M, N] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
const nums = new Array(N + 1).fill(0).map((e, i) => i > 1 ? e + i : 0);
const result = [];

// 소수 판별
for (let i = 2; i <= N; i++) {
  if (nums[i] === 0) continue;
  for (let j = 2 * i; j <= N; j += i) nums[j] = 0;
}

// 결과 처리
for (let i = M; i <= N; i++) nums[i] !== 0 && result.push(nums[i]);
console.log(result.join('\n'));