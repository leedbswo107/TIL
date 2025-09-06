/**
 * 문제
 * 은하는 수업 때 1부터 N까지 수의 합과 1부터 N까지 수의 세제곱의 합과 관련된 다음 공식을 배웠습니다.
 * (1 + 2 + ... + N)^2 = 1^3 + 2^3 + ... + N^3 
 * 믿을 수 없었던 은하는 직접 코딩을 해서 검증해 보기로 했습니다. 1부터 N까지 수의 합과 그 수를 제곱한 수, 또 1부터 N까지 수의 세제곱의 합을 차례대로 출력하세요.
 * 
 * 출력
 * 세 줄을 출력하세요.
 * 첫 줄에는 1부터 N까지 수의 합 1+2+ ... +N을 출력하세요.
 * 둘째 줄에는 1부터 N까지 수의 합을 제곱한 수 (1+2+ ... +N)^2을 출력하세요.
 * 셋째 줄에는 1부터 N까지 수의 세제곱의 합 1^3+2^3+ ... +N^3을 출력하세요.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
const nums = new Array(N).fill(1).map((e, i) => e + i);
const sum = nums.reduce((acc, cur) => acc + cur, 0);
const result = [sum, sum ** 2, nums.reduce((acc, cur) => acc + cur ** 3, 0)];
console.log(result.join('\n'));
