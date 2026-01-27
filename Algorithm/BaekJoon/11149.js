/**
 * 문제
 * Two of your friends Alex and Adam have developed a secret system for sending messages to each other. The only problem is that the system has turned out to be too hard to do by hand. Therefore, Alex has asked for your help to write a program to decode the secret messages. After making you swear never to reveal the system, he explains that the coded message consists of one or more words, only consisting of lower case characters a–z, seperated by spaces. Each word corresponds to one character, a–z or space, and is found by adding the value of each character in the word and taking the remainder when dividing by 27. a is assigned the value 0, b is assigned the value 1 and so on up to z which is assigned the value 25. Based on the calculated remainder the values 0–25 corresponds to a–z as before, and the value 26 corresponds to a space.
 * Help your friend write a program which takes a coded message and outputs the decoded message.
 * 
 * 출력
 * For each test case, output the corresponding decoded message.
 */
const alpha = new Array(26).fill(97).map((e,i) => String.fromCharCode(e + i));
alpha.push(' ');
const [T, ...result] = require('fs').readFileSync('/dev/stdin', 'utf-8').trim().split('\n').map(e => e.split(' ').map(e => alpha[(e.split('').map(el => el.charCodeAt() - 97).reduce((acc,cur) => acc + cur, 0) % 27)]).join(''));
console.log(result.join('\n'));
