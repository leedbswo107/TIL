// const fs = require('fs');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
// const firstInput = input[0].split(' ');
// const N = parseInt(firstInput[0]);
// const M = parseInt(firstInput[1]);
// let arr = new Array(N).fill(0);
// const inputLine = [];
// for (let a = 1; a < input.length; a++) {
//   inputLine.push(
//     input[a]
//       .toString()
//       .trim()
//       .split(' ')
//       .map((v) => Number(v))
//   );
// }
// for (let b = 0; b < M; b++) {
//   let i = inputLine[b][0];
//   let j = inputLine[b][1];
//   let k = inputLine[b][2];
//   for (; i <= j; i++) {
//     arr[i - 1] = k;
//   }
// }
// console.log(arr.join(' '));

// 10810번 문제
// const fs = require('fs');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
// const [N, M] = input[0].split(' ').map(Number);
// const arr = new Array(N).fill(0);
// for (let a = 1; a <= M; a++) {
//   let [i, j, k] = input[a].split(' ').map(Number);
//   for (i; i <= j; i++) arr[i - 1] = k;
// }
// console.log(arr.join(' '));

// const fs = require('fs');
// function swapElements(arr, i, j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]]; // (번호 1) 배열 비구조화 할당 사용
// }
// function swapPositions(inputFile) {
//     const input = fs.readFileSync(inputFile).toString().trim().split('\n');
//     const [N, M] = input[0].split(' ').map(Number);
//     const arr = new Array(N).fill(0).map((_, index) => index + 1); // (번호 2) 배열 인덱스 관리 수정
//     for (let l = 1; l <= M; l++) {
//         const [i, j] = input[l].split(' ').map(Number);
//         swapElements(arr, i - 1, j - 1); // 배열 인덱스 0부터 시작하도록 수정
//     }
//     console.log(arr.join('')); // (번호 3) 공백 제거
// }

// 10811번 문제

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const [N, M] = input[0].split(' ').map(Number);
// const arr = new Array(N).fill(0).map((_, index) => index + 1);
// for (let l = 1; l <= M; l++) {
//   const [i, j] = input[l].split(' ').map(Number);
//   revArr = [];
//   for (let a = i; a <= j; a++) revArr.push(arr[a - 1]);
//   let s = revArr.length - 1;
//   for (let b = i; b <= j; b++) arr.splice(b - 1, 1, revArr[s--]);
// }
// console.log(arr.join(' '));

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const [N, M] = input[0].split(' ').map(Number);
// let arr = new Array(N).fill(0).map((_, index) => index + 1);
// for (let l = 1; l <= M; l++) {
//   const [i, j] = input[l].split(' ').map(Number);
//   arr = arr.slice(0, i - 1)
//     .concat(arr.slice(i - 1, j).reverse())
//     .concat(arr.slice(j));
// }
// console.log(arr.join(' '));

// // 테스트
// swapPositions('./input.txt');

// const fs = require('fs');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
// console.log(input[0].split('')[parseInt(input[1]) - 1]);

// 9086번 문제
// const fs = require('fs');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
// let T = parseInt(input[0]);
// let arr = [];
// let result = [];
// for (let i = 1; i <= T; i++) {
//   arr[i - 1] = input[i].split('');
//   result.push(arr[i - 1][0].concat(arr[i - 1][arr[i - 1].length - 1]));
// }
// console.log(result.join('\n'));

// 10809번 문제
// const fs = require('fs');
// const input = fs.readFileSync('./input.txt').toString().trim().split('');
// const alphabet = new Array(26)
//   .fill()
//   .map((_, i) => String.fromCharCode(i + 97));
// let result = new Array(26).fill(-1);
// input.forEach((e) => {
//   result[alphabet.indexOf(e)] = input.indexOf(e);
// });
// console.log(result.join(' '));

// 2675번 문제
// const fs = require('fs');
// const input = fs.readFileSync('./input.txt').toString().trim().split('\n');
// const T = +input[0];
// const result = [];
// for (let i = 1; i <= T; i++) {
//   const [num, con] = input[i].split(' ');
//   const line = con
//     .split('')
//     .map((e) => e.repeat(+num))
//     .join('');
//   result.push(line);
// }
// console.log(result.join('\n'));
// const arr = new Array(T).fill().map((_, index) => input[index + 1].split(' '));
// arr.forEach((e) => {
//   let result = [];
//   let num = parseInt(e[0]);
//   let con = e[1].trim().split('');
//   con.forEach((element) => {
//     for (let i = 0; i < num; i++) result.push(element);
//   });
//   console.log(result.join(''));
// });

// 1152번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split(' ');
// for (let i = 0; i < input.length; i++) {
//   if (input[i] === '') input.splice(i--, 1);
// }
// console.log(input.length);

// 2908번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split(' ');
// let arr = [];
// for (let i = 0; i < input.length; i++) {
//   arr.push(parseInt(input[i].split('').reverse().join('')));
// }
// console.log(Math.max(...arr));

// 11718번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split('\n');
// input.forEach((e) => {
//   console.log(e.trim().split('').join(''));
// });

// 5622번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split('');
// const alphabet = Array(26)
//   .fill()
//   .map((_, i) => String.fromCharCode(i + 65));
// const result = [];
// input.forEach((e) => {
//   result.push(parseInt(alphabet.indexOf(e)));
// });
// let resultTime = 0;
// for (let a = 0; a < result.length; a++) {
//   let i = result[a];
//   let time;
//   if (i < 3) time = 2;
//   else if (i >= 3 && i < 6) time = 3;
//   else if (i >= 6 && i < 9) time = 4;
//   else if (i >= 9 && i < 12) time = 5;
//   else if (i >= 12 && i < 15) time = 6;
//   else if (i >= 15 && i < 19) time = 7;
//   else if (i >= 19 && i < 22) time = 8;
//   else if (i >= 22 && i < 26) time = 9;
//   resultTime += time + 1;
// }
// console.log(resultTime);

const input = parseInt(
  require('fs').readFileSync('./input.txt').toString().trim()
);
for(let i = 0; i < input; i++){
  for(let j = input; )
}