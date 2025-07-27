/**
 * 문제
 * Determine if it is possible to produce two triangles of given side lengths, by cutting some rectangle with a single line segment, and freely rotating and flipping the resulting pieces.
 * 
 * 출력
 * Print, on a single line, whether there exists a rectangle which could have been cut to form triangles of the given side lengths. If such a rectangle exists, print YES. Otherwise, print NO.
 */
const input = Array.from(new Set(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number)).flat().sort((a, b) => a - b)));
const isTriangle = (a, b, c) => a ** 2 + b ** 2 === c ** 2;
console.log(input.length === 3 && isTriangle(...input) ? 'YES' : 'NO');