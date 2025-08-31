/**
 * 문제
 * 서준이는 아빠로부터 골뱅이가 들어 있는 상자를 생일 선물로 받았다. 상자 안에는 ㄴ자 모양의 골뱅이가 들어있다. ㄴ자 모양은 가로 및 세로로 각각 5개의 셀로 구성되어 있다. 상자에는 정사각형 모양의 셀의 크기를 나타내는 숫자 하나가 적혀있다. 셀의 크기 N이 주어지면 예제 출력과 같은 방식으로 골뱅이 모양을 출력하시오.
 * 
 * 출력
 * 셀의 크기가 N인 골뱅이를 출력한다.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
let result = [];
for (let i = 0; i < N * 5; i++) result[i] = '@'.repeat(i < N * 4 ? N : N * 5);
console.log(result.join('\n'));