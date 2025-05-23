/**
 * 문제
 * 당신은 싸이컴을 향해 절을 하려고 합니다. 하지만, 당신이 싸이컴에 들어오고 싶어서 절을 한 번 할 수도 있고, 싸이컴을 매우 싫어해 절을 두 번 할 수도 있습니다.
 * 당신이 절을 할 횟수가 주어질 때, 그 횟수만큼 절하는 프로그램을 작성하세요. 실제로 프로그램을 이용해 절을 할 수는 없기 때문에, 대신 “SciComLove”를 출력하도록 합니다.
 * 
 * 출력
 * "SciComLove"를 예제와 같이 N번 출력합니다. 단, 따옴표는 출력하지 않습니다.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
const txt = 'SciComLove';
const result = [];
for (let i = 0; i < N; i++) result.push(txt);
console.log(result.join('\n'));