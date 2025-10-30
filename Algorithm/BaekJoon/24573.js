/**
 * 문제
 * Finn loves Fours and Fives. In fact, he loves them so much that he wants to know the number of ways a number can be formed by using a sum of fours and fives, where the order of the fours and fives does not matter. If Finn wants to form the number 14, there is one way to do this which is 14 = 4 + 5 + 5. As another example, if Finn wants to form the number 20, this can be done two ways, which are 20 = 4 + 4 + 4 + 4 + 4 and 20 = 5 + 5 + 5 + 5. As a final example, Finn can form the number 40 in three ways: 40 = 4+4+4+4+4+4+4+4+4+4, 40 = 4 + 4 + 4 + 4 + 4 + 5 + 5 + 5 + 5, and 40 = 5 + 5 + 5 + 5 + 5 + 5 + 5 + 5.
 * Your task is to help Finn determine the number of ways that a number can be written as a sum of fours and fives.
 * 
 * 출력
 * Output the number of unordered sums of fours and fives which form the number N. Output 0 if there are no such sums of fours and fives.
 */
let N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
let result = 0;
const len = Math.ceil(N / 5);
for (let i = 0; i <= len; i++) {
  const cur = N - i * 5;
  if (cur < 0) break;
  if (cur % 4 === 0) result++;
}
console.log(result);