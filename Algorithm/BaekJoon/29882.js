/**
 * 문제
 * Charlotte Michelle Simone is organizing the Especially Interesting Olympiad. Now she has the solutions of all the participants and needs to compile the ranking.
 * There are several tasks in the olympiad. Each participant can submit any number of solutions for each task, and each solution scores some number of points. The score of a participant for a task is the maximum of the scores of their solutions for that task (or zero, if they did not submit any solutions for that task). The total score of a participant is the sum of their scores over all tasks.
 * Write a program to compile the ranking of the participants according to their total scores.
 * 
 * 출력
 * Output one line per participant, listing their account name and total score, separated by a space. The lines should be ordered in the non-increasing order of the scores. The lines with equal scores may be listed in any order.
 */
const [_, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(e => e.split(' '));
const tasks = input.map(([a, b, c]) => [a, b, +c]);
const attendance = Array.from(new Set(tasks.map(e => e[0])));
const subject = Array.from(new Set(tasks.map(e => e[1])));
let scores = {};
attendance.map(e => {
  let subjectScore = {};
  subject.map(el => subjectScore[el] = 0);
  scores[e] = subjectScore;
});
tasks.forEach(([people, subject, score]) => scores[people][subject] = scores[people][subject] > score ? scores[people][subject] : score);
const result = attendance.map(e => [e, subject.reduce((acc,cur) => acc + scores[e][cur], 0)]).sort((a, b) => b[1] - a[1]).map(e => e.join(' ')).join('\n');
console.log(result);