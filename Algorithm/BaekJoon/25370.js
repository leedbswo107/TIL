/**
 * 문제
 * 1부터 9사이의 정수가 하나씩 적힌 카드가 무수히 많이 주어진다. 이 카드 중에서 n장의 카드를 선택하자. 같은 카드를 중복해서 선택할 수 있다. 선택한 n장의 카드의 정수를 곱한 값을 a라고 하자. a가 될 수 있는 수의 개수를 출력하자.
 * 
 * 출력
 * 첫 번째 줄에 a가 될 수 있는 수의 개수를 출력한다.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
const nums = new Array(9).fill(1).map((e, i) => e + i);
const result = [];
const solution = (line) => {
  if (line.length !== N) {
    for (let i = 0; i < nums.length; i++) {
      const copyLine = [...line];
      copyLine.push(nums[i]);
      solution(copyLine);
    }
  } else {
    result.push(line.reduce((acc, cur) => acc * cur, 1));
    line = [];
  }
}
solution([]);
console.log(new Set(result).size);