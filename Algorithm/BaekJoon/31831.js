/**
 * 문제
 * 상원이는 과민성 대장 증후군을 앓고 있다. 과민성 대장 증후군의 원인은 스트레스!
 * 상원이의 N일 동안의 스트레스 변화량 A1, ... ,AN이 주어진다. Ai 0 이면 i번째 날에 Ai 만큼 스트레스가 쌓이고, Ai<0 이면 i번째 날에 -Ai 만큼 스트레스가 해소된다. 
 * 단, 변화를 관찰하기 시작한 시점의 스트레스 양은 0이며, 누적된 스트레스 양보다 해소하는 스트레스 양이 더 많을 경우 스트레스는 0이 될 때까지만 감소한다.
 * 상원이는 스트레스가 M 이상 쌓인 날에 복통을 겪게 될 때, 상원이가 며칠 동안 복통에 시달리게 되는지 알아보자.
 * 
 * 출력
 * 상원이가 복통을 겪게 되는 일수를 출력한다.
 */
const [[N, M], A] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(BigInt));
let stress = 0n;
let result = 0;
A.forEach(e => ((stress + e) >= 0n ? stress += e : stress = 0n) >= M && result++);
console.log(result);

// const stress = new Array(N).fill(0n);
// let total = 0n;
// A.forEach((e, i) => {
//   if (e >= 0n) stress[i] = (total += e)
//   else stress[i] = (total < -e) ? total = 0n : (total += e);
// });
// const result = stress.filter(e => e >= M).length;
// console.log(result);