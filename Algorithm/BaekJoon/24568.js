/**
 * 문제
 * A regular box of cupcakes holds 8 cupcakes, while a small box holds 3 cupcakes. There are 28 students in a class and a total of at least 28 cupcakes. Your job is to determine how many cupcakes will be left over if each student gets one cupcake.
 * 
 * 출력
 * Output the number of cupcakes that are left over.
 */
const [R, S] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
console.log(R * 8 + S * 3 - 28);