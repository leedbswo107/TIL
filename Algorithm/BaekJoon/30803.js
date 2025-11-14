/**
 * 문제
 * 물탱크와 연결된 N개의 수도꼭지가 있습니다. 이 수도꼭지는 나사와 토글 버튼으로 이루어져 있습니다. 나사를 돌려서 나오는 물의 양을 조절할 수 있고, 토글 버튼을 눌러서 수도꼭지를 열거나 잠글 수 있습니다. 물탱크에 담기는 물의 양은 열려있는 수도꼭지들에서 내보내는 물의 양의 합입니다.
 * 구체적으로는 수도꼭지에 다음 조작을 할 수 있습니다.
 * 1. 나사를 돌려서 수도꼭지가 열려 있을 때 1분에 x리터의 물을 내보내도록 합니다.
 * 2. 토글 버튼을 누릅니다. 수도꼭지가 열려 있으면 잠그고, 잠겨있으면 엽니다.
 * 가장 처음에 모든 수도꼭지는 열려있으며, i번째 수도꼭지는 1분에 Ai리터의 물을 내보내고 있습니다. 이 수도꼭지들을 Q번 조작할 것입니다. 가장 처음에, 그리고 매 조작 이후에 1분 동안 탱크에 담기는 물의 양을 계산하세요.
 * 
 * 출력
 * 총 (Q+1)개의 줄을 출력합니다. 첫 줄에는 아무 조작도 하지 않았을 때 1분 동안 탱크에 담기는 물의 양을 리터 단위로 출력하세요. 다음 Q개의 줄의 i번째 줄에는, i번째 조작까지 끝낸 이후 1분 동안 탱크에 담기는 물의 양을 리터 단위로 출력하세요.
 */
let [[N], A, [M], ...Q] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
A = A.map(BigInt);
let offset = A.reduce((acc, cur) => acc + cur, 0n);
let isOn = new Array(N).fill(true);
const result = [offset, ...Q.map(([opt, i, x]) => {
  if (opt === 1) {
    if (isOn[i - 1]) offset = offset - A[i - 1] + BigInt(x);
    A[i - 1] = BigInt(x);
  } else if (opt === 2) {
    isOn[i - 1] = !isOn[i - 1];
    isOn[i - 1] ? offset += A[i - 1] : offset -= A[i - 1];
  }
  return offset;
})].join('\n');
console.log(result);