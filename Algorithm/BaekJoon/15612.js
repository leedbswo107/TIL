/**
 * 문제
 * The new computers are here! However, we made a mistake during the order: we thought we were ordering machines with qubits; in fact, we ordered several hundred computers powered by cube-bits.
 * The programs and data we had ready were prepared in base 10. To feed the data into the new computer, which uses a cubic system of counting, we will need to convert it to base 3 first.
 * Write a program to convert a stream of decimal numbers into ternary format, so they fit the new system’s input bus.
 * 
 * 출력
 * Output n lines, giving the numbers converted to base-3, in the same order as given. In the interest of conserving disk space, do not print leading zeroes.
 */
console.log(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').slice(1).map(e => (+e).toString(3)).join('\n'));