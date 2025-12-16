/**
 * 문제
 * 세 수 A, B, C가 주어진다. A는 B보다 작고, B는 C보다 작다.
 * 세 수 A, B, C가 주어졌을 때, 입력에서 주어진 순서대로 출력하는 프로그램을 작성하시오.
 * 
 * 출력
 * 주어진 세 수를 주어진 출력 순서대로 출력하면 된다.
 */
let [nums, order] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map((e, i) => i === 0 ? e.split(' ').map(Number).sort((a, b) => a - b) : e.split('').map(e => e.charCodeAt() - 65));
let result = new Array(3);
order = order.map((e, i) => [e, i]).sort((a, b) => a[0] - b[0]);
order.map(([_, idx], i) => result[idx] = nums[i]);
console.log(result.join(' '));