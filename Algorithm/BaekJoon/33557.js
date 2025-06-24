/**
 * 문제
 *  A * B를 세로식 곱셈에서 받아올림을 하지 않고 바로 결과에 적는 잘못된 곱셈 결과가 일반 곱셈 결과와 같은지 판별해 보자. 만약 두 수의 자릿수가 달라 잘못된 곱셈에서 자릿수가 짧은 수의 자리가 비어 있는 경우, 자릿수가 긴 수의 숫자만을 결과에 기록한다.
 * 
 * 출력
 * 각 테스트 케이스마다 한 줄에 잘못된 곱셈 결과가 일반 곱셈 결과와 같다면 1을, 같지 않다면 0을 출력한다.
 */
const [T, ...nums] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = new Array(+T);
const calc = (A, B) => {
  const mix = A * B;
  const arrA = A.toString().split('').map(BigInt);
  const arrB = B.toString().split('').map(BigInt);
  while (arrA.length !== arrB.length) arrB.unshift(1n);
  const arrMix = BigInt(arrA.map((e, i) => e * arrB[i]).join(''));
  return arrMix === mix;
}
nums.forEach((e, i) => {
  const [A, B] = e.split(' ').map(BigInt);
  result[i] = (A >= B ? calc(A, B) : calc(B, A)) ? 1 : 0;
});
console.log(result.join('\n'));