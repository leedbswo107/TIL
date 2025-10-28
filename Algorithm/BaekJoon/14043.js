/**
 * 문제
 * An anagram of a string is formed by rearranging the letters in the string. For example, the anagrams of aab are aab, aba, and baa.
 * A wildcard anagram of a string is an anagram of the string where some of the letters might have been replaced with an asterisk (*). For example, two possible wildcard anagrams of aab are *ab and *b*.
 * Given two strings, determine whether the second string is a wildcard anagram of the first string.
 * 
 * 출력
 * Output the character A if the string on the second line is a wildcard anagram of the string on the first line. Otherwise, output the character N.
 */
const [a, b] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(''));
const count = b.filter(e => e === '*').length;
for (let i = 0; i < b.length; i++) {
  if (a.includes(b[i])) a.splice(a.indexOf(b[i]), 1);
}
console.log(a.length === count ? 'A' : 'N');