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
let [A, B] = require('fs')
  .readFileSync('./input.txt', 'utf-8')
  .trim()
  .split(' ')
  .map(Number);
let i = 0;
let _B = B;
const arr = [];
while (_B > 0) {
  if (_B === 0) {
    break;
  }
  if (_B - i < 0) {
    for (let j = 0; j < _B; j++) {
      arr.push(i);
    }
    break;
  }
  _B -= i;
  for (let j = 0; j < i; j++) {
    arr.push(i);
  }
  i++;
}
const arr2 = arr.splice(A - 1, B - A + 1);
const result = arr2.reduce((acc, cur) => acc + cur);
console.log(result);

// 1463번 문제 -> DP 알고리즘 디자인으로 푸는 문제. 추가 학습후 다시 풀어볼것.
// let N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
// const minFuncToOne = (N) => {
//   const dp = new Array(N + 1).fill(0);
//   for (let i = 2; i < dp.length; i++) {
//     console.log(dp);
//     dp[i] = dp[i - 1] + 1;
//     console.log(dp[i]);
//     if (i % 2 === 0) {
//       dp[i] = Math.min(dp[i], dp[i / 2] + 1);
//       console.log('test1 : ', dp[i]);
//     }
//     if (i % 3 === 0) {
//       dp[i] = Math.min(dp[i], dp[i / 3] + 1);
//       console.log('test2 : ', dp[i]);
//     }
//   }
//   console.log('dp', dp);
//   return dp[N];
// };
// console.log(minFuncToOne(N));

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
