/**
 * 문제
 * 오세준은 어떤 자연수의 소인수중 최댓값이 K보다 크지 않을때 그 수를 K-세준수라고 부른다.
 * N보다 작거나 같은 자연수 중에 K-세준수가 총 몇 개인지 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 첫째 줄에 N보다 작거나 같은 K-세준수가 몇 개인지 출력한다.
 */
const [N, K] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const primeFactor = [];
let primeNum = new Array(N + 1).fill(0).map((e, i) => e + i);
for (let i = 2; i <= N; i++) {
  for (let j = 2; j <= Math.floor(N / i); j++) primeNum[i * j] = 0;
}
primeNum = Array.from(new Set(primeNum)).reverse();
for (let i = N; i >= 1; i--) {
  for (let j = 0; j < primeNum.length; j++) {
    if (i % primeNum[j] === 0) {
      primeNum[j] <= K && primeFactor.push(primeNum[j]);
      break;
    }
  }
}
console.log(primeFactor.length);