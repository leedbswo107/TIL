/**
 * 문제
 *  N개의 서로 다른 양의 정수로 구성된 수열 A가 있다. 이 수열을 오름차순으로 정렬한 수열을 B라 하자. 그리고 B에 의해 결정되는 길이 N의 수열 C를 다음과 같이 정의한다.
 * ci => b{bi} if 1<= bi <= N
 *       0   otherwise
 * 여기서 1 <= i <= N인 모든 i에 대해, bi는 B의 i번째 원소를, ci는 C의 i번째 원소를 나타낸다.
 * 이때, B = C가 되도록 하는 수열 A를 프랙탈 수열이라고 하자. N과 M이 주어졌을 때, 길이가 N인 서로 다른 프랙탈 수열의 개수를 M으로 나눈 나머지를 구해보자.
 * 
 * 출력
 * 길이가 N인 서로 다른 프랙탈 수열의 개수를 M으로 나눈 나머지를 출력한다.
 */
const [N, M] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(BigInt);
const factorial = (n) => n === 1n ? 1n : (n * factorial(n - 1n));
console.log((factorial(N) % M).toString());