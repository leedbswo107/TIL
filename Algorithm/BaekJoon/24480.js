/**
 * 문제
 * 오늘도 서준이는 깊이 우선 탐색(DFS) 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자.
 * N개의 정점과 M개의 간선으로 구성된 무방향 그래프(undirected graph)가 주어진다. 정점 번호는 1번부터 N번이고 모든 간선의 가중치는 1이다. 정점 R에서 시작하여 깊이 우선 탐색으로 노드를 방문할 경우 노드의 방문 순서를 출력하자.
 * 깊이 우선 탐색 의사 코드는 다음과 같다. 인접 정점은 내림차순으로 방문한다.
 * dfs(V, E, R) {  # V : 정점 집합, E : 간선 집합, R : 시작 정점
 *     visited[R] <- YES;  # 시작 정점 R을 방문 했다고 표시한다.
 *     for each x ∈ E(R)  # E(R) : 정점 R의 인접 정점 집합.(정점 번호를 내림차순으로 방문한다)
 *         if (visited[x] = NO) then dfs(V, E, x);
 * }
 * 
 * 출력
 * 첫째 줄부터 N개의 줄에 정수를 한 개씩 출력한다. i번째 줄에는 정점 i의 방문 순서를 출력한다. 시작 정점의 방문 순서는 1이다. 시작 정점에서 방문할 수 없는 경우 0을 출력한다.
 */
const [[N, M, R], ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
let order = 1;
let graph = Array.from({ length: N + 1 }, () => []);
input.forEach(([p, n]) => graph[p].push(n) && graph[n].push(p));
graph.forEach(e => e.sort((a, b) => b - a));
const visited = new Array(N + 1).fill(0);
const DFS = (node) => {
  visited[node] = order++;
  graph[node].forEach(e => (!visited[e]) && DFS(e));
}
DFS(R);
console.log(visited.slice(1).join('\n'));