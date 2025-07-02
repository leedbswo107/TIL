const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(''));
const encoding = {
  " ": '%20',
  "!": '%21',
  "$": '%24',
  "%": '%25',
  "(": '%28',
  ")": '%29',
  "*": '%2a',
}
const result = input.slice(0, input.length - 1).map(e => e.map(el => el = encoding[el] ? encoding[el] : el).join('')).join('\n');
console.log(result);