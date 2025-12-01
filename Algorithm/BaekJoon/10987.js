/**
 * 문제
 * 알파벳 소문자로만 이루어진 단어가 주어진다. 이때, 모음(a, e, i, o, u)의 개수를 출력하는 프로그램을 작성하시오.
 * 
 * 출력
 * 첫째 줄에 모음의 개수를 출력한다.
 */
const txt = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('').map(e => e.charCodeAt());
const vowel = ['a', 'e', 'i', 'o', 'u'].map(e => e.charCodeAt());
const result = txt.filter(e => vowel.includes(e)).length;
console.log(result);