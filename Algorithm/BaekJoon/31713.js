/**
 * 문제
 * 윤이, 달구, 포닉스는 UDPC에 참가하는 여러분을 위해 클로버를 만들어 선물하기로 했다. 클로버는 줄기와 잎으로 이루어져 있으며, 하나의 줄기에 3개 또는 4개의 잎이 달려야 한다.
 * 클로버 조립을 맡은 포닉스는 윤이로부터 A개의 클로버 줄기를, 달구로부터 B개의 클로버 잎을 받았다. 포닉스는 클로버를 조립하다 문득 이대로라면 쓰지 못한 줄기나 잎이 남을 수 있다는 사실을 깨닫고 말았다. 포닉스는 재료가 남는 것을 막기 위해 클로버 줄기 또는 잎을 더 가져오려 한다. 줄기와 잎을 남김없이 모두 써서 클로버를 만들기 위해 포닉스가 더 가져와야 하는 클로버 줄기와 잎 개수의 합의 최솟값을 구해주자.
 * 
 * 출력
 * 각 테스트케이스에 대해 포닉스가 더 가져와야 하는 클로버 줄기와 잎 개수의 합의 최솟값을 한 줄에 하나씩 순서대로 출력한다.
 */
const [_, ...input] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const solution = (A, B) => {
  let [a, b] = [A, B];
  let min = Infinity;
  if(a * 4 < b) a = Math.ceil(b/4);
  for (let i = a; i >= 0; i--) {
    const cur = i * 4 + (a - i) * 3 - b;
    if(cur < 0) continue;
    min = min < cur ? min : cur;
  }
  return min + a - A;
}
const result = input.map(e => solution(...e)).join('\n');
console.log(result);
