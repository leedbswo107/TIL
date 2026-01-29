/**
 * 문제
 * The cows are having their first election after overthrowing the tyrannical Farmer John, and Bessie is one of N cows (1 <= N <= 50,000) running for President. Before the election actually happens, however, Bessie wants to determine who has the best chance of winning.
 * The election consists of two rounds. In the first round, the K cows (1 <= K <= N) cows with the most votes advance to the second round. In the second round, the cow with the most votes becomes President.
 * Given that cow i expects to get A_i votes (1 <= A_i <= 1,000,000,000) in the first round and B_i votes (1 <= B_i <= 1,000,000,000) in the second round (if he or she makes it), determine which cow is expected to win the election. Happily for you, no vote count appears twice in the A_i list; likewise, no vote count appears twice in the B_i list.
 * 
 * 출력
 * Line 1: The index of the cow that is expected to win the election.
 */
const [[N, K], ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(v => v.split(' ').map(Number));
const cows = [];
input.forEach((e,i) => cows[i] = [i + 1, e]);
cows.sort((a,b) => b[1][0] - a[1][0]);
console.log(cows.slice(0, K).sort((a,b) => b[1][1] - a[1][1])[0][0]);
