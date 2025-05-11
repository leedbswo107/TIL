/**
 * 문제
 * 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
 * 
 * 출력
 * 첫째 줄부터 차례대로 별을 출력한다.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
const result = new Array(N);
for (let i = 0; i < N; i++) result[i] = i % 2 === 0 ? '*' + ' *'.repeat(N - 1) : ' *'.repeat(N);
console.log(result.join('\n'));