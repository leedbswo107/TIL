/**
 * 문제
 * 양의 정수 N이 주어질 때, 아래 연산을 원하는 만큼 반복하여 N을 0으로 만들 수 있는지 구해보자.
 * 이 연산을 k번째로 실행할 때 N이 k의 배수라면 N에 1을 더하고 아니라면 N에서 1을 뺀다.
 * 
 * 출력
 * 첫째 줄에 N에 연산을 원하는 만큼 반복하여 0으로 만들 수 있다면 Yes를, 아니면 No를 출력한다.
 */
console.log((BigInt(require('fs').readFileSync(0, 'utf-8').trim()) % 2n === 1n ? false : true) ? 'Yes' : 'No');