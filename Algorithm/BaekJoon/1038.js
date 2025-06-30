/**
 * 문제
 * 음이 아닌 정수 X의 자릿수가 가장 큰 자릿수부터 작은 자릿수까지 감소한다면, 그 수를 감소하는 수라고 한다. 예를 들어, 321과 950은 감소하는 수지만, 322와 958은 아니다. N번째 감소하는 수를 출력하는 프로그램을 작성하시오. 0은 0번째 감소하는 수이고, 1은 1번째 감소하는 수이다. 만약 N번째 감소하는 수가 없다면 -1을 출력한다.
 * 
 * 출력
 * 첫째 줄에 N번째 감소하는 수를 출력한다.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
const nums = new Array(10).fill(0).map((e, i) => e + i);
let num = 1;
const result = [];
const solution = (arr, line, n) => {
  if (result.length <= N) {
    if (line.length !== n) {
      const copyArr = [...arr];
      for (let i = 0; i < copyArr.length; i++) {
        const copyLine = [...line];
        if (copyLine[copyLine.length - 1] > copyArr[i] || copyLine.length === 0) {
          copyLine.push(copyArr[i]);
          solution(copyArr.slice(0, i), copyLine, n);
        }
      }
    } else {
      result.push(+line.join(''));
      line = [];
    }
  }
}
while (result.length < N + 1) {
  if (num > 10) {
    result.push(-1);
    break;
  }
  solution(nums, [], num);
  num++;
}
console.log(result.pop());