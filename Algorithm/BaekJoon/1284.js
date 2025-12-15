/**
 * 문제
 * 재석이는 대문에 붙이는 (주소를 나타내는) 호수판 제작업체의 직원이다. 고객에게 전달할 호수판은 숫자와 숫자 사이 그리고 왼쪽 오른쪽으로 적당히 여백이 들어가 줘야하고 숫자마다 차지하는 간격이 조금씩 상이하다. 다행이도 규칙은 매우 간단하다. 
 * 각 숫자 사이에는 1cm의 여백이 들어가야한다.
 * 1은 2cm의 너비를 차지해야한다. 0은 4cm의 너비를 차지해야한다. 나머지 숫자는 모두 3cm의 너비를 차지한다.
 * 호수판의 경계와 숫자 사이에는 1cm의 여백이 들어가야한다.
 * 120.png
 * 예를 들어 위의 120 같은 경우,  각 숫자 사이에 여백이 1cm 씩 2개 들어간다. 1은 2cm, 2는 3cm, 0은 4cm를 차지한다. 오른쪽, 왼쪽 경계에서 각각 여백이 1cm씩 차지한다. 따라서 총 2 + 2 + 3 + 4 + 1 + 1 = 13(cm) 가 된다.
 * 재석이는 고객에게 전달해야할 호수판의 너비가 얼마나 되는지 궁금해졌다. 재석이를 도와주자!
 * 
 * 출력
 * 각 입력마다 얼마만큼 너비를 차지하는지 정수로 출력하면 된다.
 * 각 출력은 줄바꿈으로 구분되어야한다.
 */
const nums = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(e => e.split('').map(Number)).slice(0, -1);
const solution = (arr) => {
  let count = 0;
  arr.forEach(n => {
    if (n === 1) count += 2;
    else if (n === 0) count += 4;
    else count += 3;
  });
  count += (arr.length + 1);
  return count;
}
const result = nums.map(e => solution(e)).join('\n');
console.log(result);