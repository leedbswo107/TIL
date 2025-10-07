/**
 * 문제
 * JavaScript is one of the most important computer languages now. It is high-level and multiparadigm. It supports functional and imperative programming styles. However, the ICPC World Finals does not offer JavaScript for problem solving.
 * JavaScript is considered as a weakly typed language. It sometimes implicitly converts values of one type into another type. For example, the minus operator (-) does not have any meaning on strings; it is defined to operate on numbers. When the minus operator is applied on two strings, JavaScript will convert the operands from strings into numbers and then apply the minus operation. That is why "2" + "2" - "2" evaluates to 20 in JavaScript. Moreover, JavaScript converts a string into NaN (Not-a-Number) if the string does not represent a number. If any operand of a minus operation is NaN, then the result of the operation must be NaN. For example, "a" + "2" is NaN.
 * Given two strings x and y, please write a program to compute the result of x - y in JavaScript.
 * 
 * 출력
 * Print the result of the minus operation (x - y) on one Line. If the result is an integer, please print it without the decimal point. If the result is not a number, please print NaN.
 */
console.log(require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ').map(Number).reduce((acc, cur) => acc - cur));