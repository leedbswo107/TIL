/**
 * 문제
 * 도현이네 반 N명의 친구 관계가 입력으로 주어진다. 이때, 각 사람의 친구의 수를 출력하는 프로그램을 작성하시오.
 * 각 사람은 1번부터 N번까지 번호가 매겨져 있다. A와 B가 친구면, B와 A도 친구이다. 자기 자신과 친구인 경우, 즉 A와 B가 같은 경우는 없다.
 * 
 * 출력
 * 첫째 줄부터 N번째 줄에 걸쳐서 각 학생의 친구의 수를 1번 학생부터 출력한다.
 */
const [[N, M], ...peoples] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
peoples.forEach(([prev, next]) => {
  graph[prev].push(next);
  graph[next].push(prev);
})
const result = graph.slice(1).map(e => e.length).join('\n');
console.log(result);