/**
 * 문제
 * 상근이는 학생들에게 두 양의 정수 A와 B의 최대공약수를 계산하는 문제를 내주었다. 
 * 그런데, 상근이는 학생들을 골탕먹이기 위해 매우 큰 A와 B를 주었다.
 * 상근이는 N개의 수와 M개의 수를 주었고, N개의 수를 모두 곱하면 A, M개의 수를 모두 곱하면 B가 된다.
 * 이 수가 주어졌을 때, 최대공약수를 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 두 수의 최대공약수를 출력한다. 만약, 9자리보다 길다면, 마지막 9자리만 출력한다. 
 * (최대 공약수가 1000012028인 경우에는 000012028을 출력해야 한다)
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(BigInt));
const N = input[1].reduce((acc, cur) => acc * cur, 1n);
const M = input[3].reduce((acc, cur) => acc * cur, 1n);
let [A, B] = N >= M ? [N, M] : [M, N];
while (B !== 0n) [A, B] = [B, A % B];
let result = A.toString();
result = result.length > 9 ? result.substring(result.length - 9) : result;
console.log(result);