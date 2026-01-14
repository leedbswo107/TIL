/**
 * 문제
 * 알파벳 대문자로 구성되어있는 문자열 S가 주어졌을 때, S에 등장하지 않는 알파벳 대문자의 아스키 코드 값의 합을 구하는 프로그램을 작성하시오.
 * 문자열 S가 “ABCDEFGHIJKLMNOPQRSTUVW” 일 때, S에 등장하지 않는 알파벳 대문자는 X, Y, Z이다. X의 아스키 코드 값은 88, Y는 89, Z는 90이므로 이 아스키 코드 값의 합은 267이다.
 * 
 * 출력
 * 각 테스트 데이터에 대해, 입력으로 주어진 문자열 S에 등장하지 않는 알파벳 대문자의 아스키 코드 값의 합을 한 줄에 하나씩 출력한다.
 */
const [_, ...S] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(e => e.split('').map(v => v.charCodeAt()));
const result = S.map(e => 2015 - (Array.from(new Set(e)).reduce((acc,cur) => acc + cur, 0))).join('\n');
console.log(result);
