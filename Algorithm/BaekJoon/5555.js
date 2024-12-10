/**
 * 문제
 * 당신은 N개의 반지를 가지고 있다. 각각의 반지는 대문자 10 문자로 이루어진 문자열이 새겨져 있다.
 * 반지는 문자열의 시작과 끝이 연결된 형태로 문자가 새겨져 있다. 반지에 각인된 문자열을 거꾸로 읽는
 * 걱정은 없다.
 * 찾고자하는 문자열이 주어졌을 때 그 문자열을 포함하는 반지가 몇 개인지를 발견하는 프로그램을
 * 작성하라.
 *
 * 출력
 * 찾고자하는 문자열을 포함 반지의 개수를 나타내는 정수를 한 줄로 출력하라.
 */
let [txt, N, ...patterns] = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n");
let count = 0;
patterns.forEach((e) => (e + e).includes(txt) && count++);
console.log(count);
