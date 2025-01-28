/**
 * 문제
 * Adam, being a well-organized man, has always been keenly interested in 
 * organizing all his stuff. In particular, he fondly remembers the many hours of 
 * his youth that were spent moving files from his computer onto Compact Discs.
 * There were two very important rules involved in this procedure. First, in order 
 * to ensure that all discs could be labeled clearly, Adam would never place more 
 * than two files on the same disc. Second, he would never divide a single file 
 * over multiple discs. Happily, the discs he was using were always large enough to 
 * make this possible.Thinking back, Adam is now wondering whether he arranged his 
 * files in the best way, or whether he ended up wasting some Compact Discs. He 
 * will provide you with the capacity of the discs he used (all his discs had the 
 * same capacity) as well as a list of the sizes of the files that he stored. 
 * Please help Adam out by determining the minimum number of discs needed to store 
 * all his files—following the two very important rules, of course.
 * 
 * 출력
 * For each test case, output one line containing "Case #x: y", where x is the case 
 * number (starting from 1) and y is the minimum number of discs needed to store 
 * the given files.
 */
const [T, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const solution = (s, x) => {
  let start = 0;
  let end = x.length - 1;
  let disk = 0;
  while (start <= end) {
    const sum = x[start] + x[end];
    if (sum <= s) {
      disk++;
      start++;
      end--;
    } else {
      disk++;
      end--;
    }
  }
  return disk;
}
const result = [];
for (let i = 0; i < +T; i++) {
  const [_, S] = input[i * 2].split(' ').map(Number);
  const X = input[i * 2 + 1].split(' ').map(Number).sort((a, b) => a - b);
  const disk = solution(S, X);
  result[i] = `Case #${i + 1}: ${disk}`;
}
console.log(result.join('\n'));