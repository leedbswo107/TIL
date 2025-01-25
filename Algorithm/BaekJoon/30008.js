/**
 * 문제
 * 준영이는 선린인터넷고등학교에서 1학기를 마치고 성적표를 받았다. 아직 성적처리가 완벽하게 끝나지 않아서 
 * 등수만 나오고 등급은 나오지 않은 상태이다. 계산하는 것이 너무나 귀찮은 준영이를 위해 그의 등급을 
 * 계산해주자.선린인터넷고등학교에는 N명의 학생과 K개의 과목이 있으며, 모든 학생은 K개의 과목을 전부 
 * 수강한다. 준영이의 등급은 백분율을 기준으로 부여되며, 백분율은 해당 과목에서 준영이가 받은 등수에 100을 
 * 곱한 뒤 학생 수로 나눈 몫과 같다. 어떠한 과목에서의 백분율이 P라 할 때, 준영이가 특정 등급을 받기 위한 
 * 조건은 다음과 같다.
 * i (1 < i < K)번째 과목에서 준영이는 Gi등이었다. 
 * G1, G2, ... , GK가 주어질 때, 
 * 준영이를 위해 각 과목에서 받은 등급 D1, D2, ... , DK (1 < Di < 9)를 구해주자.
 * 출력
 * 
 */
const [i1, i2] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const [N, K] = i1.split(' ').map(Number);
const G = i2.split(' ').map(Number);
const result = new Array(K);
const solution = (rank) => {
  let GRADE = 1;
  if (rank > 4) GRADE = 2;
  if (rank > 11) GRADE = 3;
  if (rank > 23) GRADE = 4;
  if (rank > 40) GRADE = 5;
  if (rank > 60) GRADE = 6;
  if (rank > 77) GRADE = 7;
  if (rank > 89) GRADE = 8;
  if (rank > 96) GRADE = 9;
  return GRADE
}
G.forEach((e, i) => result[i] = solution(Math.floor(100 * e / N)));
console.log(result.join(' '));