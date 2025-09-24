/**
 * 문제
 * (String permutation) Write a recursive method to print all the permutations of a string. The user need to enter the string which consists of a set of characters.
 * 
 * 출력
 * For each test case, output a line in the format “Case # x:” where x is the case number (starting with 1), follow by the set of string permutation.
 */
const [[T], ...values] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(''));
const result = new Array(+T);
const solution = (v) => {
  const N = v.length;
  const list = [];
  const bt = (arr, line) => {
    if (line.length !== N) {
      const len = arr.length;
      for (let i = 0; i < len; i++) {
        const copyArr = [...arr];
        const copyLine = [...line];
        const tmp = copyArr.splice(i, 1);
        copyLine.push(...tmp);
        bt(copyArr, copyLine);
      }
    } else {
      list.push(line.join(''));
      line = [];
    }
  }
  bt(v, []);
  return list;
}
values.forEach((e, i) => result[i] = `Case # ${i + 1}:\n${solution(e).join('\n')}`);
console.log(result.join('\n'));