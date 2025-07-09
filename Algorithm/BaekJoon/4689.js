/**
 * 문제
 * The Really Neato Calculator Company, Inc. has recently hired your team to help design their Super Neato Model I calculator. As a computer scientist you suggested to the company that it would be neato if this new calculator could convert among number bases. The company thought this was a stupendous idea and has asked your team to come up with the prototype program for doing base conversion. The project manager of the Super Neato Model I calculator has informed you that the calculator will have the following neato features:
 * It will have a 7-digital display.
 * Its buttons will include the capital letters A through F in addition to the digits 0 through 9.
 * It will support bases 2 through 16.
 * 
 * 출력
 * The output will only be the converted number as it would appear on the display of the calculator. The number should be right justified in the 7-digit display. If the number is to large to appear on the display, then print "ERROR" (without the quotes) right justified in the display.
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = [];
const solution = (element) => {
  const value = element.slice(0, 7).trim();
  const origin = +element.slice(8, 11).trim();
  const parsing = +element.slice(11).trim();
  let outcome = parseInt(value, origin).toString(parsing).toUpperCase();
  return outcome.length > 7 ? '  ERROR' : ' '.repeat(7 - outcome.length) + outcome;
}
input.forEach(e => result.push(solution(e)));
console.log(result.join('\n'));