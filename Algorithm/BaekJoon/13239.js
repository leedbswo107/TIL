/**
 * 문제
 * 시간 제한	메모리 제한	제출	정답	맞힌 사람	정답 비율
 * When we have a set of n elements from which we take k elements, we have a combination.
 * For example, if we have a set with the numbers from 1 to 5, we have the following different combinations:
 * 1-combinations (1 element from the set each time): (1), (2), (3), (4), (5)
 * 2-combinations (2 elements from the set each time): (1, 2), (1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5), (3, 4), (3, 5), (4, 5).
 * 3-combinations (3 elements from the set each time): (1, 2, 3), (1, 2, 4), (1, 2, 5), (1, 3, 4), (1, 3, 5), (1, 4, 5), (2, 3, 4), (2, 3, 5), (2, 4, 5), (3, 4, 5), 
 * 4-combinations (4 elements from the set each time): (1, 2, 3, 4), (1, 3, 4, 5), (1, 2, 4, 5), (1, 2, 3, 5), (2, 3, 4, 5)
 * 5-combination (all the elements at once): (1, 2, 3, 4, 5)
 * 0-combination (no element): ()
 * The following formula will give us the number of k-combinations of n elements:
 *  
 * \[{n \choose k} = \frac{n (n-1)\cdots(n-k+1)}{k(k-1)\cdots 1}\] 
 * As we saw in the list before
 * (5 over 0) = 1
 * (5 over 1) = 5
 * (5 over 2) = 10
 * (5 over 3) = 10
 * (5 over 4) = 5
 * (5 over 5) = 1 
 * Your task is to compute several (n over k) operations.
 * 
 * 출력
 * For each (n k) pair. Compute the number of k-combinations of a set of size n. Compute the results modulo 1000000007 (10^9 + 7).
 */
const [[N], ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const MAX = Math.max(...input.map(e => e[0]));
const dp = Array.from({length: MAX + 1}, (_, i) => new Array(i + 1));
for (let i = 0; i <= MAX; i++) {
  for (let j = 0; j <= i; j++) dp[i][j] = (j === 0 || i === j) ? 1 : (dp[i - 1][j] + dp[i - 1][j - 1]) % 1000000007;
}
const result = input.map(([a,b]) => dp[a][b]).join('\n');
console.log(result);
