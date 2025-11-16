/**
 * 문제
 * Some computer programs have problems in displaying Arabic text, especially when mixed with English words in the same line, because Arabic is written from right to left and English is written from left to right. In this problem we will try to fix a text with some corrupted lines which consist of a mixture of Arabic and English words. For simplicity, all Arabic letters will be replaced with the letter '#'.
 * Each line will contain at most one English word. For a line containing an English word, the program that will fix the text will swap the words before the English word with the words after the English word. The words before the English word will remain in the same order. The words after the English word will also remain in the same order. For example, if the line is "# #### ### abc ##", it will be fixed to become "## abc # #### ###".
 * Please note that a line that contains words only of the same language is not corrupt.
 * 
 * 출력
 * For each test case, output, on a single line, the fixed line of input text.
 */
const [_, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ')).filter((_, idx) => idx % 2 === 0);
const result = input.map(e => {
  for (let i = 0; i < e.length; i++) {
    if (e[i][0] !== '#') {
      e = [...e.slice(i + 1), e[i], ...e.slice(0, i)];
      break;
    }
  }
  return e.join(' ');
}).join('\n');
console.log(result);