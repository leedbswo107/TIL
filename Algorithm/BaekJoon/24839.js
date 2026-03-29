/**
 * 문제
 * Barbara is a speed typer. In order to check her typing speed, she performs a speed test. She is given a string I that she is supposed to type.
 * While Barbara is typing, she may make some mistakes, such as pressing the wrong key. As her typing speed is important to her, she does not want to spend additional time correcting the mistakes, so she continues to type with the errors until she finishes the speed test. After she finishes the speed test, she produces a P.
 * Now she wonders how many extra letters she needs to delete in order to get I from P. It is possible that Barbara made a mistake and P cannot be converted back to I just by deleting some letters. In particular, it is possible that Barbara missed some letters.
 * Help Barbara find out how many extra letters she needs to remove in order to obtain I or if I cannot be obtained from P by removing letters then output IMPOSSIBLE.
 * 
 * 출력
 * For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the number of extra letters that need to be removed in order to obtain I. If it is not possible to obtain I then output IMPOSSIBLE as y.
 */
const [N, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const solution = (I, P, K = 0) => {
  if (I === P) return K;
  if (I.length >= P.length) return 'IMPOSSIBLE';
  let [i, p] = [0, 0];
  for (; i < I.length;) {
    if (p > P.length) return (K = 'IMPOSSIBLE');
    I[i] === P[p] ? i++ : K++;
    p++;
  }
  return p !== P.length ? (K + (P.length - p)) : K;
}
let result = new Array(+N);
for (let i = 0; i < +N; i++) result[i] = `Case #${i + 1}: ${solution(input[i * 2], input[i * 2 + 1])}`;
console.log(result.join('\n'));