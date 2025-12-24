/**
 * 문제
 *  2n newbie students came to competitive programming practice. Each student is characterized by his IQ level: the ith student has IQ ai.
 * The coach wants to break students up into teams of two people. Each team is characterized by a team IQ that is equal to the sum of the team members IQ levels. For example, if a team is formed from students i and j, the team IQ is ai + aj. One team is stronger than the other if its team IQ is greater.
 * By the coach's opinion, practice will be much more productive if the difference between team IQs of the strongest and the weakest team is as small as possible. Help the coach determine the minimum value A for which it is possible to form teams in such a way that difference of team IQs between the strongest and the weakest team is equal to A.
 * 
 * 출력
 * Output the minimum value A for which the forming of teams is possible.
*/
let [n, IQ] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
let arr = new Array(IQ.length / 2);
IQ = IQ.sort((a,b) => a-b);
for (let i = 0; i < (IQ.length / 2); i++) arr[i] = IQ[i] + IQ[IQ.length - i - 1];
const result = Math.max(...arr) - Math.min(...arr);
console.log(result);