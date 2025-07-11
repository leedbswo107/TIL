/**
 * 문제
 * 아주대학교 프로그래밍 경시대회(Ajou Programming Contest, APC)는 2009년 제1회를 시작으로 2014년 제6회까지 개최된 아주대학교 학생들을 위한 프로그래밍 경시대회이다. 2017년, 다른 학교에서 활발히 진행되는 교내대회를 보던 현정이는 3년 만에 APC를 부활시키기로 결심했다.
 * 2017 APC 운영 방식은 다음과 같다.
 * 문제는 Small 데이터와 Large 데이터로 이루어져 있다.
 * 문제를 풀기 위해서는 입력 파일을 다운로드 받고, 5분 이내로 이에 맞는 출력 파일과 소스 코드를 업로드해야 한다.
 * Small 데이터 문제를 해결해야 Large 데이터 입력 파일을 다운로드 받을 수 있다.
 * 각 문제의 Small, Large 데이터를 해결하면 점수를 얻을 수 있으며, 이 점수는 각각 다르다.
 * 제출 횟수는 점수를 획득한 문제를 맞기 까지 인풋을 다운로드 받은 횟수의 총합이다.
 * 즉, 점수를 획득하지 못한 문제의 다운로드 횟수는 포함되지 않는다.
 * 위 운영 방식에 따라 순위는 다음과 같이 결정된다.
 * 해결한 문제 점수의 총합이 높은 참가자가 더 높은 순위를 가진다.
 * 점수의 총합이 같은 경우, 제출 횟수가 적은 참가자가 더 높은 순위를 가진다.
 * 점수의 총합과 제출 횟수가 같은 경우, 마지막으로 점수를 획득한 문제의 업로드 시간이 빠른 참가자가 더 높은 순위를 가진다.
 * 매우 유감스럽게도 현정이는 며칠째 잠을 제대로 자지 못해 흉폭해져있다. 현정이의 일을 덜어 잠깐이라도 잘 수 있도록 참가자들의 순위를 계산하는 프로그램을 작성해주자.
 * 
 * 출력
 * 1등을 하는 참가자의 번호를 한 줄에 출력한다.
 */
const [N, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const attendance = input.map(e => e.split(' ').map(Number));
let [score, submit, time] = attendance[0];
let winner = 0;
attendance.forEach(([sc, su, ti], i) => {
  if (sc > score) {
    [score, submit, time] = [sc, su, ti];
    winner = i;
  } else if (sc === score) {
    if (submit > su) {
      [score, submit, time] = [sc, su, ti];
      winner = i;
    } else if (submit === su) {
      if (time > ti) {
        [score, submit, time] = [sc, su, ti];
        winner = i;
      }
    }
  }
});
console.log(winner + 1);