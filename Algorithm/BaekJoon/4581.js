/**
 * 문제
 * A committee clerk is good at recording votes, but not so good at counting and figuring the outcome correctly.  As a roll call vote proceeds, the clerk records votes as a sequence of letters, with one letter for every member of the committee:
 * Y means a yes vote
 * N means a no vote
 * P means present, but choosing not to vote
 * A indicates a member who was absent from the meeting
 * Your job is to take this recorded list of votes and determine the outcome.
 * Rules: There must be a quorum.  If at least half of the members were absent, respond "need quorum".  Otherwise votes are counted.   If there are more yes than no votes, respond "yes".   If there are more no than yes votes, respond "no".   If there are the same number of yes and no votes, respond "tie". 
 * 
 * 출력
 * For each vote, the output is one line with the correct choice "need quorum", "yes", "no" or "tie".
 */
const election = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split('')).slice(0, -1);
const result = election.map(e => {
  let [y, n, a, p] = [0, 0, 0];
  for (let i = 0; i < e.length; i++) {
    if (e[i] === 'Y') y++;
    if (e[i] === 'N') n++;
    if (e[i] === 'A') a++;
    if (e[i] === 'P') p++;
  }
  if (a >= e.length / 2) return 'need quorum';
  else if (n > y) return 'no';
  else if (n < y) return 'yes';
  else if (n === y) return 'tie';
}).join('\n');
console.log(result);