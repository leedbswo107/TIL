/**
 * 문제
 * 오늘은 많은 학생이 기다리던 브실브실 학교의 축제 행사 날이다.
 * 브실이는 학교 축제 담당자로서 축제의 분위기가 잘 살아날 수 있도록 무대 앞에 N행 M열로 의자를 하나씩 배치해 두고 각 의자에 응원단 사람을 1명씩 뒀다.
 * 브실이는 응원단의 사기를 확인하기 위해 연속된 A개 열 중 가장 박수 횟수가 많은 곳을 찾고자 한다. 즉, 1열부터 A열, 2열부터 A+1열, 3열부터 A+2열, \cdots, M-A+1열부터 M열에 대해 각 구간에 속하는 응원단 사람들에게 박수를 치게 해서 그중 가장 많이 박수를 친 구간의 박수 횟수를 찾고자 한다.
 * 하지만 브실이는 지금 학교 축제 담당자로서 할 일이 많아 이 일은 우리에게 맡기고 다른 일을 하러 갔다.
 * 각 응원단 사람이 박수를 치는 횟수가 주어졌을 때 가장 많이 박수를 친 구간의 박수 횟수가 몇 회인지 알아보자.
 * 
 * 출력
 * 가장 많이 박수를 친 구간의 박수 횟수를 출력한다.
 */
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + N).map(e => e.split(' ').map(Number));
const A = +input[N + 1];
const lines = new Array(M).fill(0).map((e,i) => arr.reduce((acc, cur) => acc + cur[i], 0));
const prefixSum = new Array(M + 1).fill(0);
const tmp = new Array(M + 1 - A).fill(0);
for (let i = 1; i <= M; i++) prefixSum[i] = prefixSum[i - 1] + lines[i - 1];
for (let i = 0; i < M + 1 - A; i++) tmp[i] = prefixSum[i + A] - prefixSum[i];
const result = Math.max(...tmp);
console.log(result);
