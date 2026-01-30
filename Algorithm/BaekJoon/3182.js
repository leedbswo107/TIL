/**
 * 문제
 * H-ALGO 회원인 한동이는 공부하는것을 좋아하지 않는다. 하지만 약삭빠르게도 한동이는 공부도 하지 않으면서 어려운 시험을 통과하고 싶어한다.
 * 그러던 와중 어느 날, 한동이의 동기가 한동이에게 선배들 중 누군가가 시험의 답을 알고있다는 꿀정보를 알려주었다. 하지만 안타깝게도 그 정보는 사실이 아니어서 선배들조차도 정답은 알지 못하고 다른 누군가가 알고 있을거 같다는 정보만 알고 있는 것이었다.
 * 한동이는 택민이에게 시험 정답을 물어보았다. 택민이는 답을 모른다고 했지만 택민이는 상준이가 답을 알고 있을 것 같다고 하였다. 그 후, 한동이는 상준이에게 물어보고 그리고...
 * 어느 순간 한동이는 아무리 이걸 해도 자신에게 도움이 되지 않는것을 깨닫고 굉장히 슬퍼졌다. 하지만 그는 이걸 함으로써 많은 선배들과 인맥을 쌓을 수 있고, 이게 언젠가 큰 도움이 될 것이라는 것을 깨달았다!
 * 당신의 목표는 한동이가 한 사람에게만 시험문제를 물어볼 수 있다고 할 때, 최대한 많은 선배들을 만날 수 있게 하기 위해서 누구에게 시험문제를 물어 볼 것인지를 알려주는 것이다.
 * 
 * 출력
 * 첫째 줄에 한동이가 물어봐야 할 선배의 번호를 출력한다. 하나 이상의 정답이 있다면 번호가 작은 선배를 출력한다. 
 */
const [T, ...seniors] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(Number);
let graph = {};
let connectionGraph = {};
let result;
for (let i = 1; i <= T; i++) connectionGraph[i] = [];
seniors.forEach((e,i) => graph[i + 1] = e);
const init = (parentNode, currentNode) => {
  if(connectionGraph[parentNode].includes(currentNode) || parentNode === currentNode) return connectionGraph[parentNode].length;
  connectionGraph[parentNode].push(currentNode);
  return init(parentNode, graph[currentNode]);
}
for (let i = 1; i <= T; i++) {
  const cur = init(i, graph[i]);
  if(!result) result = [i, cur];
  result = result[1] >= cur ? result : [i, cur];
}
console.log(result[0]);
