/**
 * 문제
 * 악독한 코치 주혁은 선수들을 이름 순으로 세우는 것을 좋아한다. 
 * 더 악독한 것은 어떤 순서로 서야할지도 알려주지 않았다! 
 * 선수들의 이름이 주어질 때 어떤 순서로 이루어져있는지 확인해보자.
 * 
 * 출력
 * 이름이 증가하는 순으로 나타나면 INCREASING, 
 * 감소하는 순이면 DECREASING을 한 줄에 출력한다. 
 * 만약 위의 두 경우가 아니라면 NEITHER를 출력한다.
 */
const [_, ...names] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const INCREASE = [...names].sort();
const DECREASE = [...INCREASE].reverse();
const INIT = names.join('');
const solution = (a, b, c) => {
  if (a === b) return 'INCREASING';
  else if (a === c) return 'DECREASING';
  return 'NEITHER';
}
const result = solution(INIT, INCREASE.join(''), DECREASE.join(''));
console.log(result);