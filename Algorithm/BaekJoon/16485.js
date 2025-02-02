/**
 * 문제
 * 작도왕인 재원이는 밖에 신나게 뛰어놀다 집에 들어왔는데, 할 일이 없어서 작도를 하기로 
 * 했다. 재원이는 먼저 종이에 삼각형 ABC를 그렸다. 그리고, 각 BAC의 이등분선과 변 BC의 
 * 교점을 M이라고 했다.변 AB의 길이 c와 변 AC의 길이 b가 주어질 때, (선분 BM의 길이)÷
 * (선분 CM의 길이)의 값을 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 첫째 줄에 문제에서 요구한 답을 출력한다. 절대/상대 오차는 10^(-6) 까지 허용한다.
 */
const [c, b] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
const result = (c / b);
console.log(result);