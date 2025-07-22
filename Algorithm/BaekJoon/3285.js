/**
 * 문제
 * A text can be coded so that its letters are replaced by other letters. To do it we use a replacement table that can be created thus:
 * A word with different letters of English alphabet is chosen – a key word. An integer K less than or equal to 26 is chosen – a key number. A replacement table has two rows and 26 columns.
 * The upper row contains sorted letters of English alphabet (all of them). The key word is written letter by letter left to right in lower row starting from Kth position. Upon writing the last letter of the key word, we continue to write other letters (not appearing in the key word) sorted lexicographically. When a letter is written in the last (26th ) position of lower row, remaining letters are then written starting from the first position.
 * For example, if the key word is DUBROVNIK and the key number is 10, then the replacement table can be written as
 * An original text can be coded so that each letter is found in the first row and then replaced by a letter written below it.
 * Write a program that will using given key word and key number decode given coded text, i.e. find the original text.
 * 
 * 출력
 * The first and only line of output file should contain decoded, i.e. original text.
 */
const [key, K, codedTxt] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const alpha = new Array(26).fill(0).map((e, i) => String.fromCharCode(65 + e + i));
const decode = new Array(26);
const remainAlpha = alpha.filter(e => !key.includes(e));
const decodeMap = {};
for (let i = +K - 1; i < +K + key.length - 1; i++) decode[i % 26] = key[i - +K + 1];
for (let i = 0; i < remainAlpha.length; i++) decode[(i + +K + key.length - 1) % 26] = remainAlpha[i];
alpha.forEach((e, i) => decodeMap[decode[i]] = e);
const result = codedTxt.split('').map(e => decodeMap[e]).join('');
console.log(result);