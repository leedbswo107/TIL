/**
 * 문제
 * 바로 어제 최백준 조교가 방 열쇠를 주머니에 넣은 채 깜빡하고 서울로 가 버리는 황당한 상황에 직면한 조교들은, 702호에 새로운 보안 시스템을 설치하기로 하였다. 이 보안 시스템은 열쇠가 아닌 암호로 동작하게 되어 있는 시스템이다.
 * 암호는 서로 다른 L개의 알파벳 소문자들로 구성되며 최소 한 개의 모음(a, e, i, o, u)과 최소 두 개의 자음으로 구성되어 있다고 알려져 있다. 또한 정렬된 문자열을 선호하는 조교들의 성향으로 미루어 보아 암호를 이루는 알파벳이 암호에서 증가하는 순서로 배열되었을 것이라고 추측된다. 즉, abc는 가능성이 있는 암호이지만 bac는 그렇지 않다.
 * 새 보안 시스템에서 조교들이 암호로 사용했을 법한 문자의 종류는 C가지가 있다고 한다. 이 알파벳을 입수한 민식, 영식 형제는 조교들의 방에 침투하기 위해 암호를 추측해 보려고 한다. C개의 문자들이 모두 주어졌을 때, 가능성 있는 암호들을 모두 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 각 줄에 하나씩, 사전식으로 가능성 있는 암호를 모두 출력한다.
 */
const [[L, C], alpha] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' '));
const vowel = ['a', 'e', 'i', 'o', 'u'];
alpha.sort();
const result = [];
const solution = (arr, line) => {
  if (line.length !== +L) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      const copyArr = [...arr];
      const extraction = copyArr.splice(i, 1)[0];
      const copyLine = [...line];
      if (alpha.indexOf(extraction) > alpha.indexOf(copyLine[copyLine.length - 1]) || copyLine.length === 0) {
        copyLine.push(extraction);
        solution(copyArr, copyLine);
      }
    }
  } else {
    let vowelCount = 0;
    for (let i = 0; i < line.length; i++) (vowel.includes(line[i])) && vowelCount++;
    if (vowelCount >= 1) {
      ((+L - vowelCount) >= 2) && result.push(line.join(''));
    }
    line = [];
  }
}
solution(alpha, []);
console.log(result.join('\n'));