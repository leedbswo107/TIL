/**
 * 문제
 * 2진수가 주어졌을 때, 8진수로 변환하는 프로그램을 작성하시오.
 * 
 * 출력
 * 첫째 줄에 주어진 수를 8진수로 변환하여 출력한다.
 */
let binaryInput = require('fs').readFileSync(0, 'utf-8').trim()
binaryInput = binaryInput.length % 3 === 0 ? binaryInput : "0".repeat(3 - binaryInput.length % 3) + binaryInput;
let result = '';
for (let i = 0; i < binaryInput.length / 3; i++) result += Number.parseInt(`${binaryInput[i * 3]}${binaryInput[i * 3 + 1]}${binaryInput[i * 3 + 2]}`, 2);
console.log(result);
