/**
 * 문제
 * 다음과 같이 세 수가 연속해서 주어졌을 때 한 번의 곱셈 기호와 한 번의 나눗셈 기호를 이용하여 만든 식 중 가장 큰 값을 출력하는 프로그램을 작성하시오. (세 수의 순서는 변하지 않는다.)
 * 
 * 출력
 * 나올 수 있는 가장 큰 값을 출력한다. 단, 소수점 아래는 버린다. 1e-9 이하의 오차로 인해 출력이 달라지는 입력은 주어지지 않는다.
 */
const nums = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
const min = nums.indexOf(Math.min(...nums.slice(1,)));
const result = min === 1 ? nums[0] / nums[1] * nums[2] : nums[0] * nums[1] / nums[2];
console.log(Math.floor(result));