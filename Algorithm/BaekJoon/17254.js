/**
 * 문제
 * 키보드에서 어떤 키를 누르면 어떤 키가 눌러졌는지 컴퓨터에 전송되고, 컴퓨터에서는 키가 눌러진 순서대로 화면에 출력된다.
 * 승지는 팀 과제로 보고서 100장을 작성해야 하는 데, 마감 시간이 얼마 남지 않아서 팀원에게 도움을 요청하였다. 하지만 컴퓨터가 하나뿐이라 보고서를 동시에 작성할 수 없었다.
 * 주변을 둘러보니 쓰지 않는 키보드 여러 개가 바닥에서 굴러다니는 것을 보았다. 급한 대로 컴퓨터에 키보드 여러 개를 연결해서 타자 속도를 올리기로 했다.
 * 문제는 원하는 문장을 작성하기 위해서는 서로 호흡을 잘 맞춰야 하는데, 키보드의 동작 원리를 아직 알지 못했던 승지는 어떤 결과가 출력될지 알 수 없었다.
 * 승지는 팀원 N명에게 N개의 키보드를 나눠주고 전부 컴퓨터에 연결했다. 각자 어느 시간에 어떤 키를 누를지를 미리 정한다면, 어떤 결과가 화면에 출력될 것인지 알아내고자 한다.
 * 키보드의 번호는 컴퓨터에 연결된 순서대로 1번 키보드, 2번 키보드, .... N번 키보드이다. 동시에 여러 키보드에서 키를 누른다면 번호가 작은 키보드에서 누른 키가 먼저 출력되지만, 하나의 키보드에서 여러 개의 키를 동시에 누를 수는 없다. 즉, 하나의 키보드에서 각 키를 누른 시간은 모두 다르다.
 * 
 * 출력
 * 모든 입력이 끝난 후에 화면에 출력될 결과를 출력한다.
 */
const [[N, M], ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(el => el.split(' ').map(element => Number.isNaN(+element) ? element : +element));
const result = input.sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]).map(e => e[2]).join('');
console.log(result);

// while (true) {
//   let status = true;
//   for (let i = 1; i < M; i++) {
//     if (input[i][1] < input[i - 1][1]) {
//       [input[i], input[i - 1]] = [input[i - 1], input[i]];
//       status = false;
//       break;
//     } else if ((input[i][1] === input[i - 1][1]) && (input[i][0] < input[i - 1][0])) {
//       [input[i], input[i - 1]] = [input[i - 1], input[i]];
//       status = false;
//       break;
//     }
//   }
//   if (status) break;
// }
// const result = input.map(e => e[2]).join('');
// console.log(result);