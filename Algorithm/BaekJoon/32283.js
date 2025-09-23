/**
 * 문제
 * 한별이는 길이 N의 이진수를 모두 모은 뒤 특별한 방식으로 정렬하여 사용하려 한다.
 * 정렬 기준은 다음과 같다.
 * 이진수 내의 1의 개수로 오름차순 정렬한다.
 * 1의 개수가 같다면 이진수를 뒤집었을 때의 오름차순으로 정렬한다.
 * 예를 들어, N이 3일 때 이진수는 다음 순서로 정렬된다.
 * 000
 * 100
 * 010
 * 001
 * 110
 * 101
 * 011
 * 111
 * 어느날 친구 선린이가 찾아와 길이가 N인 이진수 하나를 주며 몇 번째 위치에 있는지 알려달라고 했다. 하지만 한별이는 다른 일이 많아 아직 이진수들을 정렬하지 못했다. 한별이를 도와주자!
 * 
 * 출력
 * 주어진 이진수와 길이가 같은 모든 이진수를 정렬하였을 때, 주어진 이진수는 몇 번째 위치에 있는지 출력한다.
 * 위치는 0번부터 시작한다.
 */
const [N, t] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
let list = [];
const operator = (arr) => Number([...arr].reverse().join(''));
for (let i = 0; i < 2 ** N; i++) {
  const tmp = i.toString(2);
  const len = N - tmp.length;
  list[i] = ('0'.repeat(len) + tmp).split('').map(Number);
}
list.sort((a, b) => {
  const aL = a.filter(e => e === 1).length;
  const bL = b.filter(e => e === 1).length;
  if (aL === bL) {
    const tmpA = operator(a);
    const tmpB = operator(b);
    return tmpA - tmpB;
  }
  return aL - bL;
})
const result = list.map(e => e.join('')).indexOf(t);
console.log(result);