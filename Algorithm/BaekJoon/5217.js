/**
 * 문제
 * 1보다 크거나 같고 12보다 작거나 같은 자연수 n이 주어졌을 때, 합이 n이 되는 두 자연수의 
 * 쌍을 찾는 프로그램을 작성하시오.
 * 예를 들어, 5가 주어진 경우 가능한 쌍은 1,4와 2,3이 있다. 두 수는 항상 달라야 한다. 즉, 
 * 3,3은 올바른 쌍이 아니다. 또, 첫 번째 수가 두 번째 수보다 작아야 한다.
 * 출력하는 쌍은 항상 사전순으로 출력해야 한다. 즉, 각 쌍의 작은 수로 비교를 해야 한다. 예를 
 * 들어 1,5는 2,4보다 사전순으로 앞선다.
 * 
 * 출력
 * 각 테스트 케이스마다 n을 만드는 쌍을 사전순으로 출력한다. 
 * n을 만드는 쌍이 없는 경우에는 아무것도 출력하지 않는다.
 * 예제 출력 형식을 참고해 출력한다.
 */
const [T, ...nums] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const result = new Array(T);
const solution = (n) => {
  const N = new Array(n).fill(1).map((e, i) => e + i);
  let [start, end] = [0, n - 1];
  const result = [];
  while (start < end) {
    const sum = N[start] + N[end];
    if (sum === n) {
      result.push(`${N[start]} ${N[end]}`);
      start++;
      end--;
    } else if (sum < n) {
      start++;
    } else {
      end--;
    }
  }
  return result.join(', ');
}
nums.forEach((e, i) => result[i] = `Pairs for ${e}: ${solution(e)}`);
console.log(result.join('\n'));