/**
 * 문제
 * The look and say sequence is defined as follows. Start with any string of digits as the first element in the sequence. Each subsequent element is defined from the previous one by "verbally" describing the previous element. For example, the string 122344111 can be described as "one 1, two 2's, one 3, two 4's, three 1's". Therefore, the element that comes after 122344111 in the sequence is 1122132431. Similarly, the string 101 comes after 1111111111. Notice that it is generally not possible to uniquely identify the previous element of a particular element. For example, a string of 112213243 1's also yields 1122132431 as the next element.
 * 
 * 출력
 * For each test case, print the string that follows the given string.
 */
const [[T], ...nums] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split('').map(Number));
const result = new Array(T);
const solution = (arr) => {
  let result = [];
  let count = 1;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i - 1] === arr[i]) count++;
    else if (arr[i - 1] !== arr[i] || i === arr.length) {
      result.push(count);
      result.push(arr[i - 1]);
      count = 1;
    }
  }
  return result.join('');
}
nums.forEach((e, i) => result[i] = solution(e));
console.log(result.join('\n'));