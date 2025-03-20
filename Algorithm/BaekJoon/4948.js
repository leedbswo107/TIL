/**
 * 문제
 * 베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.
 * 이 명제는 조제프 베르트랑이 1845년에 추측했고, 파프누티 체비쇼프가 1850년에 증명했다.
 * 예를 들어, 10보다 크고, 20보다 작거나 같은 소수는 4개가 있다. (11, 13, 17, 19) 또, 14보다 크고, 28보다 작거나 같은 소수는 3개가 있다. (17,19, 23)
 * 자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오. 
 * 
 * 출력
 * 각 테스트 케이스에 대해서, n보다 크고, 2n보다 작거나 같은 소수의 개수를 출력한다.
 */
const N = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const max = Math.max(...N) * 2;
let nums = new Array(max).fill(0).map((e, i) => i > 1 ? e + i : 0);
const result = [];
for (let i = 0; i <= nums.length; i++) {
  if (nums[i] === 0) continue;
  for (let j = i * 2; j < nums.length; j += i) nums[j] = 0;
}
nums = nums.filter(e => e !== 0);
N.forEach(e => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > e * 2) break;
    else if (nums[i] > e) count++;
  }
  result.push(count);
});
result.pop();
console.log(result.join('\n'));