/**
 * 문제
 * 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.
 * 
 * 출력
 * 첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.
 */
const [[N, M, V], ...nodes] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
let graph = Array.from({ length: N + 1 }, () => []);
nodes.forEach(([u, v]) => {
  graph[u].push(v);
  graph[v].push(u);
});
graph.forEach(e => e.sort((a, b) => a - b));
class Queue {
  constructor() {
    this.items = {},
      this.head = 0,
      this.tail = 0
  }
  enqueue(item) {
    this.items[this.tail++] = item;
  }
  dequeue() {
    if (this.size === 0) return;
    const value = this.items[this.head];
    delete (this.items[this.head++]);
    return value;
  }
  size() {
    return this.tail - this.head;
  }
}
const DFS = (g, v) => {
  const stack = [v];
  const visited = new Set();
  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      for (let i = g[node].length - 1; i >= 0; i--) {
        const neighbor = g[node][i];
        if (!visited.has(neighbor)) stack.push(neighbor);
      }
    }
  }
  return visited;
}
const dfsResult = DFS(graph, V);
const BFS = (g, v) => {
  const queue = new Queue();
  const visited = new Set();
  queue.enqueue(v);
  while (queue.size() > 0) {
    const node = queue.dequeue();
    visited.add(node);
    for (const neighbor of g[node]) {
      !visited.has(neighbor) && queue.enqueue(neighbor);
    }
  }
  return visited;
}
const bfsResult = BFS(graph, V);
const processing = (values) => Array.from(values).join(' ');
const result = [processing(dfsResult), processing(bfsResult)].join('\n');
console.log(result);