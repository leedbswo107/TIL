/**
 * 문제
 * 혜민이네 반은 총 N명의 학생으로 이루어져 있으며 학생마다 번호가 다르게 배정되어 있다. 이번 시험은 국어, 영어, 수학, 과학 총 4과목으로 진행되며, 학생들이 공부를 열심히 할 수 있게 과목별 1등에게 상품을 주기로 했다. 수상은 국어, 영어, 수학, 과학 순서로 하며 최대한 많은 학생에게 상품을 주고 싶기 때문에 학생마다 상품은 한 번만 받을 수 있다. 예를 들어 국어 과목에서 1등 한 사람이 수학 과목에서 또 1등을 한다면 국어 과목에서 상품을 받았기 때문에 이 학생은 다른 과목에서 상품을 더 받을 수 없다. 따라서 수학 과목은 상품을 받지 않은 학생 중에 점수가 가장 높은 학생이 상품을 받는다. 단, 동점이 있으면 번호가 빠른 사람이 상품을 받는다. 과목별 상 받을 사람의 번호를 출력하시오.
 * 
 * 출력
 * 국어, 영어, 수학, 과학 순서대로 상품을 받는 학생의 번호를 공백으로 구분하여 출력한다.
 */

// 시간 복잡도 개선
const students = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').slice(1).map(e => e.split(' ').map(Number));
const result = [];
const winner = new Set();
students.sort((a, b) => a[0] - b[0]);
for (let i = 1; i <= 4; i++) {
  let max = -1;
  let maxSt = -1;
  for (let j = 0; j < students.length; j++) {
    const num = students[j][0];
    if (winner.has(num)) continue;
    if (max < students[j][i]) {
      max = students[j][i];
      maxSt = students[j][0];
    }
  }
  result.push(maxSt);
  winner.add(maxSt);
}
console.log(result.join(' '));

/**
 * 이전 버전 
 * 
 * const [N, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
 * const students = input.map(e => e.split(' ').map(Number));
 * // 국 영 수 과
 * const result = new Array(4).fill(0);
 * result.forEach((_, subjects) => {
 *   students.sort((a, b) => a[[0]] - b[[0]]);
 *   const scores = Array.from(new Set(students.map(e => e[subjects + 1]))).sort((a, b) => b - a);
 *   for (let i = 0; i < scores.length; i++) {
 *     let status = false;
 *     for (let j = 0; j < students.length; j++) {
 *       if (students[j][subjects + 1] === scores[i]) {
 *         result[subjects] = students[j][0];
 *         students.splice(j, 1);
 *         status = true;
 *         break;
 *       }
 *     }
 *     if (status) break;
 *   }
 * });
 * console.log(result.join(' '));
 */

