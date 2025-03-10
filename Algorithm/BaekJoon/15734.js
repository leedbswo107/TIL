/**
 * 문제
 * 오늘도 어김없이 피시방에서 피파를 하고 있는 정훈이는 큰 고민에 빠졌다. 
 * 자신에 팀에 있는 선수들의 주 사용 발(Main Foot)이 적절하게 나눠져있지 않기 때문이다. 
 * 정훈이의 팀에는 L명의 왼발잡이 선수와, R명의 오른발잡이 선수, A명의 양발잡이 선수가 존재한다. 
 * 양발잡이 선수는 오른발잡이 선수처럼 생각해도 되고, 왼발잡이 선수로도 생각해도 된다. 
 * 11명의 주전선수를 뽑기 전에 정훈이가 가진 팀원을 정리하려고 한다. 
 * 정훈이는 왼발잡이와 오른발잡이 선수의 수를 같게 만든 다음, 나머지 인원은 방출하려 한다. 
 * 정훈이가 정리하고 난 다음, 팀에 잔류하고 있는 선수의 최대 수를 구해보자.
 * 
 * 출력
 * 첫 번째 줄에 최대 잔류 인원 수를 출력한다.
 */
const [L, R, A] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
const solution = (l, r, a) => {
  let [copyL, copyR] = [l, r];
  for (let i = 0; i < a; i++) copyL >= copyR ? copyR++ : copyL++;
  const result = copyL + copyR - Math.abs(copyL - copyR);
  return result;
}
const result = solution(L, R, A);
console.log(result);