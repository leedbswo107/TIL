/**
 * 문제
 * UOS 문자열이란 UOSUOSUOSU...와 같이 UOS가 무한히 반복되어 나타나는 문자열이다. 양의 정수 x가 주어질 때 UOS 문자열의 x번째 문자를 구하여라.
 * 
 * 출력
 * UOS 문자열의 x번째 문자를 출력한다.
 */
const x = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
const UOS = ['U', 'O', "S"];
console.log(UOS[(x - 1) % 3]);