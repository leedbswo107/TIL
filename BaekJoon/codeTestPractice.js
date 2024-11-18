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
// const N = parseInt(require('fs').readFileSync('./input.txt', 'utf-8').trim());
// for (let i = 0; i < N; i++) {
//   let result = '';
//   for(let j = 0; j < i; j++){
//     result += ' ';
//   }
//   for (let k = 0; k < N - i; k++) {
//     result += '*';
//   }
//   console.log(result);
// }
// 2442번 문제
// const N = parseInt(require('fs').readFileSync('./input.txt', 'utf-8').trim());
// for (let i = 0; i < N; i++) {
//   let result = '';
//   for (let j = 1; j < N - i; j++) {
//     result += ' ';
//   }
//   for (let k = N-i; k <= N + i ; k++) {
//     result += '*';
//   }
//   console.log(result);
// }

// 2742번 문제
// let N = parseInt(require('fs').readFileSync('./input.txt','utf-8').trim());
// let r = '';
// for (; N > 0; N-=1) r += (N +'\n');
// console.log(r);

// 5543번 문제
// const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
// const bugger = [];
// const drinks = [];
// for (let i = 0; i < input.length; i++) {
//   if(i <= 2) bugger.push(input[i]);
//   else drinks.push(input[i]);
// }
// console.log(Math.min(...bugger)+Math.min(...drinks)-50);

// 10817번 문제
// const arr = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
// arr.sort((a,b) => b-a);
// console.log(arr);
// console.log(arr[1]);

// 1085번 문제
// const [x,y,w,h] = require('fs').readFileSync('./input.txt','utf-8').trim().split(' ').map(Number);
// const result = [x,y,w-x,h-y];
// // x<(w-x) ? result.push(x) : result.push(w-x);
// // y<(h-y) ? result.push(y) : result.push(h-y);
// console.log(Math.min(...result));

// 2750번 문제
// const [N, ...arr] = require('fs').readFileSync('./input.txt','utf-8').trim().split('\n').map(Number);
// let result = '';
// arr.sort((a,b) => a-b);
// arr.forEach(e => result += (e + '\n'));
// console.log(result);

// 10039번 문제
// const score = require('fs').readFileSync('./input.txt','utf-8').trim().split('\n').map(Number);
// let result = 0;
// score.forEach(score => score < 40 ? result += 40 : result += score);
// console.log(result/5);

// 3046번 문제
// const [R1, S] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number);
// const R2 = S*2 - R1;
// console.log(R2);

// 2587번 문제
// const input = require('fs').readFileSync('./input.txt','utf-8').trim().split('\n').map(Number);
// input.sort((a,b) => a-b);
// const sumNum = input.reduce((acc,cur) => {return (acc + cur)},0);
// console.log(sumNum/5+'\n'+input[2]);

// 11728번 문제
// const input = require('fs').readFileSync('./input.txt','utf-8').trim().split('\n');
// const [N,M] = input[0].split(' ').map(Number);
// const [A,B] = [input[1].split(' ').map(Number),input[2].split(' ').map(Number)];
// const result = A.concat(B).sort((a,b)=>a-b).join(' ');
// console.log(result);

// 11004번 문제
// const input = require('fs').readFileSync('./input.txt','utf-8').trim().split('\n');
// const [N,K] = input[0].split(' ').map(Number);
// const A = [...input[1].split(' ').map(Number)].sort((a,b)=> a-b);
// console.log(A[K-1]);

// 2822번 문제
// const score = require('fs').readFileSync('./input.txt','utf-8').trim().split('\n').map(Number);
// const A = [...score];
// A.sort((a,b)=>b-a).splice(5,3);
// const B = [];
// A.forEach(e => B.push(score.indexOf(e)+1));
// const total = A.reduce((acc,cur)=>{return acc + cur},0);
// const result = total + '\n' + B.sort((a,b)=>a-b).join(' ');
// console.log(result);

// 2167번 문제 (코드 효율 개선 필요)
// const input = require('fs').readFileSync('./input.txt','utf-8').trim().split('\n');
// const [N,M] = input.shift().split(' ').map(Number);
// const arr = input.splice(0,N);
// const K = parseInt(input.shift());
// // const splitArr = (arr) => arr.map(e => arr[arr.indexOf(e)] = e.split(' ').map(Number))
// arr.map(e => arr[arr.indexOf(e)] = e.split(' ').map(Number));
// input.map(e => input[input.indexOf(e)] = e.split(' ').map(Number))
// const result = [];
// input.forEach(e => {
//   let [i,j,x,y] = e.map(Number);
//   let total = 0;
//   for (let a = i; a <= x; a++) {
//     for (let b = j; b <= y; b++) {
//       total += arr[a-1][b-1];
//     }
//   } result.push(total);
// });
// console.log(result.join('\n'));

// 10867번 문제
// const input = require('fs').readFileSync('./input.txt','utf-8').trim().split('\n');
// const N = parseInt(input.shift());
// const arr = input[0].trim().split(' ').map(Number).sort((a,b)=>a-b);
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//   if(arr[i] !== arr[i+1]) result.push(arr[i])
// }
// console.log(result.join(' '));

// const input = require('fs').readFileSync('./input.txt','utf-8').trim().split('\n');
// const N = parseInt(input.shift());
// let arr = input[0].trim().split(' ').map(Number);
// arr = new Set(arr);
// console.log(Array.from(arr).sort((a,b)=>a-b).join(' '));

// console.log(Array.from(arr).sort((a,b)=>a-b));
// console.log(arr.sort((a,b)=>a-b));

// 11931번 문제
// const [N, ...arr] = require('fs').readFileSync('./input.txt','utf-8').trim().split('\n').map(Number);
// console.log(arr.sort((a,b)=>b-a).join('\n'));

// 17478번 문제
// const N = parseInt(require('fs').readFileSync('./input.txt','utf-8').trim(),10);
// const text = [
//   '어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n',
//   '"재귀함수가 뭔가요?"\n',
//   '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n',
//   '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n',
//   '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n',
//   '"재귀함수는 자기 자신을 호출하는 함수라네"\n',
//   '라고 답변하였지.\n',
//   '____'
// ]
// let result = text[0];
// const ansFunc = (i) => {
//   let undLine = '';
//   for (let j = 0; j < i; j++) {
//     undLine += text[7];
//   }
//   if(i < N){
//     result += (
//       undLine + text[1] + undLine + text[2] + undLine + text[3] + undLine + text[4]
//     );
//     ansFunc(i+=1);
//     result += (undLine + text[6]);
//   } else {
//     result += (undLine + text[1]+undLine + text[5] + undLine + text[6]);
//     return result;
//   }
// }
// ansFunc(0);
// console.log(result);

// 2161번 문제
// const N = parseInt(require('fs').readFileSync('./input.txt','utf-8').trim(),10);
// const arr = new Array(N).fill(0).map((e,i) => i+1);
// for (let i = 0; i < arr.length; i++) {
//   arr.push(arr[i+1]);
//   arr.splice(i+1,1);
// }
// console.log(arr.join(' '));

// 10757번 문제
// const [ A, B ] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(BigInt);
// console.log((A+B).toString());
// console.log(A+B);

// 2693번 문제

// const [T, ...arr] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
// arr.map((e) => console.log(e.split(' ').map(Number).sort((a,b) => b-a)[2]));

// 10808번 문제
// const S = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('');
// const alphabet = new Array(26)
//   .fill()
//   .map((_, i) => String.fromCharCode(i + 97));
// const result = new Array(26).fill(0);
// S.forEach((e) => {
//   if (alphabet.includes(e)) result[alphabet.indexOf(e)] += 1;
// });
// console.log(result.join(' '));

// 4153번 문제
// const input = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// input.pop();
// const arr = input.map((e) =>
//   e
//     .split(' ')
//     .map(Number)
//     .sort((a, b) => b - a)
// );
// const result = [];
// arr.map((e) => {
//   e[0] ** 2 === e[1] ** 2 + e[2] ** 2
//     ? result.push('right')
//     : result.push('wrong');
// });
// console.log(result.join('\n'));

// 2839번 문제
// let N = parseInt(require('fs').readFileSync('./input.txt', 'utf-8').trim(), 10);

// let p = 0;
// if (N % 5 === 0) console.log(N / 5);
// else {
//   while (N > 0) {
//     N -= 3;
//     p += 1;
//     if (N % 5 === 0) {
//       p += N / 5;
//       break;
//     } else if (N === 1 || N === 2) {
//       p = -1;
//       break;
//     } else if (N === 0) {
//       console.log(p);
//       break;
//     }
//   }
//   console.log(p);
// }

// 14916번 문제
// let n = parseInt(require('fs').readFileSync('./input.txt', 'utf-8').trim(), 10);
// let count = 0;
// if (n === 3 || n === 1) {
//   console.log(-1);
// } else if (n % 5 === 0) {
//   console.log(n / 5);
// } else {
//   while (n > 0) {
//     n -= 2;
//     count += 1;
//     if (n % 5 === 0) {
//       console.log(n / 5 + count);
//       break;
//     }
//     if (n === 1) {
//       console.log(-1);
//       break;
//     }
//     if (n === 0) {
//       console.log(count);
//       break;
//     }
//   }
// }

// 4101번 문제
// const input = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// input.pop();
// const arr = input.map((e) => e.split(' ').map(Number));
// const result = arr.map((e) => (e[0] > e[1] ? 'Yes' : 'No'));
// console.log(result.join('\n'));

// 1264번 문제
// const input = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .toLowerCase()
//   .split('\n');
// input.pop();
// const arr = input.map((e) => e.split(''));
// const gather = ['a', 'e', 'i', 'o', 'u'];
// const result = [];
// arr.forEach((e) => {
//   let count = 0;
//   for (let i = 0; i < e.length; i++) {
//     if (gather.includes(e[i])) count++;
//   }
//   result.push(count);
// });
// console.log(result.join('\n'));

// 1225번 문제
// const [A, B] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split(' ')
//   .map((e) => e.split('').map(Number));
// const sumA = A.reduce((a, b) => a + b);
// let result = 0;
// B.forEach((e) => (result += e * sumA));
// console.log(result);

// const _A = A.split('').map(Number);
// const _B = B.split('').map(Number);
// let result = 0;
// _A.forEach((e1) => _B.forEach((e2) => (result += e1 * e2)));
// console.log(result);

// 1076번 문제
// const [A, B, C] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const resist = [
//   'black',
//   'brown',
//   'red',
//   'orange',
//   'yellow',
//   'green',
//   'blue',
//   'violet',
//   'grey',
//   'white',
// ];
// const result =
//   (resist.indexOf(A) * 10 + resist.indexOf(B)) * 10 ** resist.indexOf(C);
// console.log(result);

// 15688번 문제
// const [N, ...arr] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n')
//   .map(Number);
// console.log(arr.sort((a, b) => a - b).join('\n'));

// 9012번 문제

// const [T, ...arr] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const arr2 = arr.map((e) => e.split(''));
// const result = [];
// arr2.forEach((e) => {
//   let count = 0;
//   e.unshift(0);
//   for (let i = 0; i < e.length; i++) {
//     if (e[i] === '(' && e[i + 1] === ')') {
//       e.splice(i, 2);
//       i = 0;
//     }
//   }
//   e.forEach((a) => (a === 0 ? count++ : count));
//   result.push(count === e.length ? 'YES' : 'NO');
// });
// console.log(result.join('\n'));

// 10828번 문제
// const [N, ...arr] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const arr2 = [];
// let result = '';
// arr.forEach((e) => {
//   switch (e) {
//     case 'pop':
//       result += (arr2.length !== 0 ? arr2.shift() : -1) + '\n';
//       break;
//     case 'size':
//       result += arr2.length + '\n';
//       break;
//     case 'empty':
//       result += (arr2.length === 0 ? 1 : 0) + '\n';
//       break;
//     case 'top':
//       result += (arr2.length === 0 ? -1 : arr2[0]) + '\n';
//       break;
//     default:
//       const [_, num] = e.split(' ');
//       arr2.unshift(num);
//       break;
//   }
// });
// console.log(result);

// 1620번 문제
// const input = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const [N, M] = input.shift().split(' ').map(Number);
// const arr = input.splice(N, M);
// const mapArr = new Map(input.map((e, i) => [e, i + 1]));

// console.log(mapArr);
// let result = '';
// arr.map((e) =>
//   isNaN(e) ? (result += mapArr.get(e) + '\n') : (result += input[e - 1] + '\n')
// );
// console.log(result);

// 1312번 문제
// const [A, B, N] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split(' ')
//   .map(Number);
// let result = A % B;
// for (let i = 0; i < N - 1; i++) {
//   result *= 10;
//   result %= B;
// }
// result *= 10;
// console.log(parseInt(result / B, 10));

// 1789번 문제
// let S = parseInt(require('fs').readFileSync('./input.txt', 'utf-8').trim(), 10);
// let a = 0;
// while (S >= 0) {
//   if (S - a <= 0) break;
//   a += 1;
//   S -= a;
// }
// console.log(a);

// 2576번 문제
// let N = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n')
//   .map(Number);
// N.sort((a, b) => a - b);
// N = N.filter((e) => e % 2 !== 0);
// const result =
//   N.length > 0 ? N.reduce((acc, cur) => acc + cur) + '\n' + N[0] : -1;
// console.log(result);

// 1247번 문제
// const input = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const A = [];
// for (let i = 0; i < 3; i++) {
//   const N = input.shift();
//   const B = input.splice(0, N);
//   A.push(B);
// }
// const result = A.map((e) => {
//   let C = e.reduce((acc, cur) => BigInt(acc) + BigInt(cur));
//   if (C === 0n) return 0;
//   if (C < 0) return '-';
//   if (C > 0) return '+';
// });
// console.log(result.join('\n'));

// 1292번 문제
// let [A, B] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split(' ')
//   .map(Number);
// let i = 0;
// let _B = B;
// const arr = [];
// while (_B > 0) {
//   if (_B === 0) {
//     break;
//   }
//   if (_B - i < 0) {
//     for (let j = 0; j < _B; j++) {
//       arr.push(i);
//     }
//     break;
//   }
//   _B -= i;
//   for (let j = 0; j < i; j++) {
//     arr.push(i);
//   }
//   i++;
// }
// const arr2 = arr.splice(A - 1, B - A + 1);
// const result = arr2.reduce((acc, cur) => acc + cur);
// console.log(result);

// 1032번 문제
// const [N, ...input] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const arr = input.map((e) => e.split(''));
// const offset = [...arr[0]];
// const result = new Array(offset.length).fill('');
// offset.forEach((e, j) => {
//   for (let i = 0; i < N; i++) {
//     arr[i].shift() !== e
//       ? (result[j] = '?')
//       : result[j] !== '?' && (result[j] = e);
//   }
// });
// console.log(result.join(''));

// 1271번 문제
// const [n, m] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split(' ')
// .map(BigInt);
// console.log(`${n / m}\n${n % m}`);

// 1809번 문제
// console.log(
//   String.fromCharCode(40),
//   String.fromCharCode(95),
//   String.fromCharCode(95),
//   String.fromCharCode(95),
//   String.fromCharCode(41) + '\n' + String.fromCharCode(40),
//   String.fromCharCode(111),
//   String.fromCharCode(0),
//   String.fromCharCode(111),
//   String.fromCharCode(41),
//   String.fromCharCode(95),
//   String.fromCharCode(95),
//   String.fromCharCode(95),
//   String.fromCharCode(47) + '\n' + String.fromCharCode(0),
//   String.fromCharCode(64),
//   String.fromCharCode(64),
//   String.fromCharCode(0),
//   String.fromCharCode(0),
//   String.fromCharCode(0),
//   String.fromCharCode(0),
//   String.fromCharCode(0),
//   String.fromCharCode(0),
//   String.fromCharCode(92) + '\n' + String.fromCharCode(0),
//   String.fromCharCode(0),
//   String.fromCharCode(92),
//   String.fromCharCode(0),
//   String.fromCharCode(95),
//   String.fromCharCode(95),
//   String.fromCharCode(95),
//   String.fromCharCode(95),
//   String.fromCharCode(44),
//   String.fromCharCode(47) + '\n' + String.fromCharCode(0),
//   String.fromCharCode(0),
//   String.fromCharCode(47),
//   String.fromCharCode(47),
//   String.fromCharCode(0),
//   String.fromCharCode(0),
//   String.fromCharCode(0),
//   String.fromCharCode(47),
//   String.fromCharCode(47) + '\n' + String.fromCharCode(0),
//   String.fromCharCode(94),
//   String.fromCharCode(94),
//   String.fromCharCode(0),
//   String.fromCharCode(0),
//   String.fromCharCode(0),
//   String.fromCharCode(94),
//   String.fromCharCode(94)
// );

// 2338번 문제
// const [n, m] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n')
//   .map(BigInt);
// console.log(`${n + m}\n${n - m}\n${n * m}`);

// 9653번 문제 STAR WARS
// console.log(
//   '    8888888888  888    88888\n   88     88   88 88   88  88\n    8888  88  88   88  88888\n       88 88 888888888 88   88\n88888888  88 88     88 88    888888\n\n88  88  88   888    88888    888888\n88  88  88  88 88   88  88  88\n88 8888 88 88   88  88888    8888\n 888  888 888888888 88  88      88\n  88  88  88     88 88   88888888\n'
// );

// console.log(
//   "       _.-;;-._\n'-..-'|   ||   |\n'-..-'|_.-;;-._|\n'-..-'|   ||   |\n'-..-'|_.-''-._|"
// );

// 27323번 문제
// const [A, B] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n')
//   .map(Number);
// console.log(A * B);

// 5596번 문제
// const [A, B] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const arr1 = A.split(' ')
//   .map(Number)
//   .reduce((acc, cur) => acc + cur);
// const arr2 = B.split(' ')
//   .map(Number)
//   .reduce((acc, cur) => acc + cur);

// console.log(arr1 < arr2 ? arr2 : arr1);

// 10953번 문제
// const [T, ...arr] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// let result = '';
// arr.forEach((e) => {
//   const [A, B] = e.split(',').map(Number);
//   result += A + B + '\n';
// });
// console.log(result);

// 1550번 문제
// const A = require('fs').readFileSync('./input.txt', 'utf-8').trim();
// console.log(parseInt(A, 16));

// 1212번 문제
// const [D, H, W] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split(' ')
//   .map(Number);
// const ratio = D / Math.sqrt(H ** 2 + W ** 2);
// const _H = Math.floor(H * ratio);
// const _W = Math.floor(W * ratio);
// console.log(_H, _W);

// 500엔, 100엔, 50엔, 10엔, 5엔, 1엔
// 5585번 문제
// let B =
//   1000 -
//   parseInt(require("fs").readFileSync("./input.txt", "utf-8").trim(), 10);
// let count = 0;
// const coin = [500, 100, 50, 10, 5, 1];
// coin.forEach((e) => {
//   count += parseInt(B / e, 10);
//   B %= e;
// });
// console.log(count);

// while (B > 0) {
// switch (B) {
//   case B >= 500:
//     B -= 500;
//   count++;
//     break;
//     case B < 500 && B >= 100:
//       B -= 100;
//       count++;
//     break;
//     case B < 100 && B >= 50:
//       B -= 50;
//       count++;
//     break;
//     case B < 50 && B >= 10:
//       B -= 10;
//       count++;
//     break;
//     case B < 10 && B >= 5:

//     break;
//     case B:
//     B -= 5;
//   count++;
//     break;
//   default:
//     B -= 1;
//   count++;
//     break;
// }
//   if (B >= 500) {
//     B -= 500;
//     count++;
//   }
//   if (B < 500 && B >= 100) {
//     B -= 100;
//     count++;
//   }
//   if (B < 100 && B >= 50) {
//     B -= 50;
//     count++;
//   }
//   if (B < 50 && B >= 10) {
//     B -= 10;
//     count++;
//   }
//   if (B < 10 && B >= 5) {
//     B -= 5;
//     count++;
//   }
//   if (B < 5 && B >= 1) {
//     B -= 1;
//     count++;
//   }
// }
// console.log(count);

// 2745번 문제
// const [N, B] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split(' ');
// console.log(parseInt(N, B));

// 1212번 문제
// const A = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('');
// const result = [];
// A.forEach((e) => {
//   const B = [];
//   while (e > 0) {
//     if (e === 0) break;
//     if (e % 2 === 0) {
//       B.unshift(0);
//       e /= 2;
//     } else {
//       B.unshift(1);
//       e = (e - 1) / 2;
//     }
//   }
//   if (B.length !== 3) {
//     const C = 3 - B.length;
//     for (let i = 0; i < C; i++) {
//       B.unshift(0);
//     }
//   }
//   result.push(...B);
// });
// while (1) {
//   if (
//     (result.length > 1 && result[0] !== 0) ||
//     (result.length === 1 && result[0] === 0)
//   )
//     break;
//   result.shift();
// }
// console.log(result.join(''));

// 1748번 문제
// let N = parseInt(require('fs').readFileSync('./input.txt', 'utf-8').trim(), 10);
// let result = 0;
// for (let i = 1; i < N; i *= 10) {
//   result += N - i + 1;
// }
// console.log(result);

// const a = Math.floor(Math.log10(N));
// const b = 10 ** a - 1;
// let result = (N - b) * (a + 1);
// for (let i = 0; i < a; i++) {
//   result += ((b % 10 ** (i + 1)) - (10 ** i - 1)) * (i + 1);
// }
// console.log(result);

// 11399번 문제
// const input = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const N = Number(input[0]);
// const P = input[1]
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);
// let result = 0;
// for (let i = P.length; i > 0; i--) {
//   result += P.reduce((acc, cur) => acc + cur);
//   P.pop();
// }
// console.log(result);

// 11047번 문제
// const input = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// let [N, K] = input.shift().split(' ').map(Number);
// const A = input.map(Number).sort((a, b) => b - a);
// let count = 0;
// let i = 0;
// while (K > 0) {
//   if (K === 0) break;
//   if (K < A[i]) {
//     i++;
//   } else {
//     count += Math.floor(K / A[i]);
//     K %= A[i];
//   }
// }
// console.log(count);

// 1920번 문제
// const input = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const A = new Map(
//   input[1]
//     .split(' ')
//     .map(Number)
//     .sort((a, b) => a - b)
//     .map((e) => [e, e])
// );
// const B = input[3].split(' ').map(Number);
// let result = [];
// B.forEach((e) => (A.get(e) ? result.push(1) : result.push(0)));
// console.log(result.join('\n'));

// 10773번 문제
// const [K, ...A] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n')
//   .map(Number);
// const B = [];
// A.forEach((e) => (e === 0 ? B.pop() : B.push(e)));
// const result = B.length === 0 ? 0 : B.reduce((acc, cur) => acc + cur);
// console.log(result);

// 10845번 문제
// const [N, ...A] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const queue = [];
// const result = [];
// let ans;
// A.forEach((e) => {
//   switch (e) {
//     case 'pop':
//       ans = queue.length === 0 ? -1 : queue.shift();
//       result.push(ans);
//       break;
//     case 'size':
//       ans = queue.length;
//       result.push(ans);
//       break;
//     case 'empty':
//       ans = queue.length === 0 ? 1 : 0;
//       result.push(ans);
//       break;
//     case 'front':
//       ans = queue.length === 0 ? -1 : queue[0];
//       result.push(ans);
//       break;
//     case 'back':
//       ans = queue.length === 0 ? -1 : queue[queue.length - 1];
//       result.push(ans);
//       break;
//     default:
//       const [_, X] = e.split(' ').map(Number);
//       queue.push(X);
//       break;
//   }
// });
// console.log(result.join('\n'));

// 2577번 문제
// const [A, B, C] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n')
//   .map(Number);
// const M = (A * B * C)
//   .toString()
//   .split('')
//   .map(Number)
//   .sort((a, b) => a - b);
// const R = new Array(10).fill(0);
// let [i, j] = [0, 0];
// while (i < 10) {
//   if (M[j] === i) {
//     R[i] += 1;
//     j++;
//   } else {
//     i++;
//   }
// }
// console.log(R.join('\n'));

// 31403번 문제
// const [A, B, C] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const _A = +A;
// const _B = +B;
// const _C = +C;
// const R1 = _A + _B - _C;
// const R2 = A + B - C;
// console.log(R1 + '\n' + R2);

// 2920번 문제
// const scales = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split(' ')
//   .map(Number);
// let result = '';
// if (scales[0] === 1) {
//   result = 'ascending';
// }
// if (scales[0] === 8) {
//   result = 'descending';
//   scales.reverse();
// }
// for (let i = 0; i < scales.length; i++) {
//   if (scales[i] === i + 1) {
//     continue;
//   } else {
//     result = 'mixed';
//     break;
//   }
// }
// console.log(result);

// 11005번 문제
// const [N, B] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split(' ')
//   .map(Number);
// console.log(N.toString(B).toUpperCase());

// const [N, M] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split(' ')
//   .map(Number);
// const arr = new Array(N).fill(0).map((e, i) => (e = i + 1));

// const result = [];
// while(1){
//   if (arr[0] === i + 1)
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[0] === i + 1) {
//     arr.push(...arr.splice(1, 1));
//     result.push(arr);
//     if (arr[1] === i + 2) {
//       arr.push(...arr.splice(0, 1));
//       continue;
//     }
//   }
// }
// arr.push(...arr.splice(0, 1));
// console.log(arr);
// console.log(result);

// 2609번 문제
// let [A, B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// let [a, b] = [A, B];
// if (A < B) [A, B] = [B, A];
// while (A % B !== 0) {
//   let R = A % B;
//   if (R !== 0) [A, B] = [B, R];
// }
// console.log(`${B}\n${(a * b) / B}`);

// 1181번 문제 풀어야함
// const [_, ...input] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const setInput = new Set(input);
// const filteredInput = [...setInput];
// filteredInput.sort();
// filteredInput.sort((a, b) => a.length - b.length);
// console.log(filteredInput.join("\n"));

// 11653번 문제
// const N = Number(require("fs").readFileSync("./input.txt", "utf-8").trim());
// let n = N;
// let i = 2;
// let result = "";
// while (true) {
//   if (n === 1) break;
//   if (n % i === 0) {
//     n /= i;
//     result += `${i}\n`;
//     i = 2;
//   } else {
//     i++;
//   }
// }
// console.log(result);

// 10814번 문제
// const [_, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const newArr = arr.map((e) => e.split(" "));
// newArr.sort((a, b) => a[0] - b[0]);
// console.log(newArr.map((e) => e.join(" ")).join("\n"));

// 1427번 문제
// const N = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("")
//   .map(Number);
// console.log(N.sort((a, b) => b - a).join(""));

// 18258번 문제 단순 큐 문제가 아닌가봄 틀렸음
// const [N, ...Q] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const queue = [];
// let result = '';
// for (let i = 0; i < N; i++) {
//   const qLen = queue.length;
//   switch (Q[i]) {
//     case 'pop':
//       result = qLen !== 0 ? queue.shift() : -1;
//       break;
//     case 'size':
//       result = qLen;
//       break;
//     case 'empty':
//       result = qLen !== 0 ? 0 : 1;
//       break;
//     case 'front':
//       result = qLen !== 0 ? queue[0] : -1;
//       break;
//     case 'back':
//       result = qLen !== 0 ? queue[qLen - 1] : -1;
//       break;
//     default:
//       const [_, num] = Q[i].split(' ');
//       queue.push(num);
//       break;
//   }
//   result !== '' ? console.log(result) : '';
// }
// 11650번 문제
// const [_, ...Q] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const newQ = Q.map((e) => e.split(" "));
// newQ.sort((a, b) => {
//   if (a[0] === b[0]) return a[1] - b[1];
//   return a[0] - b[0];
// });
// console.log(newQ.map((e) => e.join(" ")).join("\n"));

//11651번 문제
// const [_, ...Q] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const newQ = Q.map((e) => e.split(" "));
// newQ.sort((a, b) => {
//   if (a[1] === b[1]) return a[0] - b[0];
//   return a[1] - b[1];
// });
// console.log(newQ.map((e) => e.join(" ")).join("\n"));

// 10866번 문제
// const [_, ...Q] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const newQ = Q.map((e) => e.split(" "));
// const deQue = [];

// const check = (e) => {
//   switch (e[0]) {
//     case "push_front":
//       deQue.unshift(e[1]);
//       break;
//     case "push_back":
//       deQue.push(e[1]);
//       break;
//     case "pop_front":
//       deQue.length > 0 ? console.log(deQue.shift()) : console.log("-1");
//       break;
//     case "pop_back":
//       deQue.length > 0 ? console.log(deQue.pop()) : console.log("-1");
//       break;
//     case "size":
//       console.log(deQue.length);
//       break;
//     case "front":
//       deQue.length > 0 ? console.log(deQue[0]) : console.log("-1");
//       break;
//     case "back":
//       deQue.length > 0
//         ? console.log(deQue[deQue.length - 1])
//         : console.log("-1");
//       break;
//     default:
//       deQue.length > 0 ? console.log(0) : console.log(1);
//       break;
//   }
// };
// newQ.forEach((e) => check(e));

// 1934번 문제
// const [_, ...Q] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const newQ = Q.map((e) => e.split(" "));
// const result = [];
// newQ.map((e) => {
//   let a = Number(e[0]);
//   let b = Number(e[1]);
//   if (a < b) [a, b] = [b, a];
//   while (true) {
//     if (b === 0) {
//       result.push((e[0] * e[1]) / a);
//       break;
//     }
//     [a, b] = [b, a % b];
//   }
// });
// console.log(result.join("\n"));

// 2851번 문제
// const score = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// let compare = 0;
// let offset = 0;
// let result = 0;
// for (let i = 0; i < score.length; i++) {
//   compare = offset;
//   offset += score[i];
//   if (offset >= 100) {
//     if (Math.abs(100 - compare) >= Math.abs(100 - offset)) {
//       result = offset;
//       break;
//     } else if (Math.abs(100 - compare) < Math.abs(100 - offset)) {
//       result = compare;
//       break;
//     }
//   }
// }
// console.log(result);
// 위는 왜 오답인지 모르겠음
// const solution = (score) => {
//   let offset = 0;
//   let targetScore = 100;
//   let min = Number.MAX_SAFE_INTEGER;
//   let diff = 0;
//   let result = 0;
//   score.forEach((e) => {
//     offset += e;
//     diff = Math.abs(offset - targetScore);
//     if (diff <= min) {
//       min = diff;
//       result = Math.max(result, offset);
//     }
//   });
//   return result;
// };
// let score = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// console.log(solution(score));

// 1193번 문제
// const X = Number(require("fs").readFileSync("./input.txt", "utf-8").trim());
// let k = 1;
// let kStack = 1;
// while (true) {
//   if (X <= kStack) break;
//   k++;
//   kStack += k;
// }
// k % 2
//   ? console.log(kStack - X + 1 + "/" + (k - (kStack - X)))
//   : console.log(k - (kStack - X) + "/" + (kStack - X + 1));
// if (k % 2) console.log(kStack - X + 1 + "/" + (k - (kStack - X)));
// else console.log(k - (kStack - X) + "/" + (kStack - X + 1));

// 1676번 문제
// const N = BigInt(require("fs").readFileSync("./input.txt", "utf-8").trim());
// let factorial = BigInt(1);
// let count = 0;
// const factorialCalc = (N) => {
//   if (N === BigInt(0)) {
//     return;
//   }
//   factorial *= N;
//   factorialCalc(N - BigInt(1));
// };
// factorialCalc(N);
// const strFactorial = factorial.toString().split("").reverse();
// for (let i = 0; i < strFactorial.length; i++) {
//   if (strFactorial[i] === "0") count++;
//   else break;
// }
// console.log(count);

// const N = Number(require("fs").readFileSync("./input.txt", "utf-8").trim());
// const a = N >= 5 ? parseInt(N / 5, 10) : 0;
// const b = parseInt(a / 5, 10);
// const c = parseInt(N / 125, 10) || 0;
// console.log(a + b + c);

// 13241번 문제
// const [A, B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// let [C, D] = [A, B];
// if (C < D) [C, D] = [D, C];
// while (true) {
//   if (D === 0) break;
//   [C, D] = [D, C % D];
// }
// console.log((A * B) / C);

// 7785번 문제
// const [_, ...check] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const checkInfo = check.map((e) => e.split(" "));
// const remain = [];
// checkInfo.forEach((e) => {
//   if (e[1] === "enter") remain.push(e[0]);
//   if (e[1] === "leave") {
//     remain.splice(
//       remain.find((name) => name === e[0]),
//       1
//     );
//   }
// });
// remain.sort().reverse();
// console.log(remain.join("\n"));

// const [_, ...check] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const result = [];
// const list = check.map((e) => e.split(" "));
// const checkList = new Map(list.map((e) => [e[0], e[1]]));
// for (const key of checkList.keys()) {
//   if (checkList.get(key) === "enter") result.push(key);
// }
// result.sort().reverse();
// console.log(result.join("\n"));

// 2446번 문제
// const N = Number(require("fs").readFileSync("./input.txt", "utf-8").trim());
// for (let i = 0; i < 2 * N - 1; i++) {
//   let result = "";
//   if (i < N) {
//     for (let k = 0; k < i; k++) {
//       result += " ";
//     }
//     for (let j = 0; j < 2 * (N - i) - 1; j++) {
//       result += "*";
//     }
//     console.log(result);
//   } else {
//     for (let k = 0; k < 2 * N - i - 2; k++) {
//       result += " ";
//     }
//     for (let j = 0; j < 2 * (i - N) + 3; j++) {
//       result += "*";
//     }
//     console.log(result);
//   }
// }

// 2018번 문제
// const N = Number(require("fs").readFileSync("./input.txt", "utf-8").trim());
// let sum = 0;
// let j = 1;
// let count = 0;
// while (true) {
//   if (j > N) break;
//   for (let i = j; i <= N + 1; i++) {
//     if (sum === N) {
//       count++;
//       break;
//     } else if (sum > N) {
//       break;
//     }
//     sum += i;
//   }
//   j++;
//   sum = 0;
// }
// console.log(count);

// 1769번 문제
// let X = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("")
//   .map(Number);
// let sum = 0;
// let count = 0;
// while (X.length > 1) {
//   sum = X.reduce((acc, cur) => acc + cur, 0);
//   X = sum.toString().split("").map(Number);
//   count++;
// }
// console.log(count);
// console.log(X % 3 ? "NO" : "YES");

// 16435번 문제
// const [A, H] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// let [_, L] = A.split(" ").map(Number);
// const h = H.split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// h.forEach((e) => L >= e && L++);
// console.log(L);

// 14730번 문제
// const [_, ...nums] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const differential = nums.map((e) => e.split(" ").map(Number));
// const result = differential.reduce((acc, cur) => acc + cur[0] * cur[1], 0);
// console.log(result);

// 11866번 문제
// const [N, K] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// let arr = new Array(N).fill(0).map((e, i) => i + 1);
// let result = [];
// while (arr.length !== 0) {
//   for (let i = 0; i < K - 1; i++) {
//     arr.push(arr.shift());
//   }
//   result.push(arr.shift());
// }
// console.log(`<${result.flat().join(", ")}>`);

// 28278번 문제
// const [_, ...qna] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const filteredQna = qna.map((e) => e.split(" ").map(Number));
// const stack = [];
// let outputTxt;
// let result = [];
// filteredQna.forEach((e) => {
//   if (e[0] === 1) {
//     stack.push(e[1]);
//   } else {
//     if (e[0] === 2) outputTxt = stack.length !== 0 ? stack.pop() : -1;
//     else if (e[0] === 3) outputTxt = stack.length;
//     else if (e[0] === 4) outputTxt = stack.length !== 0 ? 0 : 1;
//     else if (e[0] === 5)
//       outputTxt = stack.length !== 0 ? stack[stack.length - 1] : -1;
//     result.push(outputTxt);
//   }
// });
// console.log(result.join("\n"));

// 3036번 문제
// const [_, O] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [first, ...arrO] = O.split(" ").map(Number);
// const result = [];
// arrO.forEach((e) => {
//   let [A, B] = [first, e];
//   while (true) {
//     if (B === 0) break;
//     [A, B] = [B, A % B];
//   }
//   result.push(`${first / A}/${e / A}`);
// });
// console.log(result.join("\n"));

// 1735번 문제
// const [ONE, TWO] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const numeratorFunc = (a, b, l) => (a * l) / b;
// const [A1, B1] = ONE.split(" ").map(Number);
// const [A2, B2] = TWO.split(" ").map(Number);
// let [b1, b2] = B1 < B2 ? [B2, B1] : [B1, B2];
// while (b2 !== 0) [b1, b2] = [b2, b1 % b2];
// const G = b1;
// const L = (B1 * B2) / G;
// const numeratorOne = numeratorFunc(A1, B1, L);
// const numeratorTwo = numeratorFunc(A2, B2, L);
// let numerator = numeratorOne + numeratorTwo;
// let denominator = L;
// let [n1, n2] =
//   numerator < denominator ? [denominator, numerator] : [numerator, denominator];
// while (n2 !== 0) [n1, n2] = [n2, n1 % n2];
// console.log(numerator / n1, denominator / n1);

// 5800번 문제
// const [_, ...CLASS] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const arr = CLASS.map((e) => e.split(" ").map(Number));
// const result = [];
// arr.forEach((e) => {
//   let minMaxGap = [];
//   let gap = [];
//   e.shift();
//   e.sort((a, b) => b - a);
//   for (let i = 1; i < e.length; i++) gap.push(e[i - 1] - e[i]);
//   minMaxGap = [Math.max(...e), Math.min(...e), Math.max(...gap)];
//   result.push(minMaxGap);
// });
// result.forEach((e, i) => {
//   console.log(`Class ${i + 1}`);
//   console.log(`Max ${e[0]}, Min ${e[1]}, Largest gap ${e[2]}`);
// });

// 1158번 문제
// const [N, K] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// let arr = new Array(N).fill(0).map((e, i) => i + 1);
// let result = [];
// while (arr.length !== 0) {
//   for (let i = 0; i < K - 1; i++) {
//     arr.push(arr.shift());
//   }
//   result.push(arr.shift());
// }
// console.log(`<${result.flat().join(", ")}>`);

// 1259번 문제
// let qus = require("fs").readFileSync("./input.txt", "utf-8").trim().split("\n");
// const result = [];
// qus.pop();
// qus = qus.map((e) => e.split(""));
// qus.forEach((e) =>
//   e.join("") === e.reverse().join("") ? result.push("yes") : result.push("no")
// );
// console.log(result.join("\n"));

// 2740번 문제
// const arr = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const NM = (arr) => arr.shift().split(" ").map(Number);
// const Splice = (arr, N) => arr.splice(0, N);
// const Split = (arr) => arr.map((e) => e.split(" ").map(Number));
// const [N1, M1] = NM(arr);
// let A = Splice(arr, N1);
// const [N2, M2] = NM(arr);
// let B = Splice(arr, N2);
// let result = Array.from(Array(N1), () => new Array(M2));
// A = Split(A);
// B = Split(B);
// A.forEach((e, k) => {
//   for (let i = 0; i < M2; i++) {
//     let sum = 0;
//     for (let j = 0; j < N2; j++) {
//       sum += e[j] * B[j][i];
//     }
//     result[k][i] = sum;
//   }
// });
// result = result.map((e) => e.join(" ")).join("\n");
// console.log(result);

// 2164번
// const N = Number(require("fs").readFileSync("./input.txt", "utf-8").trim());
// let i = 0;
// while (2 ** i < N) i++;
// console.log(2 ** i - 2 * (2 ** i - N));

// 5086번 문제
// const arr = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// arr.pop();
// const newArr = arr.map((e) => e.split(" ").map(Number));
// const result = new Array(newArr.length).fill();
// newArr.forEach((e, i) => {
//   result[i] = !(e[0] % e[1])
//     ? "multiple"
//     : !(e[1] % e[0])
//     ? "factor"
//     : "neither";
// });
// console.log(result.join("\n"));

// 2720번 문제
// const [_, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// const change = [25, 10, 5, 1];
// const result = [];
// let i = 0;
// arr.forEach((e) => {
//   let line = new Array(change.length).fill(0);
//   while (i < 4) {
//     if (e / change[i] > 0) {
//       line[i] = Math.floor(e / change[i]);
//       e -= Math.floor(e / change[i]) * change[i];
//     }
//     i++;
//   }
//   result.push(line.join(" "));
//   i = 0;
// });
// console.log(result.join("\n"));

// 10250번.
// const [T, ...Q] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const result = new Array(T);
// Q.forEach((e, i) => {
//   const [H, W, N] = e.split(" ").map(Number);
//   const layer = !(N % H) ? H : N % H;
//   const room = !(N % H) ? N / H : parseInt(N / H, 10) + 1;
//   result[i] = `${layer}${room < 10 ? "0" + room : room}`;
// });
// console.log(result.join("\n"));

// 11050번 문제
// const [N, K] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// let [x, y] = [1, 1];
// for (let i = 0; i < K; i++) {
//   y *= i + 1;
//   x *= N - i;
// }
// console.log(x / y);

// 30802번 문제
// const [N, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const bigN = BigInt(N);
// const size = arr[0].split(" ").map(BigInt);
// const [T, P] = arr[1].split(" ").map(BigInt);
// let count = new Array(size.length);
// size.forEach((e, i) =>
//   e % T > BigInt(0) ? (count[i] = e / T + BigInt(1)) : (count[i] = e / T)
// );
// const total = count.reduce((acc, cur) => acc + cur, BigInt(0));
// const num = Number(bigN / P);
// console.log(Number(total));
// console.log(num, N - Number(P) * num);

//1978번
// const [N, nums] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const arr = nums.split(" ").map(Number);
// let count = 0;
// arr.forEach((e) => {
//   let j = 1;
//   let checkCount = 0;
//   while (e >= j) {
//     !(e % j) && checkCount++;
//     j++;
//   }
//   checkCount === 2 && count++;
// });
// console.log(count);

// 2798번 문제
// const [nums, card] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, M] = nums.split(" ").map(Number);
// const cardList = card.split(" ").map(Number);
// const arr = [];
// let sum = 0;
// let result = 0;
// while (cardList.length >= 3) {
//   sum = 0;
//   let target = cardList.shift();
//   for (let j = 0; j < cardList.length; j++) {
//     let next = cardList[j];
//     for (let i = j + 1; i < cardList.length; i++) {
//       let third = cardList[i];
//       sum = target + next + third;
//       arr.push(sum);
//     }
//   }
// }
// arr.sort((a, b) => a - b);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > M) {
//     result = arr[i - 1];
//     break;
//   }
//   result = arr[i];
// }
// console.log(result);

//28702번 문제
// const arr = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// let numbers = [];
// arr.forEach((e) => !isNaN(e) && numbers.push(Number(e)));
// let num = numbers[0] + arr.length - arr.indexOf(`${numbers[0]}`);
// let result;
// if (!(num % 15)) result = "FizzBuzz";
// else if (!(num % 3) && num % 5 !== 0) result = "Fizz";
// else if (!(num % 5) && num % 3 !== 0) result = "Buzz";
// else result = num;
// console.log(result);

// 11557번 문제
// const [T, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const N = [];
// const caseList = [];
// const result = new Array(Number(T));
// for (let i = 0; i < T; i++) {
//   let n = Number(arr.shift());
//   let list = arr.splice(0, n);
//   N.push(n);
//   caseList.push(list);
// }
// caseList.forEach((e, i) => {
//   let processedArr = e.map((el) => el.split(" "));
//   let maxNum = ["", 0];
//   processedArr.forEach(
//     (e) => maxNum[1] < Number(e[1]) && (maxNum = [e[0], e[1]])
//   );
//   result[i] = maxNum[0];
// });
// console.log(result.join("\n"));

// 1021번 문제
// const [A, B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, M] = A.split(" ").map(Number);
// const arr = B.split(" ").map(Number);
// const targetArr = new Array(N).fill(0).map((e, i) => (e += i + 1));
// let count = 0;
// arr.forEach((e) => {
//   let target = targetArr.indexOf(e);
//   let move;
//   while (true) {
//     if (target === 0) {
//       targetArr.shift();
//       break;
//     }
//     if (Math.ceil(targetArr.length / 2) >= target + 1) {
//       move = targetArr.shift();
//       targetArr.push(move);
//       target = targetArr.indexOf(e);
//     } else {
//       move = targetArr.pop();
//       targetArr.unshift(move);
//       target = targetArr.indexOf(e);
//     }
//     count++;
//   }
// });
// console.log(count);

// 2559번 문제
// const [A, B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, K] = A.split(" ").map(Number);
// const arr = B.split(" ").map(Number);
// const targetIndex = N - K + 1;
// const sumList = new Array(targetIndex).fill(0);
// for (let i = 0; i < targetIndex; i++) {
//   let sum = 0;
//   for (let j = i; j < i + K; j++) {
//     sum += arr[j];
//   }
//   sumList[i] = sum;
// }
// console.log(Math.max(...sumList));

// 2903번 문제
// const N = Number(require("fs").readFileSync("./input.txt", "utf-8").trim());
// let num = 2;
// for (let i = 0; i < N; i++) num += num - 1;
// console.log(num ** 2);

// 2292번 문제
// const N = Number(require("fs").readFileSync("./input.txt", "utf-8").trim());
// let i = 0;
// let j = 1;
// while (1 + i * 6 < N) {
//   i += j;
//   j++;
// }
// console.log(j);

// 2501번 문제
// const [N, K] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const measure = [];

// for (let i = 1; i <= N; i++) !(N % i) && measure.push(i);
// measure.sort((a, b) => a - b);
// console.log(measure.length < K ? 0 : measure[K - 1]);

// 2581번 문제
// let [M, N] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// const result = [];
// while (M <= N) {
//   const measure = [];
//   for (let j = 1; j <= M; j++) !(M % j) && measure.push(j);
//   measure.length === 2 && result.push(M);
//   M++;
// }
// result.sort((a, b) => a - b);
// const sum = result.reduce((acc, cur) => acc + cur, 0);
// console.log(result.length ? `${sum}\n${result[0]}` : -1);

// 9506번 문제
// const arr = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// const lineArr = [];
// const result = [];
// arr.pop();
// arr.forEach((e) => {
//   const line = [];
//   let i = 1;
//   while (e !== i) {
//     !(e % i) && line.push(i);
//     i++;
//   }
//   lineArr.push(line);
// });
// lineArr.forEach((e, i) => {
//   let sum = e.reduce((acc, cur) => acc + cur, 0);
//   sum === arr[i]
//     ? result.push(`${arr[i]} = ${e.join(" + ")}`)
//     : result.push(`${arr[i]} is NOT perfect.`);
// });
// console.log(result.join("\n"));

// 3009번 문제
// let arr = require("fs").readFileSync("./input.txt", "utf-8").trim().split("\n");
// arr = arr.map((e) => e.split(" ").map(Number));
// arr.sort((a, b) => a[0] - b[0]);
// const setLArr = new Set(arr.map((e) => e[0]));
// const setRArr = new Set(arr.map((e) => e[1]));
// const result = [];
// const solution = (setArr, num) =>
//   Array.from(setArr).forEach((e) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) e === arr[i][num] && count++;
//     count === 1 && result.push(e);
//   });
// solution(setLArr, 0);
// solution(setRArr, 1);
// console.log(result.join(" "));

// 24266번문제
// const n = require("fs").readFileSync("./input.txt", "utf-8").trim();
// function solution(n) {
//   let sum = 0;
//   for (let i = 1; i < n; i++) sum += i;
//   return sum;
// }
// console.log(`${solution(n)}\n${1}`);
// const n = BigInt(require("fs").readFileSync("./input.txt", "utf-8").trim());
// console.log(`${n * n * n}\n${3}`);

// 1026번 문제
// const [N, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [A, B] = arr.map((e) => e.split(" ").map(Number));
// const sortedA = new Array(N);
// let result = 0;
// let j = 0;
// A.sort((a, b) => a - b);
// while (j < B.length) {
//   const target = B[j];
//   let indexNum = 0;
//   for (let i = 0; i < B.length; i++) target > B[i] && indexNum++;
//   result += A[A.length - indexNum - 1] * B[j];
//   sortedA[j] = A[A.length - 1 - indexNum];
//   j++;
// }
// console.log(result);
// const [A, B] = arr.map((e) =>
//   e
//     .split(" ")
//     .map(Number)
//     .sort((a, b) => a - b)
// );
// let sum = 0;
// A.forEach((e, i) => {
//   sum += e * B[B.length - 1 - i];
// });
// console.log(sum);

// 9237번 문제
// let [_, arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// arr = arr
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => b - a);
// let date = 1;
// for (let i = 0; i < arr.length; i++) {
//   arr[i] += date;
//   date++;
// }
// console.log(Math.max(...arr) + 1);

// 14659번 문제
// const [_, arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const processedArr = arr.split(" ").map(Number);
// const countOutput = [];
// while (processedArr.length) {
//   let count = 0;
//   const target = processedArr.shift();
//   for (let i = 0; i < processedArr.length; i++) {
//     if (target < processedArr[i]) {
//       countOutput.push(count);
//       break;
//     } else if (target > processedArr[i] && i === processedArr.length - 1) {
//       count++;
//       countOutput.push(count);
//       break;
//     }
//     count++;
//   }
// }
// console.log(Math.max(...countOutput));

// 1874번 문제
// const [n, ...target] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// const arr = new Array(n).fill(1).map((e, i) => (e += i));
// const result = [];
// let errorMsg = "";
// const stack = [];

// for (let i = 0; i < target.length; i++) {
//   if (errorMsg) break;
//   while (true) {
//     if (stack.includes(target[i])) {
//       if (stack[stack.length - 1] === target[i]) {
//         stack.pop();
//         result.push("-");
//         break;
//       }
//       if (stack.length - 1 !== stack.indexOf(target[i])) {
//         errorMsg = "NO";
//         break;
//       }
//     }
//     const element = arr.shift();
//     stack.push(element);
//     result.push("+");
//   }
// }
// console.log(errorMsg ? errorMsg : result.join("\n"));
// target.forEach((e) => {
//   while (true) {
//     if (stack.includes(e)) {
//       if (stack[stack.length - 1] === e) {
//         stack.pop();
//         result.push("-");
//         break;
//       }
//       if (stack.length - 1 !== stack.indexOf(e)) {
//         errorMsg = "NO";
//         break;
//       }
//     }
//     const element = arr.shift();
//     stack.push(element);
//     result.push("+");
//   }
// });
// console.log(errorMsg ? errorMsg : result.join("\n"));

// 9063번 문제
// let [N, ...point] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// point = point.map((e) => e.split(" ").map(Number));
// const x = [];
// const y = [];
// point.forEach((e) => x.push(e[0]) && y.push(e[1]));
// const result =
//   (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
// console.log(result);

//15894번 문제
// const n = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// console.log(n * 4);

// 25305번 문제
// const [A, B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, k] = A.split(" ").map(Number);
// const arr = B.split(" ")
//   .map(Number)
//   .sort((a, b) => b - a);
// console.log(arr[k - 1]);

//24267번 문제
// const n = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// console.log(`${(BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6)}\n3`);

//24313번 문제
// let [A, c, n0] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// let [a1, a0] = A.split(" ").map(Number);
// let result = 1;
// c = +c;
// n0 = +n0;
// for (let n = n0; n <= 100; n++) {
//   if (a1 * n + a0 > c * n) {
//     result = 0;
//     break;
//   }
// }
// console.log(result);

// 10870번 문제
// const n = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const result = [0, 1];
// let i = 2;
// function fibonacci(num) {
//   result.push(result[num - 1] + result[num - 2]);
//   num < n && fibonacci((i += 1));
// }
// fibonacci(i);
// console.log(result[n]);

// 27433번 문제
// const n = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// let i = 1;
// let result = 1;
// function factorial(num) {
//   if (num <= n && num !== 0) {
//     result *= num;
//     factorial((i += 1));
//   }
// }
// factorial(i);
// console.log(result);

// 2407번 문제
// const [n, m] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(BigInt);
// let a = BigInt(1);
// let b = BigInt(1);
// for (let i = BigInt(1); i <= m; i++) {
//   a *= i;
//   b *= n - i + BigInt(1);
// }
// console.log(`${b / a}`);

// 15740번 문제
// const [A, B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(BigInt);
// console.log(`${A + B}`);

// 10826번 문제
// const n = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const memo = new Array(n + 1).fill(0);
// const fibo = (i) => {
//   // if (i === 0) return 0;
//   if (i <= 1) return BigInt(i);
//   if (memo[i] !== 0) return memo[i];
//   return (memo[i] = fibo(i - 1) + fibo(i - 2));
// };
// console.log(`${fibo(n)}`);

// const n = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const fibo = (n) => {
//   if (n <= 1) return BigInt(n);
//   let prev = BigInt(0);
//   let curr = BigInt(1);
//   for (let i = 2; i <= n; i++) {
//     const next = prev + curr;
//     prev = curr;
//     curr = next;
//   }
//   return curr;
// };
// console.log(`${fibo(n)}`);

// 2309번 문제
// const arr = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// const allArr = [];
// let result = [];
// const processedArr = [...arr.sort((a, b) => a - b)];
// let sum = processedArr.reduce((acc, cur) => acc + cur, 0);
// while (processedArr.length) {
//   let firstElement = processedArr.shift();
//   for (let i = 0; i < arr.length; i++) {
//     const line = [firstElement, processedArr[i]];
//     allArr.push(line);
//   }
// }
// allArr.forEach((e) => e[0] + e[1] === sum - 100 && (result = [e[0], e[1]]));
// arr.splice(arr.indexOf(result[0]), 1);
// arr.splice(arr.indexOf(result[1]), 1);
// console.log(arr.join("\n"));

// 1764번 문제
// const [A, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, M] = A.split(" ").map(Number);
// const noListen = new Map(arr.splice(0, N).map((e, i) => [i, e]));
// const noSee = new Set(arr.map((e) => e));
// const result = [];
// for (const el of noListen) noSee.has(el[1]) && result.push(el[1]);
// result.sort();
// console.log(`${result.length}\n${result.join("\n")}`);

// 2231번 문제
// const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// let i = 0;
// let sum;
// while (i <= 1000000) {
//   if (sum === N) break;
//   sum = 0;
//   const arr = i.toString().split("").map(Number);
//   sum += i + arr.reduce((acc, cur) => acc + cur, 0);
//   i++;
// }
// console.log(i > 1000000 ? 0 : i - 1);

// 9093번 문제
// const [N, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const processedArr = arr.map((e) => e.split(" "));
// const microArr = [];
// processedArr.map((e) => {
//   const line = [];
//   e.forEach((el) => {
//     const innerLine = el.split("");
//     line.push(innerLine.reverse().join(""));
//   });
//   microArr.push(line.join(" "));
// });
// console.log(microArr.join("\n"));

// 1436번 문제
// const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// let series = 0;
// const result = [];
// while (result.length - 1 < N) {
//   if (series.toString().includes("666")) result.push(series);
//   series++;
// }
// console.log(result[N - 1]);

// 19532번 문제
// const [a, b, c, d, e, f] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// let result = [];
// for (let x = -999; x <= 999; x++) {
//   for (let y = -999; y <= 999; y++) {
//     if (a * x + b * y === c && d * x + e * y === f) {
//       result = [x, y];
//       break;
//     }
//   }
// }
// console.log(result.join(" "));

// 1037번 문제
// let [N, arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// arr = arr
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// let result = +N === 1 ? arr[0] * arr[0] : arr[0] * arr[arr.length - 1];
// console.log(result);

// 24416번 문제
// const n = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const count = [1, 1];
// const f = [];
// const fib = (n) => {
//   if (n === 0) return 0;
//   if (n === 1 || n === 2) return 1;
//   count[0]++;
//   return fib(n - 1) + fib(n - 2);
// };
// const fibonacci = (n) => {
//   f[0] = 0;
//   n === (1 || 2) && f[n] === 1;
//   for (let i = 3; i < n; i++) {
//     f[i] = f[i - 1] + f[i - 2];
//     count[1]++;
//   }
//   return f[n];
// };
// fib(n);
// fibonacci(n);
// console.log(count.join(" "));

// 14490번 문제
// const [n, m] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(":")
//   .map(Number);
// let [A, B] = n > m ? [n, m] : [m, n];
// while (B !== 0) [A, B] = [B, A % B];
// console.log(`${n / A}:${m / A}`);

// 17219번 문제
// const [A, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, M] = A.split(" ").map(Number);
// const uriList = arr.splice(0, N);
// const uriAndPW = uriList.map((e) => e.split(" "));
// const uriAndPWMap = new Map(uriAndPW.map((e) => [e[0], e[1]]));
// const result = new Array(+M);
// arr.forEach((e, i) => (result[i] = uriAndPWMap.get(e)));
// console.log(result.join("\n"));

// 2523번 문제
// const n = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const result = [];
// for (let i = 0; i < n * 2 - 1; i++) {
//   let star = "";
//   if (i < n) {
//     for (let j = 0; j <= i; j++) star += "*";
//   } else {
//     for (let j = n * 2 - 1 - i; j > 0; j--) star += "*";
//   }
//   result.push(star);
// }
// console.log(result.join("\n"));

// 1269번 문제
// let [_, A, B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// A = new Set(
//   A.split(" ")
//     .map(Number)
//     .map((e) => e)
// );
// B = new Set(
//   B.split(" ")
//     .map(Number)
//     .map((e) => e)
// );
// let count = 0;
// A.forEach((e) => B.has(e) && count++);
// console.log(A.size - count + B.size - count);

// 10101번 문제
// const angles = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// let result = "";
// const sum = angles.reduce((acc, cur) => acc + cur, 0);
// const setAngles = new Set(angles.map((e) => e));
// const solution = (list) => {
//   if (sum !== 180) return (result = "Error");
//   if (list.size === 3) return (result = "Scalene");
//   if (list.size === 2) return (result = "Isosceles");
//   if (list.size === 1) return (result = "Equilateral");
// };
// solution(setAngles);
// console.log(result);

// 10815번 문제
// const [N, A, M, B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const setA = new Set(
//   A.split(" ")
//     .map(Number)
//     .map((e) => e)
// );
// const setB = new Set(
//   B.split(" ")
//     .map(Number)
//     .map((e) => e)
// );
// const result = new Array(setB.size).fill(0);
// let i = 0;
// setB.forEach((e) => {
//   setA.has(e) && (result[i] = 1);
//   i++;
// });
// console.log(result.join(" "));

// 14425번 문제
// const input = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, M] = input.shift().split(" ").map(Number);
// const A = new Set(input.splice(0, N));
// const B = input;
// const result = [];
// B.forEach((e) => A.has(e) && result.push(e));
// console.log(result.length);

// 7567번 문제
// const arr = require("fs").readFileSync("./input.txt", "utf-8").trim().split("");
// let result = 0;
// while (arr.length > 0) {
//   let target = arr.shift();
//   result += target !== arr[0] ? 10 : 5;
// }
// console.log(result);

// 1463번 문제
// let N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const solution = (X) => {
//   const memo = new Array(X + 1).fill(0);
//   for (let i = 2; i < memo.length; i++) {
//     memo[i] = memo[i - 1] + 1;
//     if (!(i % 2)) memo[i] = Math.min(memo[i], memo[i / 2] + 1);
//     if (!(i % 3)) memo[i] = Math.min(memo[i], memo[i / 3] + 1);
//   }
//   return memo[memo.length - 1];
// };
// console.log(solution(N));

// 25501번 문제
// let [T, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const setArr = new Set(arr);
// let count = new Array(+T).fill(0);
// let i = 0;
// let result = new Array(+T);
// const recursion = (s, l, r) => {
//   count[i]++;
//   if (l >= r) return 1;
//   else if (s.charAt(l) != s.charAt(r)) return 0;
//   else return recursion(s, l + 1, r - 1);
// };
// const isPalindrome = (s) => {
//   return recursion(s, 0, s.length - 1);
// };
// setArr.forEach((e) => ((result[i] = `${isPalindrome(e)} ${count[i]}`), i++));
// console.log(result.join("\n"));

// 11478번 문제
// const S = require("fs").readFileSync("./input.txt", "utf-8").trim().split("");
// const textList = [...S];
// let text = "";
// for (let i = 0; i < S.length; i++) {
//   for (let j = 0; j < S.length - i; j++) {
//     text += S[j + i];
//     textList.push(text);
//   }
//   text = "";
// }
// const result = new Set(textList);
// console.log(result.size);

// 9085번 문제
// let [T, ...arr] = require("fs").readFileSync("./input.txt", "utf-8").trim().split("\n");
// const result = [];
// arr = arr.map((e) => e.split(" ").map(Number));
// for (let i = 0; i < +T; i++) result.push(arr[i * 2 + 1].reduce((acc, cur) => acc + cur, 0));
// console.log(result.join('\n'));

// 9656번 문제 DP로 풀 필요가 있나?
// let N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const dp = new Array(N + 1).fill(false);
// dp[1] = false;
// if (N >= 2) dp[2] = true;
// if (N >= 3) dp[3] = false;
// for (let i = 4; i <= N; i++) {
//   if (!dp[i - 1] || !dp[i - 3]) dp[i] = false;
//   else dp[i] = true;
// }
// console.log(dp[N] ? "CY" : "SK");

// const dp = [N];
// let i = 1;
// while (dp[i - 1] > 1) {
//   if (dp[i - 1] > 3) dp[i] = dp[i - 1] - 3;
//   else dp[i] = dp[i - 1] - 1;
//   i++;
// }
// console.log(dp.length % 2 ? "CY" : "SK");

// 16395번 문제
// const [n, k] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const arr = [];
// const pascal = (i) => {
//   const line = [1];
//   if (i === 0) return (arr[i] = line);
//   for (let j = 1; j < i; j++) line.push(arr[i - 1][j - 1] + arr[i - 1][j]);
//   line.push(1);
//   arr[i] = line;
// };
// for (let i = 0; i < n; i++) pascal(i);
// console.log(arr[n - 1][k - 1]);
// arr.forEach((e, i) => {
//   pascal(i);
//   // console.log(`${i} ${e}`);
//   console.log(e);
// });
// console.log(arr);

// 11721번 문제
// const N = require("fs").readFileSync("./input.txt", "utf-8").trim().split("");
// const result = [];
// while (N.length > 0) {
//   let line = [];
//   for (let i = 0; i < 10; i++) {
//     const char = N.shift();
//     if (N.length === 0) {
//       line.push(char);
//       break;
//     }
//     line.push(char);
//   }
//   result.push(line.join(""));
// }
// console.log(result.join("\n"));

// 1924번 문제
// const [x, y] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const date = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
// let day = 0;
// x >= 2 && (day += 31);
// x >= 3 && (day += 28);
// x >= 4 && (day += 31);
// x >= 5 && (day += 30);
// x >= 6 && (day += 31);
// x >= 7 && (day += 30);
// x >= 8 && (day += 31);
// x >= 9 && (day += 31);
// x >= 10 && (day += 30);
// x >= 11 && (day += 31);
// x >= 12 && (day += 30);
// console.log(date[(day + y) % 7]);

// 5522번 문제
// const score = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// console.log(score.reduce((acc, cur) => acc + cur, 0));

// 15232번 문제
// const [R, C] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// const result = [];
// for (let i = 0; i < R; i++) {
//   const line = [];
//   for (let j = 0; j < C; j++) line.push("*");
//   result.push(line.join(""));
// }
// console.log(result.join("\n"));

// 14924번 문제
// const [S, T, D] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const F = (D / (S * 2)) * T;
// console.log(F);

// 1094번 문제
// const X = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// let count = 0;
// let bar = 64;
// let sum = 0;
// while (sum !== X) {
//   if (sum + bar <= X) {
//     count++;
//     sum += bar;
//   }
//   bar /= 2;
// }
// console.log(count);

// 5635번 문제
// let [n, ...peoples] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const result = new Array(2);
// peoples = peoples.map((e) => e.split(" "));
// peoples.forEach((e) => {
//   for (let i = 1; i < e.length - 1; i++) {
//     e[i] = e[i].split("");
//     if (e[i].length !== 2) e[i].unshift("0");
//     e[i] = e[i].join("");
//   }
//   let date = "";
//   for (let j = e.length - 1; j > 0; j--) date += e[j];
//   e.push(Number(date));
// });
// peoples.sort((a, b) => b[4] - a[4]);
// result[0] = peoples[0][0];
// result[1] = peoples[peoples.length - 1][0];
// console.log(result.join("\n"));

// 1543번 문제
// let [doc, target] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// doc = doc.split("");
// target = target.split("");
// let result = 0;
// for (let i = 0; i < doc.length; i++) {
//   if (doc[i] === target[0]) {
//     let count = 1;
//     for (let j = 1; j < target.length; j++) {
//       if (doc[i + j] === target[j]) count++;
//       else break;
//     }
//     if (count === target.length) {
//       result++;
//       i += target.length - 1;
//     }
//   }
// }
// console.log(result);

// 1439번 문제
// const S = require("fs").readFileSync("./input.txt", "utf-8").trim();
// const count = [0, 0];
// const solution = (str, num) => str.split(`${num}`);
// const counter = (arr, index) => arr.forEach((e) => e !== "" && count[index]++);
// const one = solution(S, 1);
// const zero = solution(S, 0);
// counter(zero, 0);
// counter(one, 1);
// console.log(Math.min(...count));

// 4949번 문제
// let arr = require("fs").readFileSync("./input.txt", "utf-8").trim().split("\n");
// arr.pop();
// const result = new Array(arr.length).fill("no");
// arr = arr.map((e) => e.split(""));
// arr.forEach((e, i) => {
//   const stack = [];
//   for (let i = 0; i < e.length; i++) {
//     switch (e[i]) {
//       case "(":
//         stack.push(e[i]);
//         break;
//       case ")":
//         stack.push(e[i]);
//         break;
//       case "[":
//         stack.push(e[i]);
//         break;
//       case "]":
//         stack.push(e[i]);
//         break;

//       default:
//         break;
//     }
//   }
//   for (let i = 1; i <= stack.length; i++) {
//     if (
//       (stack[i - 1] === "(" && stack[i] === ")") ||
//       (stack[i - 1] === "[" && stack[i] === "]")
//     ) {
//       stack.splice(i - 1, 2);
//       i = 0;
//     }
//   }
//   if (!stack.length) result[i] = "yes";
// });
// console.log(result.join("\n"));

// 1302번 문제
// const [N, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// arr.sort();
// const target = new Set(arr);
// const countList = [];
// target.forEach((e) => {
//   let count = 0;
//   arr.forEach((el) => el === e && count++);
//   countList.push(count);
// });
// console.log(Array.from(target)[countList.indexOf(Math.max(...countList))]);

// 2217번 문제
// const [N, ...W] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// W.sort((a, b) => b - a);
// const weight = [];
// for (let i = 0; i < W.length; i++) {
//   weight.push(W[i] * (i + 1));
// }
// console.log(Math.max(...weight));

// 2108번 문제 arrow function로 재사용 가능한 함수 형식으로 다듬어보자.
// const [N, ...nums] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// nums.sort((a, b) => a - b);
// const avg = Math.round(nums.reduce((acc, cur) => acc + cur, 0) / N);
// const target = [...new Set(nums)];
// const b = [];
// const d = [];
// let c = 0;
// target.forEach((e) => {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) e === nums[i] && count++;
//   b.push(count);
// });
// b.forEach((e, i) => Math.max(...b) === e && d.push(target[i]));
// c = d.length !== 1 ? d[1] : d[0];
// console.log(
//   `${avg === 0 ? Math.abs(avg) : avg}\n${nums[(nums.length - 1) / 2]}\n${c}\n${
//     Math.max(...nums) - Math.min(...nums)
//   }`
// );

// 11656번 문제
// const S = require("fs").readFileSync("./input.txt", "utf-8").trim().split("");
// const result = [];
// while (S.length > 0) {
//   result.push(S.join(""));
//   S.shift();
// }
// result.sort();
// console.log(result.join("\n"));

// 9372번 문제 forEach 반복문으로 이미 갖고 있는 값인지 순회하면서 체크하면 트리구조로 구현 가능할듯?
// let [T, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const result = new Array(+T).fill(0);
// for (let i = 0; i < +T; i++) {
//   const [N, M] = arr.shift().split(" ").map(Number);
//   const nation = new Set(
//     arr
//       .splice(0, M)
//       .map((e) => e.split(" ").map(Number))
//       .flat()
//   );
//   result[i] = nation.size - 1;
// }
// console.log(result.join("\n"));

// 2485번 문제
// const [N, ...position] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// const gapList = [];
// for (let i = 1; i < position.length; i++) {
//   const gap = position[i] - position[i - 1];
//   gapList.push(gap);
// }
// const gcd = (A, B) => {
//   if (B === 0) return A;
//   else return gcd(B, A % B);
// };
// const gcdN = (arr) => {
//   let processed = arr.shift();
//   arr.forEach((e) => (processed = gcd(processed, e)));
//   return processed;
// };
// const A = gcdN(gapList);
// console.log(
//   Math.ceil(position[position.length - 1] / A) -
//     Math.ceil(position[0] / A) +
//     1 -
//     N
// );

// 4375번 문제
// const n = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(BigInt);
// const result = new Array(n.length);
// let j = BigInt(1);
// for (let i = 0; i < n.length; i++) {
//   let target = BigInt(1);
//   while (1) {
//     if (!(target % n[i])) {
//       result[i] = target.toString().split("").length;
//       target = BigInt(1);
//       j = BigInt(1);
//       break;
//     }
//     target += BigInt(10) ** j;
//     j++;
//   }
// }
// console.log(result.join("\n"));

// 1475번 문제
// const N = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("")
//   .map(Number);
// const nums = new Array(10).fill(0).map((e, i) => e + i);
// const count = new Array(10).fill(0);
// N.forEach((e) => count[nums.indexOf(e)]++);
// count[6] += count[9];
// count[9] = 0;
// count[6] = !(count[6] % 2) ? count[6] / 2 : (count[6] - 1) / 2 + 1;
// console.log(Math.max(...count));

// 14912번 문제
// const [n, d] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const arr = new Array(n)
//   .fill(1)
//   .map((e, i) => (e + i).toString().split("").map(Number));
// let count = 0;
// arr.forEach((e) => {
//   for (let i = 0; i < e.length; i++) e[i] === d && count++;
// });
// console.log(count);

// 2535번 문제
// let [N, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// arr = arr.map((e) => e.split(" ").map(Number));
// arr.sort((a, b) => b[2] - a[2]);
// let result = [];

// for (let j = 0; j < arr.length; j++) {
//   if (result.length === 3) break;
//   let count = 0;
//   result.forEach((e) => arr[j][0] === e[0] && count++);
//   count < 2 && result.push([arr[j][0], arr[j][1]]);
// }
// result = result.map((e) => e.join(" "));
// console.log(result.join("\n"));

// 10709번 문제
// let [A, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [H, W] = A.split(" ").map(Number);
// const result = [];
// arr = arr.map((e) => e.split(""));
// arr.forEach((e) => {
//   let line = new Array(e.length).fill(-1);
//   if (e.includes("c")) {
//     let target = e.indexOf("c");
//     let num = 0;
//     for (let i = target; i < e.length; i++) {
//       if (e[i] === "c") {
//         num = 0;
//         line[i] = num;
//       } else line[i] = num;
//       num++;
//     }
//   }
//   result.push(line.join(" "));
// });
// console.log(result.join("\n"));

// 1235번 문제
// let [N, ...students] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// students = students.map((e) => e.split(""));
// let textLen = 1;
// while (true) {
//   const line = [];
//   students.forEach((e) => {
//     const text = [];
//     for (let i = e.length - 1; i > e.length - 1 - textLen; i--) text.push(e[i]);
//     line.push(text.join(""));
//   });
//   const duplicateCheck = new Set(line);
//   if (line.length === duplicateCheck.size) break;
//   else textLen++;
// }
// console.log(textLen);

// 1358번 문제
// let [A, ...B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [W, H, X, Y, P] = A.split(" ").map(Number);
// const R = H / 2;
// let total = 0;
// B = B.map((e) => e.split(" ").map(Number));
// B.forEach((e) => {
//   const [x, y] = [e[0], e[1]];
//   if (x <= X) {
//     Math.abs(x - X) ** 2 + Math.abs(y - (Y + R)) ** 2 <= R ** 2 && total++;
//   } else if (x > X && x < X + W) {
//     y >= Y && y <= Y + H && total++;
//   } else if (x >= X + W) {
//     Math.abs(x - (X + W)) ** 2 + Math.abs(y - (Y + R)) ** 2 <= R ** 2 &&
//       total++;
//   }
// });
// console.log(total);

// 9507번 문제
// const [t, ...nums] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(BigInt);
// const result = [];
// const dp = [];
// const koong = (n) => {
//   for (let i = 0; i <= n; i++) {
//     if (i < 2) dp[i] = BigInt(1);
//     if (i === 2) dp[i] = BigInt(2);
//     if (i === 3) dp[i] = BigInt(4);
//     if (dp[i]) dp[i];
//     if (i > 3) dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3] + dp[i - 4];
//   }
//   return dp[n];
// };
// nums.forEach((e) => result.push(koong(e)));
// console.log(result.join("\n"));

// 13699번 문제
// const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const dp = [];
// const solution = (n) => {
//   for (let i = 0; i <= n; i++) {
//     if (i === 0) dp[i] = BigInt(1);
//     if (dp[i]) dp[i];
//     if (i > 0) {
//       let sum = BigInt(0);
//       for (let j = 0; j < i; j++) sum += dp[j] * dp[i - 1 - j];
//       dp[i] = sum;
//     }
//   }
// };
// solution(N);
// console.log(`${dp[N]}`);

// 14495번 문제
// const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const dp = [];
// const solution = (n) => {
//   for (let i = 0; i < n; i++) {
//     if (i === 0) dp[i] = BigInt(1);
//     if (i === 1) dp[i] = BigInt(1);
//     if (i === 2) dp[i] = BigInt(1);
//     if (dp[i]) dp[i];
//     if (i > 2) dp[i] = dp[i - 1] + dp[i - 3];
//   }
// };
// solution(N);
// console.log(`${dp[N - 1]}`);

// 2960번 문제
/**
 * 1. 2부터 N까지 모든 정수를 적는다.
 * 2. 아직 지우지 않은 수 중 가장 작은 수를 찾는다. 이것을 P라고 하고, 이 수는 소수이다.
 * 3. P를 지우고, 아직 지우지 않은 P의 배수를 크기 순서대로 지운다.
 * 4. 아직 모든 수를 지우지 않았다면, 다시 2번 단계로 간다.
 * */
// const [N, K] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const arr = new Array(N - 1).fill(2).map((e, i) => e + i);
// let result = [];
// let count = 0;
// let P = arr[0];
// while (true) {
//   if (count === K) break;
//   P = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (count === K) break;
//     if (!(arr[i] % P)) {
//       result.push(...arr.splice(i, 1));
//       count++;
//     }
//   }
// }
// console.log(result.pop());

// 28463번 문제
// let [direction, ...skill] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const skills = {
//   T: ".PO.",
//   F: "P..I",
//   Lz: "P..O",
// };
// const result = [];
// skill = skill.map((e) => e.split(""));
// switch (direction) {
//   case "E":
//     [[skill[0][0], skill[0][1]], [skill[1][0], skill[1][1]]] = [
//       [skill[0][1], skill[1][1]],
//       [skill[0][0], skill[1][0]],
//     ];
//     break;
//   case "S":
//     [skill[0][0], skill[0][1]] = [skill[0][1], skill[0][0]];
//     [skill[1][0], skill[1][1]] = [skill[1][1], skill[1][0]];
//     [skill[0], skill[1]] = [skill[1], skill[0]];
//     break;
//   case "W":
//     [[skill[0][0], skill[0][1]], [skill[1][0], skill[1][1]]] = [
//       [skill[1][0], skill[0][0]],
//       [skill[1][1], skill[0][1]],
//     ];
//     break;
//   default:
//     break;
// }
// skill = skill.flat().join("");
// for (const key in skills) skills[key] === skill && result.push(key);
// console.log(result.length !== 0 ? result[0] : "?");

// 12904번 문제
// let [S, T] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// S = S.split("");
// T = T.split("");
// const Len = T.length - S.length;
// let result = 0;
// for (let i = 0; i <= Len; i++) {
//   if (T.join("") === S.join("")) {
//     result = 1;
//     break;
//   }
//   if (T[T.length - 1] === "B") {
//     T.pop();
//     T.reverse();
//   } else if (T[T.length - 1] === "A") T.pop();
// }
// console.log(result);

// 9625번 문제
// const K = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const dp = new Array(K + 1);
// const solution = (K) => {
//   for (let i = 0; i <= K; i++) {
//     if (i === 0) dp[i] = [1, 0];
//     if (i === 1) dp[i] = [0, 1];
//     if (dp[i]) dp[i];
//     else dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
//   }
// };
// solution(K);
// console.log(dp[K].join(" "));

// 5347번 문제
// let [n, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const result = [];
// arr = arr.map((e) => e.split(" ").map(Number));
// arr.forEach((e, i) => {
//   let [A, B] = e[0] > e[1] ? [e[0], e[1]] : [e[1], e[0]];
//   while (B !== 0) [A, B] = [B, A % B];
//   result[i] = (e[0] * e[1]) / A;
// });
// console.log(result.join('\n'));

// 2003번 문제
// const [A, B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, M] = A.split(" ").map(Number);
// const arr = B.split(" ").map(Number);
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = i; j <= arr.length; j++) {
//     if (sum === M) {
//       count++;
//       break;
//     }
//     sum += arr[j];
//   }
// }
// console.log(count);

// 15649번 문제
// const [N, M] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const arr = new Array(N).fill(1).map((e, i) => e + i);
// const result = [];
// const BT = (arr, line) => {
//   if (line.length === M) return result.push(line.join(" "));
//   for (let i = 0; i < arr.length; i++) {
//     const childArr = [...arr];
//     const childLine = [...line];
//     childLine.push(...childArr.splice(i, 1));
//     BT(childArr, childLine);
//   }
// };
// for (let i = 0; i < arr.length; i++) {
//   const childArr = [...arr];
//   const childLine = [];
//   childLine.push(...childArr.splice(i, 1));
//   BT(childArr, childLine);
// }
// console.log(result.join("\n"));

// 15649 개선
// const [N, M] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const nums = new Array(N).fill(1).map((e, i) => e + i);
// const result = [];
// const backTracking = (arr, line) => {
//   if (line.length !== M) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       const copyArr = [...arr];
//       const copyLine = [...line];
//       const num = copyArr.splice(i, 1);
//       copyLine.push(num);
//       backTracking(copyArr, copyLine);
//     }
//   } else {
//     result.push(line.join(" "));
//     line = [];
//   }
// };
// backTracking(nums, []);
// console.log(result.join("\n"));

// 2847번 문제
// const [N, ...nums] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// let count = 0;
// nums.reverse();
// for (let i = 0; i < nums.length - 1; i++) {
//   while (nums[i] <= nums[i + 1]) nums[i + 1]-- && count++;
// }
// console.log(count);

// 9417번 문제
// let [n, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const result = [];
// arr = arr.map((e) => e.split(" ").map(Number));
// arr.forEach((e) => {
//   const line = [];
//   e.sort((a, b) => a - b);
//   for (let i = 0; i < e.length - 1; i++) {
//     for (let j = i + 1; j < e.length; j++) {
//       let [A, B] = [e[j], e[i]];
//       while (B !== 0) [A, B] = [B, A % B];
//       line.push(A);
//     }
//   }
//   result.push(Math.max(...line));
// });
// console.log(result.join("\n"));

// 2090번 문제
// let [N, A] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// let [n1, n2] = [BigInt(1), BigInt(0)];
// A = A.split(" ").map(BigInt);
// A.forEach((e) => (n1 *= e));
// A.forEach((e) => (n2 += n1 / e));
// let [a, b] = [n2, n1];
// while (b !== BigInt(0)) [a, b] = [b, a % b];
// console.log(`${n1 / a}/${n2 / a}`);

// 3049번 문제
// const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// let num = 1;
// for (let i = N; i > N - 4; i--) num *= i;
// console.log(num / 24);

// 1850번 문제
// const [A, B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(BigInt);
// let [a, b] = A > B ? [A, B] : [B, A];
// let result = "";
// while (b !== BigInt(0)) [a, b] = [b, a % b];
// for (let i = BigInt(0); i < a; i++) result += "1";
// console.log(result);

// 11008번 문제
// const [T, ...texts] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const result = [];
// const solution = (text) => {
//   let [s, p] = text.split(" ");
//   const totalLen = s.split("").length;
//   const num = s.split(p).join("").split("").length;
//   const pLen = p.split("").length;
//   result.push((totalLen - num) / pLen + num);
// };
// texts.forEach((e) => solution(e));
// console.log(result.join("\n"));

// 11292번 문제
// const arr = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const result = [];
// while (true) {
//   if (arr[0] === "0") break;
//   else {
//     const T = +arr.shift();
//     const line = [];
//     let peoples = arr.splice(0, T);
//     peoples = peoples.map((e) => e.split(" "));
//     peoples = peoples.map((e) => [e[0], +e[1]]);
//     peoples.sort((a, b) => b[1] - a[1]);
//     const max = peoples[0];
//     peoples.forEach((e) => e[1] === max[1] && line.push(e[0]));
//     result.push(line.join(" "));
//   }
// }
// console.log(result.join("\n"));

// 1755번 문제
// const [M, N] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const speak = [
//   "zero",
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ];
// const result = [];
// let nums = new Array(N - M + 1).fill(M).map((e, i) => e + i);
// nums = nums.map((e) => String(e).split("").map(Number));
// const speakNums = [];
// nums.forEach((e, i) => {
//   const line = [];
//   e.forEach((el) => line.push(speak[el]));
//   speakNums.push(line.join(" "));
// });
// speakNums.sort();
// speakNums.forEach((e, i) => {
//   const inNums = e.split(" ");
//   const line = [];
//   inNums.forEach((e) => line.push(speak.indexOf(e)));
//   result[i] = line.join("");
// });
// const len = Math.ceil(result.length / 10);
// for (let i = 0; i < len; i++) {
//   const line = result.splice(0, result.length >= 10 ? 10 : result.length);
//   console.log(line.join(" "));
// }

// 5344번 문제
// let [n, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// arr = arr.map((e) => e.split(" ").map(BigInt));
// const result = new Array(n);
// arr.forEach((e, i) => {
//   e = e.filter((el) => el !== 0n);
//   let [A, B] = e[0] < e[1] ? [e[1], e[0]] : [e[0], e[1]];
//   while (B !== 0n) [A, B] = [B, A % B];
//   result[i] = A;
// });
// console.log(result.join("\n"));

// 1431번 문제
// let [N, ...serial] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// serial.sort();
// serial = serial.map((e) => e.split(""));
// serial.sort((a, b) => {
//   let aLen = 0;
//   let bLen = 0;
//   for (let i = 0; i < a.length; i++) {
//     const aEl = Number(a[i]);
//     if (isNaN(aEl)) aLen += 0;
//     else aLen += aEl;
//   }
//   for (let i = 0; i < b.length; i++) {
//     const bEl = Number(b[i]);
//     if (isNaN(bEl)) bLen += 0;
//     else bLen += bEl;
//   }
//   return aLen - bLen;
// });
// serial.sort((a, b) => a.length - b.length);
// serial = serial.map((e) => e.join(""));
// console.log(serial.join("\n"));

// 2312번 문제
// const [T, ...N] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// const result = [];
// N.forEach((e) => {
//   let j = 2;
//   let num = e;
//   const line = {};
//   while (num !== 1) {
//     if (!(num % j)) {
//       num /= j;
//       line[j] ? line[j]++ : (line[j] = 1);
//     } else j++;
//   }
//   for (const key in line) result.push(`${key} ${line[key]}`);
// });
// console.log(result.join("\n"));

// 2992번 문제
// const X = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const arrX = X.toString().split("").map(Number);
// let result = [];
// let line = [];
// const backTracking = (arr, line) => {
//   const len = arr.length;
//   if (len !== 0) {
//     for (let i = 0; i < len; i++) {
//       const newLine = [...line];
//       const copyXArr = [...arr];
//       const num = copyXArr.splice(i, 1);
//       newLine.push(num);
//       backTracking(copyXArr, newLine);
//     }
//   } else {
//     result.push(Number.parseInt(line.join("")));
//     line = [];
//   }
// };
// backTracking(arrX, line);
// result.sort((a, b) => a - b);
// result = result.filter((e) => e > X);
// console.log(result.length ? result[0] : 0);

// 15650번 문제
// const [N, M] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const nums = new Array(N).fill(1).map((e, i) => e + i);
// const result = [];
// let line = [];
// const numsLen = nums.length;
// const backTracking = (arr, line) => {
//   const len = arr.length;
//   if (line.length !== M) {
//     for (let i = 0; i < len; i++) {
//       const newLine = [...line];
//       const newArr = [...arr];
//       const num = newArr.splice(i, 1);
//       newLine.push(...num);
//       backTracking(newArr, newLine);
//     }
//   } else {
//     const compareLine = [...line];
//     compareLine.sort((a, b) => a - b);
//     line.join("") === compareLine.join("") && result.push(line.join(" "));
//   }
// };
// for (let i = 0; i < numsLen; i++) {
//   line.push(nums.shift());
//   backTracking(nums, line);
//   line = [];
// }
// console.log(result.join("\n"));

// 15651번 문제
// const [N, M] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const nums = new Array(N).fill(1).map((e, i) => e + i);
// const result = [];
// const line = [];
// const backTracking = (arr, line) => {
//   if (line.length !== M) {
//     for (let i = 0; i < N; i++) {
//       const copyLine = [...line];
//       copyLine.push(arr[i]);
//       backTracking(arr, copyLine);
//     }
//   } else {
//     result.push(line.join(" "));
//     line = [];
//   }
// };
// backTracking(nums, line);
// console.log(result.join("\n"));

// 15652번 문제
// const [N, M] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const nums = new Array(N).fill(1).map((e, i) => e + i);
// let result = [];
// const backTracking = (arr, line) => {
//   if (line.length !== M) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       const copyLine = [...line];
//       const num = arr[i];
//       if (!copyLine.length || num >= copyLine[copyLine.length - 1]) {
//         copyLine.push(num);
//         backTracking(arr, copyLine);
//       } else continue;
//     }
//   } else {
//     result.push(line.join(" "));
//     line = [];
//   }
// };
// backTracking(nums, []);
// console.log(result.join("\n"));

// 15663번 문제
// const input = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, M] = input.shift().split(" ").map(Number);
// const nums = input[0]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// let result = [];
// const backTracking = (arr, line) => {
//   if (line.length !== M) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       const copyArr = [...arr];
//       const copyLine = [...line];
//       const num = copyArr.splice(i, 1);
//       copyLine.push(num);
//       backTracking(copyArr, copyLine);
//     }
//   } else {
//     result.push(line.join(" "));
//     line = [];
//   }
// };
// backTracking(nums, []);
// result = new Set(result);
// result = Array.from(result).join("\n");
// console.log(result);

// 12919번 문제
// let [S, T] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// S = S.split("");
// T = T.split("");
// let result = 0;
// const solution = (t) => {
//   if (S.length === t.length) {
//     S.join("") === t.join("") && (result = 1);
//     return;
//   }
//   const copyA = [...t];
//   const copyB = [...t];
//   if (t[t.length - 1] === "A") {
//     copyA.pop();
//     solution(copyA);
//   }
//   if (t[0] === "B") {
//     copyB.reverse().pop();

//     solution(copyB);
//   }
//   return;
// };
// solution(T);
// console.log(result);

// 15654번 문제
// const input = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, M] = input.shift().split(" ").map(Number);
// const nums = input[0]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// const result = [];
// const backTracking = (arr, line) => {
//   const len = arr.length;
//   if (line.length !== M) {
//     for (let i = 0; i < len; i++) {
//       const copyArr = [...arr];
//       const num = copyArr.splice(i, 1);
//       const copyLine = [...line];
//       copyLine.push(num);
//       backTracking(copyArr, copyLine);
//     }
//   } else result.push(line.join(" "));
//   line = [];
// };
// backTracking(nums, []);
// console.log(result.join("\n"));

// 16953번 문제
// let [A, B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(BigInt);
// let result = -1;
// let count = 1;
// while (true) {
//   if (A >= B) break;
//   if (B % BigInt(10) === BigInt(1)) B = (B - (B % BigInt(10))) / BigInt(10);
//   else if (!(B % BigInt(2))) B /= BigInt(2);
//   else break;
//   count++;
// }
// result = B !== A ? result : count;
// console.log(result);

// 15655번 문제
// const input = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, M] = input[0].split(" ").map(Number);
// const nums = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// const result = [];
// const backTracking = (arr, line) => {
//   if (line.length !== M) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       const copyArr = [...arr];
//       const num = copyArr[i];
//       const copyLine = [...line];
//       if (copyLine[copyLine.length - 1] < num || copyLine.length === 0) {
//         copyLine.push(num);
//         backTracking(copyArr, copyLine);
//       }
//     }
//   } else {
//     result.push(line.join(" "));
//     line = [];
//   }
// };
// backTracking(nums, []);
// console.log(result.join("\n"));

// 24389번 문제
// let N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const origin = N >>> 0;
// const notOrigin = (~N >>> 0) + 1;
// const result = ((origin ^ notOrigin) >>> 0).toString(2).split("").map(Number);
// let count = 0;
// result.forEach((e) => e === 1 && count++);
// console.log(count);

// 15656번 문제
// const input = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, M] = input[0].split(" ").map(Number);
// const nums = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// const result = [];
// const backTracking = (arr, line) => {
//   if (line.length !== M) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       const copyLine = [...line];
//       const num = arr[i];
//       copyLine.push(num);
//       backTracking(arr, copyLine);
//     }
//   } else {
//     result.push(line.join(" "));
//     line = [];
//   }
// };
// backTracking(nums, []);
// console.log(result.join("\n"));

// 15657번 문제
// const input = require("fs")

//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, M] = input[0].split(" ").map(Number);
// const nums = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// const result = [];
// const backTracking = (arr, line) => {
//   if (line.length !== M) {
//     for (let i = 0; i < arr.length; i++) {
//       const num = arr[i];
//       const copyLine = [...line];
//       if (copyLine[copyLine.length - 1] <= num || copyLine.length === 0) {
//         copyLine.push(num);
//         backTracking(arr, copyLine);
//       }
//     }
//   } else {
//     result.push(line.join(" "));
//     line = [];
//   }
// };
// backTracking(nums, []);
// console.log(result.join("\n"));

// 2870번 문제
// let [N, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// arr = arr.map((e) => e.split("").map(Number));
// const result = [];
// arr.forEach((e) => {
//   let line = [];
//   for (let i = 0; i < e.length; i++) {
//     if (isNaN(e[i]) || i === e.length - 1) {
//       i === e.length - 1 && !isNaN(e[i]) && line.push(e[i]);
//       line.length !== 0 && result.push(BigInt(line.join("")));
//       line = [];
//     } else {
//       line.push(e[i]);
//     }
//   }
// });
// result.sort((a, b) => (a > b ? 1 : -1));
// console.log(result.join("\n"));

// 11286번 문제
// const [N, ...x] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// const heap = [];
// x.forEach((e) => {
//   if (e !== 0) heap.push(e);
//   else {
//     let copyHeap = [...heap];
//     copyHeap = copyHeap.map((e) => Math.abs(e));
//     const min = Math.min(...copyHeap);
//     const filterHeap = copyHeap.filter((e) => e === min);
//     const minIndex = [];
//     const minList = [];
//     if (filterHeap.length > 1) {
//       copyHeap.forEach((el, i) => el === min && minIndex.push(i));
//       minIndex.forEach((el) => minList.push(heap[el]));
//       const deleteEl = heap.indexOf(Math.min(...minList));
//       heap.splice(deleteEl,1);
//     }
//   }
// });

// 16165번 문제
// const input = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, M] = input.shift().split(" ").map(Number);
// const groupList = new Map();
// const problem = new Map();
// const result = new Array();
// for (let i = 0; i < N; i++) {
//   const groupName = input.shift();
//   const memberNum = +input.shift();
//   const groupMember = input.splice(0, memberNum).sort();
//   groupList[groupName] = groupMember;
// }
// for (let i = 0; i < M; i++) problem[input[i * 2]] = +input[i * 2 + 1];
// for (const key in problem) {
//   if (problem[key] === 1) {
//     for (const group in groupList) {
//       if (groupList[group].includes(key)) {
//         result.push(group);
//         break;
//       }
//     }
//   } else {
//     result.push(groupList[key]);
//   }
// }
// console.log(result.flat(1).join("\n"));

// 6603번 문제
// let input = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// input = input.map((e) => e.split(" ").map(Number));
// const result = [];
// const solution = (arr, line) => {
//   if (line.length !== 6) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       const copyArr = [...arr];
//       const copyLine = [...line];
//       const num = copyArr.splice(i, 1);
//       if (copyLine.length === 0 || num[0] > copyLine[copyLine.length - 1]) {
//         copyLine.push(num[0]);
//         solution(copyArr, copyLine);
//       }
//     }
//   } else {
//     line.length !== 0 && result.push(line.join(" "));
//     line = [];
//   }
// };
// input.pop();
// input.forEach((e) => {
//   e.shift();
//   const nums = [...e];
//   const lineList = solution(nums, []);
//   result.push(lineList);
// });
// result.pop();
// console.log(result.join("\n"));

// 15664번 문제
// const input = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, M] = input[0].split(" ").map(Number);
// const nums = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// const list = [];
// const backTracking = (arr, line) => {
//   if (line.length !== M) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       const copyArr = [...arr];
//       const copyLine = [...line];
//       const num = copyArr.splice(i, 1);
//       if (copyLine.length === 0 || copyLine[copyLine.length - 1] <= num[0]) {
//         copyLine.push(num);
//         backTracking(copyArr, copyLine);
//       }
//     }
//   } else {
//     list.push(line.join(" "));
//     line = [];
//   }
// };
// backTracking(nums, []);
// const result = Array.from(new Set(list)).join("\n");
// console.log(result);

// 9659번 문제
// const N = BigInt(require("fs").readFileSync("./input.txt", "utf-8").trim());
// console.log(
//   BigInt(require("fs").readFileSync("./input.txt", "utf-8").trim()) % 2n === 1n
//     ? "SK"
//     : "CY"
// );

// 1940번 문제
// let [N, M, nums] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// nums = nums.split(" ").map(Number);
// let result = 0;
// for (let i = 0; i < nums.length - 1; i++) {
//   const cur = nums[i];
//   for (let j = i + 1; j < nums.length; j++) {
//     const next = nums[j];
//     if (cur + next === +M) {
//       result++;
//       break;
//     }
//   }
// }
// console.log(result);

// 14241번 문제
// const input = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const sizes = input[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => b - a);
// let sum = [];
// let score = [];
// for (let i = 0; i < sizes.length - 1; i++) {
//   sum[i] = !sum.length ? sizes[i] + sizes[i + 1] : sum[i - 1] + sizes[i + 1];
//   score[i] = !score.length
//     ? sizes[i] * sizes[i + 1]
//     : score[i - 1] + sum[i - 1] * sizes[i + 1];
// }
// console.log(score.pop());

// 26517번 문제
// const [k, arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const x = +k;
// const [a, b, c, d] = arr.split(" ").map(Number);
// const result = a * x + b === c * x + d ? `Yes ${a * x + b}` : "No";
// console.log(result);

// 11170번 문제
// const [T, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const nums = arr.map((e) => e.split(" ").map(Number));
// const result = new Array(+T).fill(0);
// nums.forEach((e, j) => {
//   for (let i = e[0]; i <= e[1]; i++) {
//     result[j] += i
//       .toString()
//       .split("")
//       .filter((e) => e === "0").length;
//   }
// });
// console.log(result.join("\n"));

// 2752번 문제
// const arr = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b)
//   .join(" ");
// console.log(arr);

// 10797번 문제
// let [T, num] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// console.log(
//   num
//     .split(" ")
//     .map(Number)
//     .filter((e) => e === +T).length
// );

// 15665번 문제
// const input = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const destructuring = (arr) => arr.split(" ").map(Number);
// const [N, M] = destructuring(input[0]);
// const nums = destructuring(input[1]).sort((a, b) => a - b);
// let result = [];
// const backTracking = (arr, line) => {
//   if (line.length !== M) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       const copyLine = [...line];
//       const num = arr[i];
//       copyLine.push(num);
//       backTracking(arr, copyLine);
//     }
//   } else {
//     result.push(line.join(" "));
//     line = [];
//   }
// };
// backTracking(nums, []);
// result = Array.from(new Set(result)).join("\n");
// console.log(result);

// 15666번 문제
// const [i1, i2] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const destructuring = (arr) => arr.split(" ").map(Number);
// const [N, M] = destructuring(i1);
// const nums = destructuring(i2).sort((a, b) => a - b);
// let result = [];
// const backTracking = (arr, line) => {
//   if (line.length !== M) {
//     for (let i = 0; i < arr.length; i++) {
//       const copyArr = [...arr];
//       const copyLine = [...line];
//       if (
//         copyLine.length === 0 ||
//         copyLine[copyLine.length - 1] <= copyArr[i]
//       ) {
//         copyLine.push(copyArr[i]);
//         backTracking(copyArr, copyLine);
//       }
//     }
//   } else {
//     result.push(line.join(" "));
//     line = [];
//   }
// };
// backTracking(nums, []);
// result = Array.from(new Set(result)).join("\n");
// console.log(result);

// 1966번 문제
// let [N, ...input] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const result = new Array(+N);
// input = input.map((e) => e.split(" ").map(Number));
// const solution = (arr) => {
//   const [N, M] = arr.shift();
//   let nums = arr.shift();
//   let [num, index] = [nums[M], M];
//   let count = 1;
//   let max = Math.max(...nums);
//   while (max !== num || index !== 0) {
//     if (nums[0] === max) {
//       nums.shift();
//       max = Math.max(...nums);
//       count++;
//     } else {
//       const firstEl = nums.shift();
//       nums = [...nums, firstEl];
//     }
//     index = index === 0 ? nums.length - 1 : index - 1;
//   }
//   return count;
// };
// for (let i = 0; i < +N; i++) result[i] = solution(input);
// console.log(result.join("\n"));

// 9884번 문제
// let [A, B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// let result = 0;
// while (true) {
//   if (A == B) {
//     result = B;
//     break;
//   }
//   [A, B] = [Math.max(A, B) - Math.min(A, B), Math.min(A, B)];
// }
// console.log(result);

// 10974번 문제
// const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const nums = new Array(N).fill(1).map((e, i) => e + i);
// const result = [];
// const backTracking = (arr, line) => {
//   if (line.length !== N) {
//     for (let i = 0; i < arr.length; i++) {
//       const copyArr = [...arr];
//       const copyLine = [...line];
//       copyLine.push(copyArr.splice(i, 1));
//       backTracking(copyArr, copyLine);
//     }
//   } else {
//     result.push(line.join(" "));
//     line = [];
//   }
// };
// backTracking(nums, []);
// console.log(result.join("\n"));

// 14650번 문제
// const N = +require("fs").readFileSync("./input.txt", "utf-8").trim();
// const nums = [0, 1, 2];
// const result = [];
// const backTracking = (arr, line) => {
//   if (line.length !== N) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       const copyArr = [...arr];
//       const copyLine = [...line];
//       const num = copyArr[i];
//       copyLine.push(num);
//       backTracking(copyArr, copyLine);
//     }
//   } else {
//     const lineNum = +line.join("");
//     !(lineNum % 3) &&
//       lineNum !== 0 &&
//       lineNum.toString().split("").length === N &&
//       result.push(lineNum);
//     line = [];
//   }
// };
// backTracking(nums, []);
// console.log(result.length);

// 1201번 문제
// const [n, k] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const nums = [1, 2, 3];
// const result = [];
// const backTracking = (arr, line) => {
//   const sum = line.reduce((acc, cur) => acc + cur, 0);
//   if (sum < n) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//       const copyArr = [...arr];
//       const copyLine = [...line];
//       copyLine.push(copyArr[i]);
//       backTracking(copyArr, copyLine);
//     }
//   } else {
//     sum === n && result.push(line);
//     line = [];
//   }
// };
// backTracking(nums, []);
// console.log(Boolean(result[k - 1]) ? result[k - 1].join("+") : -1);

// 16938번 문제 리팩토링 해야할듯... 더 좋은 방식도 있을것으로 보임...
const [i1, i2] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n");
const destructuring = (arr) => arr.split(" ").map(Number);
const [N, L, R, X] = destructuring(i1);
const nums = new Array(N).fill(0).map((e, i) => e + i);
const A = destructuring(i2);
let backResult = [];
let result = 0;

const backTracking = (arr, line, aLen) => {
  if (line.length !== aLen) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      const copyArr = [...arr];
      const copyLine = [...line];
      const num = copyArr.splice(i, 1);
      if (copyLine[copyLine.length - 1] < num || !copyLine.length) {
        copyLine.push(...num);
        backTracking(copyArr, copyLine, aLen);
      }
    }
  } else {
    const lineA = line.map((e) => A[e]);
    backResult.push(lineA);
    line = [];
  }
};
const resultCheck = (e) => {
  const sumA = e.reduce((acc, cur) => acc + cur, 0);
  const diffATopBot = Math.max(...e) - Math.min(...e);
  if (sumA < L || sumA > R) return;
  if (diffATopBot < X) return;
  result++;
};
for (let i = 2; i <= N; i++) backTracking(nums, [], i);
backResult.forEach((e) => resultCheck(e));
console.log(result);

// 1912번 문제 메모리 초과
// const [n, i1] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const nums = i1.split(" ").map(Number);
// let dp = [];
// const solution = (arr) => {
//   let processArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0) processArr[i] = arr[i];
//     else if (processArr[i]) processArr[i];
//     else processArr[i] = processArr[i - 1] + arr[i];
//   }
//   if (nums.length !== 0) {
//     nums.shift();
//     dp = [...dp, Math.max(...processArr)];
//     processArr = [];
//     solution(nums);
//   }
// };
// solution(nums);
// console.log(Math.max(...dp));

// 11576번 문제  푸는중
// const input = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [A, B] = input[0].split(" ").map(Number);
// const n = +input[1];
// const nums = input[2].split(" ").map(Number).reverse();
// let originNum = 0;
// const result = new Array(n);
// nums.forEach((e, i) => (originNum += A ** i * e));
// for (let i = n - 1; i >= 0; i--) {
//   result[i] = Number.parseInt(originNum / B ** i, 10);
//   originNum %= B ** i;
// }

// console.log(result.reverse().join(" "));

// 17413번 문제 리팩토링 할것.
// const S = require("fs").readFileSync("./input.txt", "utf-8").trim().split("");
// const result = [];
// for (let i = 0; i < S.length; i++) {
//   if (S[0] === "<") {
//     result.push(S.splice(0, S.indexOf(">") + 1).join(""));
//     i = 0;
//   } else {
//     if (S.indexOf("<") === -1) {
//       if (S.indexOf(" ") !== -1)
//         result.push(
//           `${S.splice(0, S.indexOf(" ") + 1)
//             .reverse()
//             .join("")
//             .trim()} `
//         );
//       else result.push(S.splice(0, S.length).reverse().join(""));
//     } else {
//       result.push(
//         S.indexOf(" ") !== -1
//           ? S.indexOf("<") < S.indexOf(" ")
//             ? S.splice(0, S.indexOf("<")).reverse().join("")
//             : `${S.splice(0, S.indexOf(" ") + 1)
//                 .reverse()
//                 .join("")
//                 .trim()} `
//           : S.splice(0, S.indexOf("<")).reverse().join("")
//       );
//     }
//     i = 0;
//   }
// }
// console.log(result.join(""));

// 11441번 문제 메모리 초과
// const input = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const data = {
//   N: +input.shift(),
//   nums: [...input.shift().split(" ").map(Number)],
//   M: +input.shift(),
//   problems: [
//     ...input.splice(0, input.length).map((e) => e.split(" ").map(Number)),
//   ],
// };
// const { nums, M, problems } = data;
// const result = new Array(M).fill(0);
// problems.forEach(
//   (e, i) =>
//     (result[i] = nums.slice(e[0] - 1, e[1]).reduce((acc, cur) => acc + cur, 0))
// );
// console.log(result.join("\n"));

// 11279번 문제 푸는중
// const [N, ...X] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// const heap = [];
// const result = [];
// X.forEach((x) => {
//   switch (x) {
//     case 0:
//       result.push(heap.length === 0 ? 0 : heap.splice(heap.indexOf(Math.max(...heap)), 1));
//       break;
//     default:
//       heap.push(x);
//       break;
//   }
// });
// console.log(result.flat().join("\n"));

// 20291번 문제 왜 초과일까..
// let [N, ...files] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// files = files.map((e) => e.split("."));
// console.log(files);
// let extension = new Set(files.map((e) => e[1]));
// extension = Array.from(extension).sort();
// console.log(extension);
// const result = new Array(extension.length).fill(0);
// extension.forEach((e, i) => {
//   const data = files.filter((el) => e === el[1]);
//   result[i] = `${e} ${data.length}`;
// });
// console.log(result.join("\n"));

// problem.forEach((e, i) => {
//   for (let j = 0; j < groupList.length; j++) {
//     if (e[1] === 1) {
//       if (groupList[j].indexOf(e[0]) !== -1) {
//         result[i] = groupList[j][0];
//         break;
//       }
//     } else {
//       if (groupList[j].indexOf(e[0]) !== -1) {
//         result[i] = groupList[j].splice(1, groupList[j].length);
//         break;
//       }
//     }
//   }
// });
// console.log(result.flat(1).join("\n"));

// 28279번 문제 시간초과
// let [N, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// arr = arr.map((e) => e.split(" ").map(Number));
// const deQue = [];
// let result = [];
// for (let i = 0; i < +N; i++) {
//   let text = "";
//   switch (arr[i][0]) {
//     case 1:
//       deQue.unshift(arr[i][1]);
//       break;
//     case 2:
//       deQue.push(arr[i][1]);
//       break;
//     case 3:
//       deQue.length !== 0 ? (text = deQue.shift()) : (text = -1);
//       break;
//     case 4:
//       deQue.length !== 0 ? (text = deQue.pop()) : (text = -1);
//       break;
//     case 5:
//       text = deQue.length;
//       break;
//     case 6:
//       text = Number(!!deQue);
//       break;
//     case 7:
//       text = !deQue ? -1 : deQue[0];
//       break;
//     case 8:
//       text = !deQue ? -1 : deQue[deQue.length - 1];
//       break;
//   }
//   text !== "" && result.push(text);
// }
// console.log(result.join("\n"));

// 9613번 문제 10% 에서 틀림
// let [T, ...N] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const result = new Array(+T).fill(0n);
// N = N.map((e) => e.split(" ").map(BigInt));
// N = N.map((e) => {
//   e.shift();
//   return e.sort((a, b) => (a < b ? -1 : 1));
// });
// N.forEach((e, k) => {
//   for (let i = 0; i < e.length - 1; i++) {
//     for (let j = i + 1; j < e.length; j++) {
//       let [A, B] = [e[i], e[j]];
//       while (B !== 0n) [A, B] = [B, A % B];
//       result[k] += A;
//     }
//   }
// });
// console.log(result.join("\n"));

// 10973번 문제 메모리 초과
// const [N, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const nums = new Array(+N).fill(1).map((e, i) => e + i);
// const numList = [];
// const solution = (arr, line) => {
//   if (line.length !== +N) {
//     for (let i = 0; i < arr.length; i++) {
//       const copyArr = [...arr];
//       const copyLine = [...line];
//       const num = copyArr.splice(i, 1);
//       copyLine.push(num);
//       solution(copyArr, copyLine);
//     }
//   } else {
//     numList.push(line.join(" "));
//     line = [];
//   }
// };
// solution(nums, []);
// const result = numList.indexOf(...arr)
//   ? numList[numList.indexOf(...arr) - 1]
//   : -1;
// console.log(result);

// 13717번 문제 푸는중
// const fs = require("fs"); // 제출시 삭제
// const path = "./input.txt"; // 제출시 삭제

// const readline = require("readline");
// const rl = readline.createInterface({
//   // input: process.stdin, // 제출시 활성화
//   input: fs.createReadStream(path), // 제출시 삭제
//   output: process.stdout,
// });

// let input = [];
// const counts = [];
// let max = 0;
// let result = "";
// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   let [N, ...arr] = input;
//   const pokemon = [];
//   for (let i = 0; i < arr.length / 2; i++)
//     pokemon[i] = [arr[2 * i], arr[2 * i + 1].split(" ").map(Number)];
//   pokemon.forEach((e) => counting(e));
//   const countSum = counts.reduce((acc, cur) => acc + cur, 0);
//   console.log(`\n${countSum}\n${result}`);
//   process.exit();
// });
// function counting(pokemon) {
//   const [a, b] = pokemon[1];
//   let returnCandy = b % a ? Math.floor(b / a) * 2 : (b / a) * 2;
//   let totalReturnCandy = returnCandy;
//   while (returnCandy >= a) {
//     returnCandy =
//       returnCandy % a ? Math.floor(returnCandy / a) * 2 : (returnCandy / a) * 2;
//     totalReturnCandy += returnCandy;
//   }
//   let count =
//     (b + totalReturnCandy) % a
//       ? Math.floor((b + totalReturnCandy) / a)
//       : (b + totalReturnCandy) / a;
//   counts.push(count);
//   if (max < count) {
//     max = count;
//     result = pokemon[0];
//   }
// }
// 위 방식으로 해야함

// let [N, ...arr] = require('fs').readFileSync('./input.txt','utf-8').trim().split('\n');
// let pokemon = [];
// let total = 0;
// let max = 0;
// let result = "";
// for (let i = 0; i < arr.length / 2; i++)
//   pokemon[i] = [arr[i * 2], arr[2 * i + 1].split(" ").map(Number)];
// pokemon.sort((a, b) => a[1][1] / a[1][0] - b[1][1] / b[1][0]);
// pokemon.forEach((e) => {
//   const [a, b] = e[1];
//   let returnCandy = Math.floor(b / a) * 2;
//   let totalReturnCandy = returnCandy;
//   while (returnCandy >= a) {
//     returnCandy = Math.floor((returnCandy / a) * 2);
//     totalReturnCandy += returnCandy;
//   }
//   const count = Math.floor((b + totalReturnCandy) / a);
//   if (max < count) result = e[0];
//   if (max <= count) max = count;
//   total += count;
// });
// console.log(`${total}\n${result}`);

// 1931번 문제 시간 초과
// let [N, ...rooms] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// rooms = rooms.map((e) => e.split(" ").map(Number));
// rooms.sort((a, b) => a[0] - b[0]);
// const counts = new Array(+N).fill(1);
// let [i, j] = [0, 1];
// let time = rooms[0][1];
// while (true) {
//   if (j >= N) {
//     i++;
//     j = i + 1;
//     time = rooms[i][1];
//     if (j === +N) break;
//   }
//   if (time <= rooms[j][0]) {
//     time = rooms[j][1];
//     counts[i]++;
//   }
//   j++;
// }
// console.log(Math.max(...counts));

// 2436번 문제 푸는중
// let [A, B] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// let [a, b] = [0, 0];
// let i = 2;
// const nums = [];
// while (true) {
//   if (a > 100000000 || b > 100000000) break;
//   [a, b] = [A * i, A];
//   if ((a * b) / A === B) {
//     console.log(a, b);
//     nums.push([a, b]);
//   }
//   i++;
// }
// console.log(nums);
// 3986번 문제 왜 틀린겨..
// let [N, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// let count = 0;
// arr = arr.map((e) => e.split(""));
// for (let j = 0; j < +N; j++) {
//   const A = [...arr[j]];
//   let len = A.length;
//   if (len % 2) break;
//   for (let i = 0; i < len - 1; i++) {
//     if (A[i] === A[i + 1]) {
//       A.splice(i, 2);
//       i = -1;
//       len -= 2;
//     }
//   }
//   !len && count++;
// }
// console.log(count);

// 15624번 문제 푸는중
// const n = BigInt(require("fs").readFileSync("./input.txt", "utf-8").trim());
// const num = BigInt(1000000007);
// const fibo = (i) => {
//   if(i === BigInt(0)) return BigInt(0);
//   else if(i === BigInt(1)) return BigInt(1);
//   else return fibo(i) = (fibo(i-BigInt(1))+fibo(i-BigInt(2)))%num;
// }
// console.log(fibo(n));
// const fibo = (i) => {
//   for (let j = BigInt(0); j < i; j++) {
//     if (j <= BigInt(1)) dp[j] = j;
//     else if (dp[j]) dp[j];
//     else dp[j] = (dp[j - BigInt(2)] + dp[j - BigInt(1)]) % num;
//   }
// };
// fibo(n + BigInt(1));
// console.log(`${dp[n]}`);

// 1002번 문제 푸는중
// let [T, ...position] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// let count = new Array(+T).fill(0);
// const solution = (arr, index) => {
//   const [x1, y1, r1, x2, y2, r2] = arr.split(" ").map(Number);
//   for (let x = -10000; x < 10000; x++) {
//     for (let y = -10000; y < 10000; y++) {
//       if ((x - x1) ** 2 + (y - y1) ** 2 - r1 ** 2 === 0) {
//         if ((x - x2) ** 2 + (y - y2) ** 2 - r2 ** 2 === 0) count[index]++;
//       }
//     }
//   }
// };
// position.forEach((e, i) => solution(e, i));
// count.forEach((e) => console.log(e !== Infinity ? e : -1));

// 11051번 문제 푸는중 dp를 어떻게 적용해야 바른 방식일지..
// let [N, K] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(BigInt);
// const dp = [BigInt(1), BigInt(1)];
// const solution = (n, k) => {
//   let test = 0;
//   while (k >= 1) {
//     dp[0] *= n;
//     dp[1] *= k;
//     n--;
//     k--;
//     test++;
//   }
// };
// solution(N, K);
// // console.log(dp);
// console.log((dp[0] / dp[1]) % BigInt(10007));

// 4134번 문제 푸는중
/**
 * 문제
 * 정수 n(0 ≤ n ≤ 4*109)가 주어졌을 때, n보다 크거나 같은 소수 중 가장 작은 소수 찾는
 * 프로그램을 작성하시오.
 *
 * 입력
 * 첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 정수 n이
 * 주어진다.
 *
 * 출력
 * 각각의 테스트 케이스에 대해서 n보다 크거나 같은 소수 중 가장 작은 소수를 한 줄에 하나씩
 * 출력한다.
 */
// const [T, ...N] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(BigInt);
// const result = new Array(T).fill(BigInt(0));
// const solution = (max) => {
//   let i = max;
//   while (true) {
//     if (
//       i !== BigInt(1) &&
//       (i === BigInt(2) || (i !== BigInt(2) && i % BigInt(2) !== BigInt(0))) &&
//       (i === BigInt(3) || (i !== BigInt(3) && i % BigInt(3) !== BigInt(0))) &&
//       (i === BigInt(5) || (i !== BigInt(5) && i % BigInt(5) !== BigInt(0))) &&
//       (i === BigInt(7) || (i !== BigInt(7) && i % BigInt(7) !== BigInt(0)))
//     )return i;

//     i++;
//   }
// };
// N.forEach((e, i) => (result[i] = solution(e)));
// console.log(result.join("\n"));

// 1308번 문제 푸는중
// const [today, dday] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const years = [];
// const parseDate = (arr) => {
//   const [year, month, date] = arr.split(" ").map(Number);
//   years.push(year);
//   let totalDate = date;
//   for (let i = 2; i <= month; i++) {
//     switch (i) {
//       case 3:
//         totalDate +=
//           !(year % 400) || (!(year % 4) && year % 100 !== 0) ? 29 : 28;
//         break;
//       case 5:
//         totalDate += 30;
//         break;
//       case 7:
//         totalDate += 30;
//         break;
//       case 10:
//         totalDate += 30;
//         break;
//       case 12:
//         totalDate += 30;
//         break;
//       default:
//         totalDate += 31;
//         break;
//     }
//   }
//   const yearCount =
//     (year +
//       parseInt(year / 400, 10) +
//       parseInt(year / 4, 10) -
//       parseInt(year / 100, 10)) *
//     365;
//   totalDate += yearCount;
//   // for (let i = 1; i <= year; i++) {
//   //   totalDate += !(i % 400) || (!(i % 4) && i % 100 !== 0) ? i * 366 : i * 365;
//   // }
//   return totalDate;
// };
// const todayDate = parseDate(today);
// const ddayDate = parseDate(dday);
// const yearGap = ddayDate - todayDate;
// console.log(todayDate);
// console.log(ddayDate);

// console.log("test", yearGap);
// console.log(
//   yearGap / 365 > 1000
//     ? "gg"
//     : `D-${yearGap > 0 ? ddayDate - todayDate + 1 : ddayDate - todayDate}`
// );

// 1340번 문제 푸는 중
// let [month, date, year, time] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ");
// const monthL = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// // month = BigInt(monthL.indexOf(`${month}`) + 1);
// date = date.split(",");
// date.pop();
// // date = BigInt(date);
// // console.log(month);
// let [hour, minute] = time.split(":").map(Number);
// let totalDate = date !== 1 ? Number(...date) : 0;
// console.log(totalDate);
// const yearToDate =
//   !(year % 400) || (!(year % 4) && year % 100 !== 0) ? 366 : 365;
// const fullYearMinute = parseFloat(yearToDate * 24 * 60);
// // console.log(fullYearMinute);
// for (let i = 0; i < monthL.length; i++) {
//   if (month === monthL[i]) break;
//   if (i === 2 || 4 || 6 || 7 || 9 || 11) {
//     if (i === 2) {
//       totalDate += !(year % 400) || (!(year % 4) && year % 100 !== 0) ? 29 : 28;
//     } else {
//       totalDate += 30;
//     }
//   } else {
//     totalDate += 31;
//   }
// }
// console.log(totalDate);
// const totalMinute = (totalDate * 24 + hour) * 60 + minute;

// console.log(totalMinute / parseFloat(fullYearMinute));

// console.log(month, date, year, hour, minute);

// 1476번 문제 메모리 초과 -> 이전 성공 기록들도 다 4MB를 초과한 답임. 이 코드가 맞는것으로 보이나 통과하진 못함.
// const [E, S, M] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// let year = 0;
// while (true) {
//   if (year % 15 === E && year % 28 === S && year % 19 === M) break;
//   year++;
// }
// console.log(year);

// 1837번 문제 푸는중
// const [P, K] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(BigInt);
// let [p, q] = [0, 0];
// for (let i = BigInt(2); i < P; i++) {
//   if (!(P % i)) {
//     p = i;
//     for (let j = BigInt(2); j <= P / i; j++) {
//       if (!((P / i) % j) && j !== P) break;
//       else q = P / i;
//     }
//   }
// }
// const result = (p || q) < K ? `BAD ${p < q ? p : q}` : "GOOD";
// console.log(result);

// 1966번 문제 풀 예정
// let [T, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// arr = arr.map((e) => e.split(" ").map(Number));
// console.log(arr);

// 11444번 문제 푸는중 dp는 아닌듯 싶다.
// const n = BigInt(require("fs").readFileSync("./input.txt", "utf-8").trim());
// const dp = [];
// const fibo = (i) => {
//   for (let j = BigInt(0); j <= i; j++) {
//     if (j <= BigInt(1)) dp[j] = j;
//     else if (dp[j]) dp[j];
//     else dp[j] = dp[j - BigInt(1)] + dp[j - BigInt(2)];
//   }
//   return dp[i];
// };
// console.log(`${fibo(n) % BigInt(1000000007)}`);
// fibo(n);
// console.log(dp[n-BigInt(1)]);
// let cur = 0;
// let prev = 0;
// for (let i = BigInt(1); i <= n; i++) {
//   if (i <= 1) {
//     prev = i - BigInt(1);
//     cur = i;
//   } else {
//     cur += prev;
//     prev = cur - prev;
//   }
// }
// console.log(`${cur % BigInt(1000000007)}`);
// 25192번 문제 푸는중
// const [N, ...chat] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// let result = 0;
// chat.shift();
// for (let i = 0; i <= chat.length; i++) {
//   if (i === chat.length) {
//     const user = new Set(chat).size;
//     result += user;
//   }
//   if (chat[i] === "ENTER") {
//     const talk = chat.splice(0, i);
//     const user = new Set(talk).size;
//     result += user;
//     chat.shift();
//     i = 0;
//   }
// }
// console.log(result);
// let chatList = chat.join(" ").split("ENTER");
// let total = 0;
// chatList.shift();
// chatList = chatList.map((e) => e.trim().split(" "));
// chatList.forEach((e) => {
//   const chatSet = new Set(e);
//   total += chatSet.size;
// });
// console.log(total);

// 1003번 문제 푸는중
// const [T, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// const result = new Array(T);
// let one = [];
// let zero = [];
// let line = [0, 0];
// let dp = [];

// const fibo = (n) => {
//   console.log(dp);
//   if (n === 0) {
//     line[0]++;
//     // zero.push(0);
//     return (dp[n] = 0);
//   }
//   if (n === 1) {
//     line[1]++;
//     // one.push(1);
//     return (dp[n] = 1);
//   }
//   if (Boolean(dp[n])) return dp[n];
//   return (dp[n] = fibo(n - 1) + fibo(n - 2));
// };
// arr.forEach((e, i) => {
//   fibo(e);
//   result.push(line.join(" "));

//   // line = [0, 0];
//   dp = [];
// });
// console.log(result.join("\n"));

// 26069번 문제 푸는중
// let [N, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// arr = arr.map((e) => e.split(" "));
// let count = 1;
// let cur = "";
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i][0] === cur) {
//     count++;
//     cur = arr[i][1];
//     if (i === arr.length - 1) {
//       count++;
//       break;
//     }
//   }
//   if (arr[i].includes("ChongChong")) {
//     cur = arr[i][Number(!arr[i].indexOf("ChongChong"))];
//     i++;
//   }
// }
// console.log(count);
// 3273번 문제 푸는중
// let [n, arr, target] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// arr = arr
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// const result = [];
// let i = +n - 1;
// for (let j = 0; j < i; j++) {
//   if (arr[i] + arr[j] === +target) result.push([arr[i], arr[j]]) && i--;
// }
// console.log(result.length);

// 18110번 문제 푸는중
// let [n, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n")
//   .map(Number);
// const sum1 = arr.reduce((acc, cur) => acc + cur, 0);
// const avg = parseInt(sum1 / n, 10);
// const solvedAvg = Math.round(avg * 0.15);
// arr.sort((a, b) => a - b);
// for (let i = 0; i < solvedAvg; i++) {
//   arr.shift();
//   arr.pop();
// }
// const sum2 = arr.reduce((acc, cur) => acc + cur, 0);
// const result = Math.round(sum2 / (n - solvedAvg * 2));
// console.log(result);

// 1932번 문제 푸는중
// const [n, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const triangle = arr.map((e) => e.split(" ").map(Number));
// const memo = [];
// const maxValue = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < i+1; j++) {

//     }
//   }
// }
// for(let i = 0; i < triangle.length; i++){

// }

// 1629번 문제 푸는중..
// const [A, B, C] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(BigInt);
// let result = BigInt(1);
// const divideSearch = (b) => {
//   if (b === BigInt(0)) return result;
//   if (b > BigInt(0)) return (result = divideSearch(b - BigInt(1)) * A);
// };
// divideSearch(B - BigInt(1));
// console.log(`${result % C}`);

// 2504번 문제 푸는중. 재귀함수로 관리 해야할거 같음.
// const problem = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("");
// let sum = 0;
// const duplicate1 = () => {

// }
// while (problem.length > 0) {
//   const target = problem.pop();
//   const next = problem[problem.length - 1];
//   console.log("target", target);
//   console.log("next", next);
//   if ((target === ")" && next === "[") || (target === "]" && next === "(")) {
//     sum = 0;
//     console.log("break");
//     break;
//   }
//   if ((target === ")" && next === ")") || (target === ")" && next === "]")) {
//     let innerSum = 0;
//     console.log("시작1");
//     for (let i = problem.length - 1; i >= 0; i--) {
//       const innerTarget = problem.pop();
//       const innerNext = problem[problem.length - 1];
//       if (innerTarget === ")" && innerNext === "(") innerSum += 2;
//       if (innerTarget === "]" && innerNext === "[") innerSum += 3;
//       if ((innerTarget === "(" && innerNext === "(") || "[") {
//         innerSum *= 2;
//         sum += innerSum;
//         break;
//       }
//     }
//   } else if (
//     (target === "]" && next === "]") ||
//     (target === "]" && next === ")")
//   ) {
//     let innerSum = 0;
//     console.log("시작2");
//     for (let i = problem.length - 1; i >= 0; i--) {
//       const innerTarget = problem.pop();
//       const innerNext = problem[problem.length - 1];
//       console.log("innerTarget", innerTarget);
//       console.log("innerNext", innerNext);
//       if (innerTarget === ")" && innerNext === "(") innerSum += 2;
//       if (innerTarget === "]" && innerNext === "[") innerSum += 3;
//       if ((innerTarget === "[" && innerNext === "(") || "[") {
//         innerSum *= 3;
//         sum += innerSum;
//         console.log("innerSum", innerSum);
//         break;
//       }
//     }
//   } else {
//     if (target === ")" && next === "(") sum += 2;
//     if (target === "]" && next === "[") sum += 3;
//   }
// }
// console.log(sum);

// 10819번 문제 풀어야함.
// const [N, A] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const result = [];
// const arr = A.split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// const min = arr.splice(0, Math.round(arr.length / 2));
// let sum = 0;
// arr.sort((a, b) => b - a);
// for (let i = 0; i < min.length; i++) {
//   if (arr[i] === undefined) {
//     if (result[0] === min[i]) {
//       result.push(min[i]);
//     } else {
//       result.unshift(min[i]);
//     }
//   } else {
//     if (i % 2) {
//       result.unshift(min[i]);
//       result.push(arr[i]);
//     } else {
//       result.unshift(arr[i]);
//       result.push(min[i]);
//     }
//   }
// }
// for (let i = 1; i < result.length; i++)
//   sum += Math.abs(result[i - 1] - result[i]);
// console.log(arr);
// console.log(min);
// console.log(result);
// console.log(sum);

// const list = [];
// while (arr.length) {
//   let max = arr.pop();
//   let min = arr.shift();
//   if(i%2){

//   }

// }

// 19532번 문제 푸는중...
// const [a, b, c, d, e, f] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// let x = 0;
// for (x; x <= 999; x++) {
//   if (a * (-1 * x) + b * ((f - d * (-1 * x)) / e) === c) {
//     x *= -1;
//     break;
//   } else if (a * x + b * ((f - d * x) / e) === c) break;
// }
// x = x !== 1000 ? x : 0;
// let y = x !== 0 ? (c - a * x) / b || (f - d * x) / e : 0;
// console.log(`${x} ${y}`);

// 1929번 문제 푸는중..
// const [M, N] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split(" ")
//   .map(Number);
// const nums = new Array(N - M + 1).fill(0).map((e, i) => (e += i + M));
// const newNums = [...nums];
// newNums.forEach((e) => {
//   if (
//     e === 1 ||
//     (e !== 2 && !(e % 2)) ||
//     (e !== 3 && !(e % 3)) ||
//     (e !== 5 && !(e % 5)) ||
//     (e !== 7 && !(e % 7))
//   ) {
//     const deleteIndex = nums.indexOf(e);
//     nums.splice(deleteIndex, 1);
//   }
// });
// console.log(nums.join("\n"));

// 10816번 문제 푸는중. 이진탐색
// const arr = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const numbers = arr[1]
//   .split(" ")
//   .map(Number)
//   .sort((a, b) => a - b);
// const numberM = arr[3].split(" ").map(Number);
// const result = new Array(numberM.length).fill(0);
// const half = numberM.forEach((el, i) =>
//   numbers.filter((e) => e === el && result[i]++)
// );
// console.log(result.join(" "));

// numberM.forEach((e, i) => {
//   for (let j = 0; j < numbers.length; j++) {
//     if (e === numbers[j]) result[i] += 1;
//   }
// });

// 2563번 문제 푸는중..
// const [N, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const newArr = arr.map((e) => e.split(" ").map(Number));
// newArr.sort((a, b) => a[0] - b[0]);
// const len = newArr.length;
// let initialExtent = N * 100;
// let duplicateExtent = 0;
// console.log(newArr);
// for (let i = 0; i < len; i++) {
//   let target = newArr.shift();
//   for (let j = 0; j < newArr.length; j++) {
//     // console.log(newArr[j][0], newArr[j][1]);
//     if (target[0] + 10 > newArr[j][0]) {
//       console.log(
//         (target[0] + 10 - newArr[j][0]) * (newArr[j][1] + 10 - target[1])
//       );
//       duplicateExtent +=
//         (target[0] + 10 - newArr[j][0]) * (newArr[j][1] + 10 - target[1]);
//     }
//   }
// }
// console.log(initialExtent - duplicateExtent);

// 1972번 문제 풀어야함. map을 활용할것.
// const problem = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// problem.pop();
// const changed = problem.map((e) => e.split(""));
// const characterArr = [];
// const result = new Array(problem.length).fill(" ");
// const duplicateChar = new Array(problem.length).fill(0);
// changed.forEach((e, j) => {
//   let line = [];
//   let count = 0;
//   if (e.length < 2) line.push(...e);
//   for (let i = 1; i < e.length; i++) {
//     if (e[i - 1] === e[i]) count += 1;
//     duplicateChar[j] = count;
//     line.push(e[i - 1] + e[i]);
//   }
//   characterArr.push(line);
// });
// const mapList = new Map();
// characterArr.forEach((e, i) => {
//   mapList[i] = e;
// });
// characterArr.forEach((e, j) => {
//   let target = e.shift();
//   if (duplicateChar[j] >= 2) result[j] = " NOT ";
//   for (let i = 0; i < e.length; i++) {
//     if (e[i] === target) {
//       result[j] = " NOT ";
//       break;
//     }
//   }
// });
// result.forEach((e, i) => {
//   console.log(`${problem[i]} is${e}surprising.`);
// });

// 8979번 문제 8점 받음.. 다시 풀기
// let [standard, ...nation] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [N, K] = standard.split(" ").map(Number);
// nation = nation.map((e) => e.split(" ").map(Number));
// const newMap = new Map(nation.map((e) => [e.shift(), Number(e.join(""))]));
// const rank = Array.from(newMap).sort((a, b) => b[1] - a[1]);
// let nRank = 1;
// for (let i = 0; i < rank.length - 1; i++) {
//   if (rank[i][0] === K) break;
//   if (rank[i][1] === rank[i + 1][1]) nRank++;
//   else nRank++;
// }
// console.log(nRank);
// // const result = [];
// const result = new Array(N);
// const mapResult = {};
// // nation.sort();
// const scoreNation = nation.map((e) => e.split(" ").map(Number));
// console.log(scoreNation);
// scoreNation.map((e, i) => (result[i] = Number(e.join(""))));
// result.sort((a, b) => (b % 1000) - (a % 1000));
// console.log(scoreNation);
// console.log("result", result);
// let j = 1;
// for (let i = 0; i < result.length; i++) {
//   let prev = result[i - 1] % 1000;
//   let cur = result[i] % 1000;
//   mapResult[parseInt(result[i] / 1000, 10)] = prev === cur ? j - 1 : j;
//   j++;
// }
// console.log(result);
// console.log(mapResult);
// console.log(mapResult[K]);

// 1699번 문제 푸는중
// const N = Number(require("fs").readFileSync("./input.txt", "utf-8").trim());
// let num = N;
// let result = 0;
// let count = 0;
// while (result !== N) {
//   if (result + num * num > N) {
//     num -= 1;
//   } else {
//     result += num * num;
//     num = N - result;
//     count++;
//   }
// }
// console.log(count);

// let factorial = (function () {
//   let save = {};
//   let fact = function (number) {
//     if (number > 0) {
//       let saved = save[number - 1] || fact(number - 1);
//       let result = number * saved;
//       save[number] = result;

//       console.log(saved, result);
//       return result;
//     } else {
//       return 1;
//     }
//   };
//   return fact;
// })();
// factorial(7); // 1 1, 1 2, 2 6, 6 24, 24 120, 120 720, 720 5040
// factorial(7); // 720 5040-
// var fibonacci = (function () {
//   var save = {};
//   var fibo = function (number) {
//     if (number < 2) {
//       return number;
//     } else {
//       var saved1 = save[number - 1] || fibo(number - 1);
//       var saved2 = save[number - 2] || fibo(number - 2);
//       var result = saved1 + saved2;
//       save[number] = result;
//       console.log(saved1, saved2, result);
//       return result;
//     }
//   };
//   return fibo;
// })();
// fibonacci(5); // 1 0 1, 1 1 2, 2 1 3, 3 2 5, 5
// fibonacci(5);

// 2057번 문제 풀어야함
// const N = Number(require("fs").readFileSync("./input.txt", "utf-8").trim());
// if (N <= Number.MAX_SAFE_INTEGER) {
//   let i = 0;
//   let sum = 0;

//   while (i < N) {
//     let factorial = 1;
//     if (sum > N) {
//       break;
//     }
//     if (sum === N) {
//       break;
//     }
//     for (let j = 1; j <= i; j++) {
//       factorial *= j;
//     }
//     console.log(factorial);
//     sum += factorial;
//     i++;
//   }
//   console.log(sum === N ? "YES" : "NO");
// } else {
//   let i = BigInt(0);
//   let sum = BigInt(0);
//   let bigN = BigInt(N);
//   while (i < bigN) {
//     let factorial = BigInt(1);
//     if (sum > bigN) {
//       break;
//     }
//     if (sum === bigN) {
//       break;
//     }
//     for (let j = BigInt(1); j <= i; j++) {
//       factorial *= j;
//     }
//     console.log(factorial);
//     sum += factorial;
//     i++;
//   }
//   console.log(sum === bigN ? "YES" : "NO");
// }

// console.log(arrA);
// console.log(setA);
// console.log(sortedA);

// 1822번 문제 풀어야함.
// const [_, ...arr] = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("\n");
// const [A, B] = arr.map((e) => e.split(" ").map(Number));
// let elRmv = [...A];
// B.forEach((e) => {
//   A.forEach((el) => e === el && elRmv.splice(elRmv.indexOf(e), 1));
// });
// console.log(
//   elRmv.length !== 0 ? `${elRmv.length}\n${elRmv.join(" ")}` : elRmv.length
// );

// 2057번 문제 푸는중
// let N = Number(require("fs").readFileSync("./input.txt", "utf-8").trim());
// let i = 0;
// let sum = 0;

// while (i < N) {
//   let factorial = 1;
//   for (let j = 1; j <= i; j++) {
//     factorial *= j;
//   }
//   sum += factorial;
//   i++;
// }
// console.log(sum === N ? "YES" : "NO");

// 피보나치 5 다시 풀어야함..
// const N = Number(require("fs").readFileSync("./input.txt", "utf-8").trim());
// const arr = [0, 1];
// if (N > 2) {
//   for (let i = 2; i <= N; i++) {
//     const newNum = arr[i - 2] + arr[i - 1];
//     arr.push(newNum);
//   }
// }
// console.log(arr);
// console.log(arr[N]);

// 1252번 문제????????????? 뭐여

// const [A, B] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split(' ');
// let C = parseInt(A, 2) + parseInt(B, 2);
// let result = [];
// while (C > 0) {
//   if (C === 0) {
//     break;
//   }
//   if (C % 2 === 0) {
//     result.unshift(0);
//     C /= 2;
//   }
//   if (C % 2 === 1) {
//     result.unshift(1);
//     C = (C - 1) / 2;
//   }
// }
// while (1) {
//   if (result[0] !== 0) {
//     break;
//   }
//   result.shift();
// }
// console.log(result.join(''));

// 1373번 문제 푸는중 -> 왜 틀른겨

// const A = require("fs")
//   .readFileSync("./input.txt", "utf-8")
//   .trim()
//   .split("")
//   .map(Number)
//   .reverse();
// if (A.length % 3 !== 0) {
//   for (let i = 0; i < A.length % 3; i++) {
//     A.push(0);
//   }
// }
// let result = 0;
// for (let i = 1; i <= A.length / 3; i++) {
//   result +=
//     10 ** (i - 1) * (1 * A[3 * i - 3] + 2 * A[3 * i - 2] + 4 * A[3 * i - 1]);
// }
// console.log(result);

// const A = parseInt(
//   require('fs').readFileSync('./input.txt', 'utf-8').trim(),
//   10
// );
// const B = Number('0b' + A);
// console.log(B.toString(8));

// for (let j = 0; j < A.length; j += 3) {
//   result.unshift(1 * A[j] + 2 * A[j + 1] + 4 * A[j + 2]);
// }
// console.log(result.join(''));
// arr.forEach((e) => result.unshift(1 * e[0] + 2 * e[1] + 4 * e[2]));
// console.log(result.join(''));

// 15719번 문제 메모리 초과로 풀지 못한 문제임
// const [N, A] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const R = A.split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);
// let result = 0;
// for (let i = 0; i < N; i++) {
//   const CUR = R[i];
//   const NEXT = R[i + 1];
//   if (i + 1 !== N - 1) {
//     if (CUR === NEXT) {
//       result = CUR;
//       break;
//     }
//   }
// }
// console.log(result);

// const [N, A] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n');
// const R = A.split(' ').map(Number);
// const seen = new Set();
// let result = 0;
// for (const num of R) {
//   if (seen.has(num)) {
//     result = num;
//     break;
//   }
//   seen.add(num);
// }
// console.log(result);

// 1629번 문제 풀어야함. 근데 왜 틀린거짘ㅋ..
// const [A,B,C] = require('fs').readFileSync('./input.txt','utf-8').trim().split(' ').map(Number);
// console.log(Math.pow(A,B)%C);

// const testNum = Math.pow(2,52);

// 2558번 문제 풀어야함
// const [a, b] = require('fs')
//   .readFileSync('./input.txt', 'utf-8')
//   .trim()
//   .split('\n')
//   .map(Number);
// console.log(a + b);
