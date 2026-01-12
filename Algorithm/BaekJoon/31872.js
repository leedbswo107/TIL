/**
 * 문제
 * 혁준이는 오늘 학교에서 N개의 강의를 들어야 한다. 모든 강의는 x축 위의 서로 다른 좌표에 존재하는 강의실에서 진행된다.
 * i번째 강의실은 x = Ai에 있고, 처음에 혁준이는 x = 0에 있다. 혁준이가 x축 위에서 왼쪽 또는 오른쪽으로 1만큼 이동할 때마다 1초의 시간이 걸린다.
 * 혁준이는 초급 마법사라서 최대 K번 순간이동을 할 수 있다. 순간이동을 하면 현재 위치에서 원하는 다른 위치로 즉시 이동하고, 시간은 소요되지 않는다.
 * 혁준이가 x = 0에서 출발하여 모든 강의실을 한 번씩 들르는 데 걸리는 최소 시간을 구해보자.
 * 강의를 듣는 데 걸리는 시간은 없다.
 * 
 * 출력
 * 혁준이가 모든 강의실을 한 번씩 들르는 데 걸리는 최소 시간을 출력한다.
 */
const [[N, K], classrooms] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
classrooms.unshift(0);
classrooms.sort((a,b) => a-b);
const diffArr = new Array(N - 1).fill(0);
for (let i = 1; i <= N; i++) diffArr[i - 1] = classrooms[i] - classrooms[i - 1];
console.log(diffArr.sort((a,b) => b - a).slice(K).reduce((acc,cur) => acc + cur, 0));
