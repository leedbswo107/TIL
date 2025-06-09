/**
 * 문제
 * The Collatz conjecture is a conjecture in mathematics named after Lothar Collatz, who first proposed it in 1937 and is still an open problem in mathematics.  The sequence of numbers involved is referred to as the hailstone sequence or hailstone numbers (because the values are usually subject to multiple descents and ascents like hailstones in a cloud. The conjecture is that no matter what number you start with, you will always eventually reach 1. The property has also been called oneness.
 * The computation (also known as 3n + 1) is stated as follows: 
 * We have an integer number n.
 * If n == 1: stop
 * If n is even: divide the number by 2. Then go to step 1
 * If n is odd: multiply by 3 and add 1. Then go to step 1
 * As the conjecture states, you repeat this steps for any positive integer you will eventually end up with n = 1. The values we find define a sequence from n to 1.
 * For example, if we start with n = 14.
 * 14 is even so the new value will be 7 (14/2)
 * 7 is odd so the new value will be 22 (3*7 + 1)
 * 22 is even so the new value will be 11 (22/2)
 * 11 is odd so the new value will be 34 (3*11 + 1)
 * 34 is even so the new value will be 17
 * If we continue until we have a value of 1, the final sequence will be:
 * 14, 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1
 * Your task is to write a program that, given the starting point n, prints the whole Collatz sequence for this value.
 * 
 * 출력
 * Print the Collatz sequence with the elements separated by a single space. Do not add any space at the beginning or the end of the line.
 */
let n = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
const result = [n];
while (result[result.length - 1] !== 1) {
  n = n % 2 === 0 ? n / 2 : n * 3 + 1;
  result.push(n);
}
console.log(result.join(' '));