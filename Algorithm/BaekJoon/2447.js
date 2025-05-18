/**
 * 문제
 * 재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27, ...)이라고 할 때, 크기 N의 패턴은 N×N 정사각형 모양이다.
 * 크기 3의 패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에 별이 하나씩 있는 패턴이다.
 * ***
 * * *
 * ***
 * N이 3보다 클 경우, 크기 N의 패턴은 공백으로 채워진 가운데의 (N/3)×(N/3) 정사각형을 크기 N/3의 패턴으로 둘러싼 형태이다. 예를 들어 크기 27의 패턴은 예제 출력 1과 같다.
 * 
 * 출력
 * 첫째 줄부터 N번째 줄까지 별을 출력한다.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
const stars = Array.from({ length: N }, () => new Array(N).fill('*'));
const K = Math.floor(Math.log(N) / Math.log(3));
const solution = (k) => {
  for (let y = 3 ** (k - 1); y < N; y += 3 ** k) {
    for (let x = 3 ** (k - 1); x < N; x += 3 ** k) {
      for (let iny = y; iny < y + 3 ** (k - 1); iny++) {
        for (let inx = x; inx < x + 3 ** (k - 1); inx++) {
          stars[iny][inx] = ' ';
        }
      }
    }
  }
}
for (let i = 1; i <= K; i++) solution(i);
const result = stars.map(e => e.join('')).join('\n');
console.log(result);