/**
 * 문제
 * Morse code was an early method of communication via electronic signals. Each letter and number was represented by a unique series of long and short tones, with a pause to indicate the beginning of the next character. Implement a Morse Code interpreter, using the key to the right, that translates five-letter messages (no more, no less).
 * 
 * 출력
 * For each case, output the line “Case x:” where x is the case number, on a single line. Then output a single space followed by an all-caps alphanumeric representation of the message, exactly five characters in length.
 */
const morse = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z'
}
console.log(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').slice(1).map((e, i) => `Case ${i + 1}: ${e.split(' ').map(code => morse[code]).join('')}`).join('\n'));