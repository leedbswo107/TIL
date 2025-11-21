/**
 * 문제
 * 2023년, 하루는 피부과를 개원해 여드름 전용 레이저인 HARU-LASER를 이용해 사람들의 여드름을 치료해 주고 있다.
 * 여드름의 모양을 나타내는 이차함수는 f(x) = ax^2+bx+c로 정의되어 있고, 레이저에 설정되어 있는 일차함수를 g(x) = dx+e로 정의할 때, 레이저의 세기는 f(x) - g(x) 를 x1, x2 로 dx 적분값으로 정의된다.
 * 이때, x1, x2는 여드름의 양 끝의 x좌표를 나타낸 것이며, f(x)와 g(x)의 정의역은 (-infty, infty)이다.
 * 피부과를 개원한 지 얼마 안 된 하루는 레이저의 세기를 잘 계산하지 못한다. 여러분이 하루를 대신해 레이저의 세기를 계산해 주자.
 * 
 * 출력
 * 첫 번째 줄에 레이저의 세기를 출력한다.
 */
const [[x1, x2], [a, b, c, d, e]] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const func = (x) => (a / 3) * (x ** 3) + ((b - d) / 2) * (x ** 2) + (c - e) * x;
let power = func(x2) - func(x1);
console.log(power);