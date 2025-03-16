/**
 * 문제
 * 히스토그램은 데이터를 시각적으로 표현한 것이다. 막대로 구성되며 각 막대의 길이는 데이터 양의 
 * 크기를 나타낸다. 일부 데이터가 주어지면 히스토그램을 생성하시오.
 * 
 * 출력
 * 각 테스트 케이스에 대해서 히스토그램의 크기 k와 동일한 수의 '='를 출력한다. 
 * '='사이에 공백은 존재하지 않는다.
 */
const [N, ...problems] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const result = new Array(N);
problems.forEach((e, i) => result[i] = '='.repeat(e));
console.log(result.join('\n'));