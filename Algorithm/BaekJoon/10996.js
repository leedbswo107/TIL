/**
 * 문제
 * 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
 * 
 * 출력
 * 첫째 줄부터 차례대로 별을 출력한다.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
const stars = [];
const num = Math.ceil(N / 2);
for (let i = 0; i < N * 2; i++) {
  stars[i] = i % 2 === 0 ? '*' + ' *'.repeat(num - 1) : ' *'.repeat(N - num);
  (N === 1) && i++;
}
console.log(stars.join('\n'));