/**
 * 문제
 * 두 정수 a와 b 최소공배수는 두 수의 공통된 배수 중 가장 작은 수이고, 최대공약수는 두 수의 공통된 약수중 가장 큰 수이다.
 * a와 b가 주어졌을 때, 최소공배수와 최대공약수를 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 각 테스트 케이스에 대해 최소공배수와 최대공약수를 차례대로 출력한다.
 */
const [T, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = new Array(+T);
const GCD = (a, b) => {
  let [A, B] = a >= b ? [a, b] : [b, a];
  while (B !== 0) [A, B] = [B, A % B];
  return A;
}
input.forEach((e, i) => {
  const [A, B] = e.split(' ').map(Number);
  const gcd = GCD(A, B);
  result[i] = `${A * B / gcd} ${gcd}`;
});
console.log(result.join('\n'));