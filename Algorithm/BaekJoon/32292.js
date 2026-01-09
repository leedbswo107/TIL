/**
 * 문제
 * 이 문제는 "ABB to BA"의 쉬운 버전입니다. 두 버전은 t와 n의 제한을 제외하고 동일합니다.
 * 'A'와 'B'만으로 이루어진 문자열 S가 주어집니다. 여러분은 다음 동작을 더 이상 수행할 수 없을 때까지 반복해야 합니다.
 *  S에서 첫 번째로 부분 문자열 "ABB"가 등장한 위치를 i라고 할 때, 이 위치의 부분 문자열 "ABB"를 지우고 "BA"로 바꿉니다.
 *  다시 말해, Si, S{i+1}, S{i+2}가 "ABB"인 가장 작은 i를 찾아, Si와 S{i+1}을 각각 'B'와 'A'로 바꾸고 S{i+2}를 S에서 지웁니다.
 *  S에 "ABB"가 부분 문자열로 등장하지 않는다면 동작을 수행할 수 없습니다. 
 * 반복이 끝난 후 S의 내용을 출력하는 프로그램을 작성해 주세요.
 * 
 * 출력
 * 각 테스트 케이스에 대해 반복이 끝난 후 S의 내용을 한 줄에 출력합니다.
 */
const [t, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
const S = input.filter((e,i) => i % 2 === 1).map(e => e.split(''));
const pattern = 'ABB';
const solution = (s) => {
  while(1) {
    let status = true;
    for (var i = 0; i < s.length - 2; i++) {
      if(s[i] === pattern[0] && s[i + 1] === pattern[1] && s[i + 2] === pattern[2]) {
        s = [...s.slice(0, i), 'B', 'A', ...s.slice(i+3)];
        status = false;
        break;
      }
    }
    if(status) break;
  }  
  return s.join('');
}
const result = S.map(s => solution(s)).join('\n');
console.log(result);
