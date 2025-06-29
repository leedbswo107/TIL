const holes = {
  'a': 1,
  'b': 1,
  'd': 1,
  'e': 1,
  'g': 1,
  'o': 1,
  'p': 1,
  'q': 1,
  'A': 1,
  'B': 2,
  'D': 1,
  'O': 1,
  'P': 1,
  'Q': 1,
  'R': 1,
  '@': 1,
}
let result = 0;
require('fs').readFileSync('./input.txt', 'utf-8').trim().split('').map(e => result += holes[e] ? holes[e] : 0);
console.log(result);