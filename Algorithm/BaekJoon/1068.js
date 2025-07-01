/**
 * 문제
 * 트리에서 리프 노드란, 자식의 개수가 0인 노드를 말한다.
 * 트리가 주어졌을 때, 노드 하나를 지울 것이다. 그 때, 남은 트리에서 리프 노드의 개수를 구하는 프로그램을 작성하시오. 노드를 지우면 그 노드와 노드의 모든 자손이 트리에서 제거된다.
 * 예를 들어, 다음과 같은 트리가 있다고 하자.
 * 현재 리프 노드의 개수는 3개이다. (초록색 색칠된 노드) 이때, 1번을 지우면, 다음과 같이 변한다. 검정색으로 색칠된 노드가 트리에서 제거된 노드이다.
 * 이제 리프 노드의 개수는 1개이다.
 * 
 * 출력
 * 첫째 줄에 입력으로 주어진 트리에서 입력으로 주어진 노드를 지웠을 때, 리프 노드의 개수를 출력한다.
 */
let [N, nodes, target] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const graph = Array.from({ length: +N }, () => []);
const exportNode = [];
let result = 0;
const DFS = (n) => {
  const visited = new Set();
  const stack = [n];
  while (stack.length > 0) {
    const node = stack.shift();
    if (graph[node].length === 0 && node !== +target) result++;
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }

    }
  }
}
nodes = nodes.split(' ').map(Number);
nodes.forEach((e, i) => e !== -1 && graph[e].push(i));
graph.forEach(e => {
  e.includes(+target) && e.splice(e.indexOf(+target), 1);
  graph[+target] = [];
});
nodes.forEach((e, i) => e === -1 && exportNode.push(i));
exportNode.forEach(e => DFS(e));
console.log(result);