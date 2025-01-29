/**
 * 문제
 * 재현이가 키우는 앵무새 포포와 레몬이는 그동안 새끼들을 참 많이도 낳았다. 그렇게 태어난 앵무새들을 
 * 관찰하며 재현이는 앵무새들의 색에 간단한 규칙이 있다는 것을 발견했다. 그것은 바로 자식 앵무새의 몸통 색은 
 * 아빠 새의 몸통 색과 꼬리 색, 엄마 새의 몸통 색과 꼬리 색 중 하나이며 꼬리 색도 마찬가지로 이 넷 중 
 * 하나의 색으로 정해진다는 것이다.아빠 새의 몸통 색과 꼬리 색, 엄마 새의 몸통 색과 꼬리 색이 주어질 때 
 * 가능한 자식 앵무새의 몸통 색과 꼬리색의 모든 쌍을 사전 순으로 출력하라. (단, 중복되는 몸통 색, 꼬리 
 * 색의 쌍은 출력하지 않는다.)
 * 
 * 출력
 * 자식 새의 몸통 색과 꼬리 색의 쌍을 한 줄에 하나씩 사전 순으로 출력한다. 사전 순으로 출력하라는 말은 몸통 
 * 색이 다르다면 몸통 색의 사전 순으로, 몸통 색이 같다면 꼬리 색의 사전 순으로 출력하라는 것을 의미한다.
 */
const [f, m] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const colors = Array.from(new Set([...f.split(' '), ...m.split(' ')]));
const result = [];
const solution = (arr, line) => {
  if (line.length !== 2) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      const copyArr = [...arr];
      const copyLine = [...line];
      const color = copyArr[i];
      copyLine.push(color);
      solution(copyArr, copyLine);
    }
  } else {
    result.push(line.join(' '));
    line = [];
  }
}
solution(colors, []);
console.log(result.sort().join('\n'));