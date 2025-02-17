/**
 * 문제
 * You’re going to raise farm animals and you decided to start with bunnies, the 
 * easiest of animals. To your surprise they are breeding like rabbits, so much so 
 * that you’re unable to count them accurately. However, you know that rabbits’ 
 * breeding patterns always follow the Fibonacci sequence. The Fibonacci sequence is 
 * defined as follows:
 * F(0) = 1, F(1) = 1, F(N) = F(N-1)+F(N-2)
 * Given the number of months the rabbits have been breeding, use the Fibonacci 
 * sequence to determine the number of rabbits you should have.
 * 
 * 출력
 * The first line will contain a single integer n that indicates the number of data 
 * sets that follow. Each data set will start with a single integer x denoting the 
 * number of months that have passed since you bought your initial pair of rabbits. 
 * 0≤x≤45
 */
const [T, ...nums] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const maxNum = Math.max(...nums);
const dp = [1];
const solution = (n) => {
  for (let i = 0; i <= n; i++) {
    if (dp[i]) dp[i];
    else if (i <= 2) dp[i] = i;
    else dp[i] = dp[i - 1] + dp[i - 2];;
  }
}
solution(maxNum);
const result = nums.map(e => dp[e]).join('\n');
console.log(result);
