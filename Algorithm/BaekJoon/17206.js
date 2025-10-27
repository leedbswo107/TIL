/**
 * 문제
 * 준석이의 수학선생님은 간단한 수학 문제를 숙제로 내셨다. 그 문제는 어떤 자연수 N이 주어지면 N 이하의 3 또는 7의 양의 배수를 모두 더한 값을 구하는 문제다. 그러나 숫자를 손가락과 발가락으로 밖에 셀 줄 모르는 준석이는 N이 커지자 문제를 풀지 못했다. 준석이를 위해 우리가 정답을 구해주자. 문제는 중복될 수 있다.
 * 
 * 출력
 * 각 문제마다 답을 출력한다. 출력은 개행으로 구분한다.
 */
const [_, N] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
let dp = [25];
const max = Math.max(...N);
for (let i = 11; i <= max; i++) dp[i - 10] = dp[i - 11] + ((i % 3 === 0 || i % 7 === 0) ? i : 0);
const result = N.map(e => dp[e - 10]).join('\n');
console.log(result);