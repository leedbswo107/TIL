/**
 * 문제
 * 수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.
 * Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표 Xj의 개수와 같아야 한다.
 * X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.
 * 
 * 출력
 * 첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.
 */
let [_, X] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
X = X.split(' ').map(Number);
const compress = {};
Array.from(new Set([...X])).sort((a, b) => a - b).map((e, i) => compress[e] = i);
const result = X.map(e => compress[e]).join(' ');
console.log(result);


// map.get() 사용
// let [_, arr] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
// arr = arr.split(' ').map(Number);
// // 1. 중복 제거 후 정렬
// let sorted = [...new Set(arr)].sort((a, b) => a - b); // [100, 3000, 5000]

// // 2. 값 → 인덱스 매핑 생성
// let map = new Map();
// sorted.forEach((v, idx) => map.set(v, idx)); // 100→0, 3000→1, 5000→2

// // 3. 원래 배열을 압축된 값으로 변환
// let compressed = arr.map(v => map.get(v)).join(' '); // 0, 1, 0, 2, 1

// console.log(compressed); // 0, 1, 0, 2