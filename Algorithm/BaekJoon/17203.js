/**
 * 문제
 * 작곡가인 GUN은 박자의 빠르기가 변화하는 곡을 쓰는 걸 좋아한다.
 * 혼신의 힘을 다해 곡을 완성한 GUN은 자기가 쓴 곡의 초당 박자 변화량의 합이 얼마나 되는지 궁금해졌다. 
 * 하지만 GUN의 노래는 박자가 변화하는 곳이 많아 구간의 변화량 합을 일일이 계산하기 어렵다. 
 * GUN은 당신에게 이 곡의 특정 부분들의 구간별 초당 박자 변화량의 합을 구해달라고 요청했다. 
 * GUN을 도와 주어진 구간들의 초당 박자 변화량의 합을 구해주자.
 * 단, i 초와 j 초 구간 사이의 초당 박자 변화량의 합은 
 * sum_{k=i}^{j-1}|a_{k+1} - a_k|  라고 정의하고 
 * j-1 < i 인 경우엔 
 * sum_{k=i}^{j-1}|a_{k+1} - a_k| = 0 이다.
 * 그리고 기호 |a|는 임의의 실수 a에 대해 a<0 이면 |a| = -a 이고 a≥0 이면 |a| = a임을 나타내는 기호이다.
 * 
 * 출력
 * GUN이 쓴 곡의 구간의 초당 박자 변화량의 합을 입력 순서대로 Q 줄에 걸쳐 출력한다.
 */
const [_, A, ...Q] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const result = [];
const solution = (start, end) => {
  const arr = A.slice(start - 1, end);
  let sum = 0;
  for (let i = 1; i < arr.length; i++) sum += Math.abs(arr[i] - arr[i - 1]);
  return sum;
}
Q.forEach(e => result.push(solution(e[0], e[1])));
console.log(result.join('\n'));