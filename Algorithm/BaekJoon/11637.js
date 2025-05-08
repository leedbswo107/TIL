/**
 * 문제
 * 9694번 한신이는 당내 최고의원을 선출하기 위한 사전 인기 투표의 결과를 받게 되었다.  하지만 공식 선거를 통해서 당내 최고의원이 되기위해선 과반수의 표를 받아야 하기 때문에 현재의 인기 투표 결과를 보고 본 최고의원 선거를 준비하려 한다. 한신이를 도와 누가 최고 득표자인지, 받은 투표수가 과반수득표인지 아닌지를 빠르게 판단할수 있도록 도와주자.
 * 
 * 출력
 * 각 테스트 케이스는 첫 번째 줄부터 순서대로 출력된다. 최다 득표자가 과반수 득표를 했을경우에는 "majority winner R", 절반 이하의 득표를 하였을 경우엔 "minority winner R"가 되며, 최다 득표자가 없을때(최다 득표자가 1명 초과일 경우)  "no winner"를 출력한다. 이때 R은 최다 득표자의 후보자 번호를 의미하며, 후보자의 번호는 각 케이스에서 1, 2, . . . , n 으로 부여된다.
 */
const [T, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const result = [];
const solution = (candidate) => {
  const max = Math.max(...candidate);
  let dupCount = 0;
  candidate.forEach(e => (e === max) && dupCount++);
  if (dupCount > 1) return 'no winner';
  else if (max > candidate.filter(e => e !== max).reduce((acc, cur) => acc + cur, 0)) {
    return `majority winner ${candidate.indexOf(max) + 1}`;
  }
  return `minority winner ${candidate.indexOf(max) + 1}`;
}
for (let i = 0; i < input.length;) {
  const n = input[i];
  result.push(solution(input.slice(i + 1, i + n + 1)));
  i += (n + 1);
}
console.log(result.join('\n'));