/**
 * 문제
 * 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
 * 
 * 출력
 * 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.
 */
const N = + require('fs').readFileSync('./input.txt', 'utf-8').trim();
const solution = (n) => {
  const star = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) star[i] = ' '.repeat(n - i - 1) + '*';
    else if (i === n - 1) star[i] = '*'.repeat(n * 2 - 1);
    else star[i] = ' '.repeat(n - i - 1) + '*' + ' '.repeat(i * 2 - 1) + '*';
  }
  return star.join('\n');
}
const result = solution(N);
console.log(result);