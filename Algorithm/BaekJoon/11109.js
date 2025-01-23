/**
 * 문제
 * 승혁이는 괴짜 교수이다. 그는 미래에 컴퓨터 프로그램을 만들기 위해서는 컴퓨터 프로그램을 병렬로 만들어야 
 * 한다고 믿는다. 그가 옳다는 것을 확신시키기 위해서 그는 실험을 진행 하길 원했다. 
 * 실험과정은 다음과 같다: 그는 먼저 몇 개의 문제에 대해 이 프로그램이 다음 해 동안 실행 될 횟수를 예상한다. 
 * 그리고 그는 그의 조교에게 병렬버전의 프로그램을 개발하고, 그 프로그램을 개발하는 데 걸리는 시간을 측정하라고 
 * 지시한다. 마지막으로,  그들은 병렬버전과 직렬버전의 실행 시간을 측정한다. 
 * 이 측정된 데이터를 기반으로, 승혁이는 어떤 경우에 병렬화를 통해 전반적인 작업량을 최소화하는지 알고 
 * 싶어한다. 이 일에 대한 작업량은 병렬버전을 개발하는 시간과 그 프로그램이 실행될 때까지 기다리는 시간이다. 
 * 
 * 출력
 * 각각의 테스트케이스에 대해 병렬화를 하는게 좋으면 "parallelize" 를 출력하고, 병렬화를 하는게 좋지 
 * 않으면 "do not parallelize" 를 출력한다. 만약 직렬화와 병렬화를 통한 시간이 같으면 "does not 
 * matter" 를 출력한다.
 */
const [T, ...arr] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = [];
const solution = (e) => {
  const [d, n, s, p] = e.split(' ').map(Number);
  if (d + n * p < n * s) result.push('parallelize');
  else if (d + n * p > n * s) result.push('do not parallelize');
  else result.push('does not matter');
}
arr.forEach(e => solution(e));
console.log(result.join('\n'));
