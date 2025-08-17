/**
 * 문제
 * Little Dmitry and little Petr want to arrange a contest. Their little friends submitted several task proposals and now Dmitry and Petr want to select some of them for the contest. As they are just little boys, they cannot estimate quality of tasks, but they know for sure that in good contest title of the first problem starts with A, the title of the second one — with B, and so on.
 * Given titles of the proposed tasks, help little brothers to determine the maximal number of problems in a good contest they can arrange.
 * 
 * 출력
 * Output a single number — the maximal number of problems in a good contest. In case there is no good contest that may be arranged, output 0.
 */
const [_, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e[0].charCodeAt());
input.sort((a, b) => a - b);
let result = 0;
let start = 65;
for (let i = 0; i < input.length; i++) {
  if (input[i] === start) {
    result++;
    start++;
  }
}
console.log(result);