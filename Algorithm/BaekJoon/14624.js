/**
 * 문제
 * 전북대학교의 심볼은 균형과 조화, 지성과 이상을 향한 방향성과 목표를 나타낸다. 절제된 한국적 아름다움을 꾸밈없는 소박함과 여백을 통해 시각화하였으며, 심볼의 방향에 따라 한국적인 대학, 학문에 정진하는 대학, 미래로 나아가는 대학의 의미를 포함하여 ‘성장을 넘어 성숙의 대학으로 나아가는 전북대학교’의 철학과 비전을 상징한다.
 * 
 * 출력
 * 입력 N이 홀수인 경우 '*'을 이용해 가로의 길이가 N인 전북대학교 심볼을 출력한다. (예제 참고)
 * 짝수인 경우, 'I LOVE CBNU'를 출력한다.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
const TXT = 'I LOVE CBNU';
const result = [];
if (N % 2 !== 0) {
  result.push('*'.repeat(N));
  const len = ((N + 1) / 2) - 1;
  for (let i = len; i >= 0; i--) {
    if (i === len) result.push(' '.repeat(i) + '*');
    else result.push(' '.repeat(i) + '*' + ' '.repeat((len - i) * 2 - 1) + '*');
  }
} else result.push(TXT);
console.log(result.join('\n'));