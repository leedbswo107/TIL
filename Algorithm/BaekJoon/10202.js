/**
 * 문제
 * Gru and Lucy are trying to break into El Macho’s lair. They arrive at a hallway that they need to walk across, which is likely booby-trapped. The hallway is a single line of squares, each of which is annotated either X or O. Gru believes that the only “safe” squares are the ones that comprise the longest subsequence of X’s, i.e., the longest contiguous set of squares that are all annotated X.
 * Your goal is to help Gru find the safe squares to jump on.
 * 
 * 출력
 * 정확한 출력 형식은 제출에서 언어를 Java로 설정하면 확인할 수 있다.
 */
const [_, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = input.map(e => {
  const [len, ...shapes] = e.split(' ');
  const arr = shapes.map(s => s === 'X' ? 1 : 0);
  const maxLength = new Array(+len + 1).fill(0);
  for (let i = 1; i < maxLength.length; i++) {
    if (arr[i - 1] === 0) maxLength[i] = 0;
    else maxLength[i] = maxLength[i - 1] + arr[i - 1];
  }
  return `The longest contiguous subsequence of X's is of length ${Math.max(...maxLength)}`;
});
console.log(result.join('\n'));