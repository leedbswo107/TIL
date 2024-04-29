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

// 187142번 문제
// const input = parseInt(
//   require('fs').readFileSync('./input.txt').toString().trim()
// );
// let result = '';
// for (let i = 0; i < input; i++) {
//   for (let j = 1; j < input - i; j++) {
//     result += ' ';
//   }
//   for (let k = input; k >= input - i * 2; k--) {
//     result += '*';
//   }
//   result += '\n';
// }
// for (let i = 1; i < input; i++) {
//   // let result = '';
//   for (let j = 0; j < i; j++) {
//     result += ' ';
//   }
//   for (let k = 0; k < input * 2 - i * 2 - 1; k++) {
//     result += '*';
//   }
//   result += '\n';
// }
// console.log(result);

// 10988번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split('');
// let result = 1;
// for (let i = 0; i < input.length / 2; i++) {
//   if (input[i] !== input[input.length - i - 1]) {
//     result = 0;
//     break;
//   }
// }
// console.log(result);

// 1157번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .toUpperCase()
//   .trim()
//   .split('')
//   .sort();
// const alpha = Array(26)
//   .fill()
//   .map((_, i) => String.fromCharCode(i + 65));
// let result = new Array(26).fill(0);
// let resultNum = result.indexOf(Math.max(...result));
// let count = 0;
// for (let i = 0; i < alpha.length; i++) {
//   input.forEach((e) => {
//     if (alpha[i] === e) result[i] += 1;
//   });
// }
// result.filter((e) => {
//   if (e === Math.max(...result)) count += 1;
// });
// if (count > 1) {
//   console.log('?');
//   return;
// }
// console.log(alpha[resultNum]);

// 10699번 문제
// const time = new Date();
// let year = time.toLocaleString('default', { year: 'numeric' });
// let month = time.toLocaleString('default', { month: '2-digit' });
// let date = time.toLocaleString('default', { day: '2-digit' });
// console.log(`${year}-${month}-${date}`);

// 7287번 문제
// console.log('66\nleedbswo107');

// 2420번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split(' ')
//   .map(Number);
// console.log(Math.abs(input[0] - input[1]));

// const input = require('fs').readFileSync('./input.txt').toString().trim();
// let result = '';
// for (let i = 1; i <= parseInt(input); i++) {
//   result += i + '\n';
// }
// console.log(result);

// 10872번 문제
// const input = parseInt(
//   require('fs').readFileSync('./input.txt').toString().trim()
// );
// let result = 1;
// for (let i = 1; i <= input; i++) {
//   result *= i;
// }
// console.log(result);

// 2941번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split('');
// let result = 0;
// for (let i = 0; i < input.length; i++) {
//   if (input[i] === 'd' && input[i + 1] === 'z' && input[i + 2] === '=') i += 2;
//   else if (
//     (input[i] === 'c' && input[i + 1] === '=') ||
//     (input[i] === 'c' && input[i + 1] === '-') ||
//     (input[i] === 'd' && input[i + 1] === '-') ||
//     (input[i] === 'l' && input[i + 1] === 'j') ||
//     (input[i] === 'n' && input[i + 1] === 'j') ||
//     (input[i] === 's' && input[i + 1] === '=') ||
//     (input[i] === 'z' && input[i + 1] === '=')
//   )
//     i++;
//   result++;
// }
// console.log(result);

// 2744번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split('');
// for (let i = 0; i < input.length; i++) {
//   input[i] === input[i].toUpperCase()
//     ? (input[i] = input[i].toLowerCase())
//     : (input[i] = input[i].toUpperCase());
// }
// console.log(input.join(''));

// 1316번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split('\n');
// const N = parseInt(input[0]);
// const arr = new Array(N).fill(0).map((_, index) => input[index + 1].split(''));
// let resultCount = 0;
// arr.forEach((e) => {
//   let cloneE = [...e];
//   let sortedE = cloneE.filter((element, index) => {
//     return cloneE.indexOf(element) === index;
//   });
//   let count = 0;
//   if (e.length === 1) {
//     resultCount++;
//   } else {
//     let result = [];
//     sortedE.forEach((element) => {
//       for (let j = 0; j < e.length; j++) {
//         if (e[j] === element) result.push(j);
//       }
//     });
//     for (let k = 0; k < result.length; k++) {
//       if (result.length === 1) count++;
//       else if (k < result.length - 1) {
//         if (result[k + 1] - result[k] !== 1) {
//           count = -1;
//           break;
//         }
//         count++;
//       }
//     }
//     if (count > 0) resultCount++;
//   }
// });
// console.log(resultCount);

// A+: 4.3, A0: 4.0, A-: 3.7

// B+: 3.3, B0: 3.0, B-: 2.7

// C+: 2.3, C0: 2.0, C-: 1.7

// D+: 1.3, D0: 1.0, D-: 0.7

// F: 0.0

// 2754번 문제
// const input = require('fs').readFileSync('./input.txt').toString().trim();
// const grade = [
//   'A+',
//   'A0',
//   'A-',
//   'B+',
//   'B0',
//   'B-',
//   'C+',
//   'C0',
//   'C-',
//   'D+',
//   'D0',
//   'D-',
//   'F',
// ];
// const score = [4.3, 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, 0.7, 0.0];
// const index = grade.indexOf(input);
// console.log(score[index].toFixed(1));

// 15964번 문제
// (A+B)×(A-B)
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split(' ')
//   .map(Number);
// console.log((input[0] + input[1]) * (input[0] - input[1]));

// 2475번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split(' ')
//   .map(Number);
// let result = 0;
// input.forEach((e) => (result += e ** 2));
// console.log(result % 10);

// 2738번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split('\n');
// const [N, M] = input[0].split(' ').map(Number);
// let result = [];
// for (let i = 1; i < input.length; i++) {
//   result.push(input[i].split(' ').map(Number));
// }
// console.log(result);

// 25206번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split('\n');
// const grade = ['A+', 'A0', 'B+', 'B0', 'C+', 'C0', 'D+', 'D0', 'F'];
// const gradeScore = [4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0];
// let totalGPA = 0;
// let totalScore = 0;
// let GPA = [];
// let score = [];
// let scoreIndex = [];
// for (let i = 0; i < input.length; i++) input[i] = input[i].split(' ');
// input.forEach((e) => {
//   totalGPA += parseInt(e[1]);
//   GPA.push(parseInt(e[1]));
//   scoreIndex.push(grade.indexOf(e[2]));
// });
// scoreIndex.forEach((e) => {
//   score.push(gradeScore[e]);
// });
// for (let j = 0; j < score.length; j++) {
//   if (isNaN(score[j] * GPA[j])) {
//     totalScore += 0;
//     totalGPA -= GPA[j];
//   } else {
//     totalScore += score[j] * GPA[j];
//   }
// }
// console.log(totalScore / totalGPA);

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// const rating = ["A+", "A0", "B+", "B0", "C+", "C0", "D+", "D0", "F"];
// const grade = [4.5, 4.0, 3.5, 3.0, 2.5, 2.0, 1.5, 1.0, 0];

// let total = 0;
// let result = 0;
// for (let i = 0; i < input.length; i++) {
//   const [s, p, g] = input[i].trim().split(" ");
//   if (g != "P") {
//     total += Number(p);
//     result += Number(p) * grade[rating.indexOf(g)];
//   }
// }
// 대박...
// console.log(result / total);

// 2738번 문제
// const input = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const [N, M] = input[0].split(' ').map(Number);
// let A = [];
// let B = [];
// for (let i = 1; i < input.length; i++)
//   i <= N
//     ? A.push(input[i].split(' ').map(Number))
//     : B.push(input[i].split(' ').map(Number));
// for (let j = 0; j < N; j++) {
//   for (let k = 0; k < M; k++) A[j][k] += B[j][k];
//   console.log(A[j].join(' '));
// }

// 2566번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split('\n');
// let arr = [];
// input.forEach((e) => arr.push(e.split(' ').map(Number)));
// let flatArr = arr.flat();
// let maxData = Math.max(...flatArr);
// let result = [];
// console.log(maxData);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].indexOf(maxData) === -1) continue;
//   else {
//     result[0] = i + 1;
//     result[1] = arr[i].indexOf(maxData) + 1;
//   }
// }
// console.log(result.join(' '));

// 10798번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split('\n');
// let arr = [];
// let arrLen = [];
// let result = '';
// let max = 0;
// input.forEach((e) => {
//   arr.push(e.split(''));
//   arrLen.push(e.length);
// });
// max = Math.max(...arrLen);
// for (let i = 0; i < max; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j][i] === undefined) continue;
//     else result += arr[j][i];
//   }
// }
// console.log(result);

// 2563번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split('\n');
// const N = parseInt(input[0]);
// const arr = [];
// for (let i = 1; i < input.length; i++)
//   arr.push(input[i].split(' ').map(Number));
// console.log(arr);

// 2440번 문제
// const input = parseInt(
//   require('fs').readFileSync('./input.txt').toString().trim()
// );

// for (let i = 0; i < input; i++) {
//   let result = '';
//   for (let j = input - i; j > 0; j--) result += '*';
//   console.log(result);
// }

// 10989번 문제
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split('\n')
//   .map(Number);
// const N = input[0];
// input.shift();
// input.sort().forEach((e) => {
//   console.log(e);
// });

// 1357번 문제
// function rev(num) {
//   return parseInt(num.reverse().join(''));
// }
// const input = require('fs')
//   .readFileSync('./input.txt')
//   .toString()
//   .trim()
//   .split(' ');
// x = input[0].split('');
// y = input[1].split('');
// result = (rev(x) + rev(y)).toString();
// console.log(rev(result.split('')));

// 2751번 문제
// const [N, ...input] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n')
//   .map(Number);
// input.sort((a, b) => a - b);
// console.log(input.join('\n'));

// 7785번 문제
// const [N, ...input] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// let name = [];
// let status = [];
// for (let i = 0; i < input.length; i++) {
//   [name[i], status[i]] = input[i].split(' ');
// }
// console.log(name);
// console.log(status);

// 2869번 문제
// const [A, B, V] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split(' ')
//   .map(Number);
// console.log(Math.ceil((V - B) / (A - B)));

// 2441번 문제
const N = parseInt(require('fs').readFileSync('./input.txt', 'utf-8').trim());
for (let i = 0; i < N; i++) {
  let result = '';
  for(let j = 0; j < i; j++){
    result += ' ';
  }
  for (let k = 0; k < N - i; k++) {
    result += '*';
  }
  console.log(result);
}

// 2558번 문제 풀어야함
// const [a, b] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n')
//   .map(Number);
// console.log(a + b);

// 1181번 문제 풀어야함
// const [N, ...input] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');

// const lenArr = [];
// console.log(input);

// input.forEach((e) => {
//   lenArr.push(e.length);
// });

// console.log(lenArr);
