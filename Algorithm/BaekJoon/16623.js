/**
 * 문제
 * Bethany is training for an athletics contest. Yesterday, she ran laps around an oval athletics track. She recorded her location on the track every minute. She has now forgotten how many laps she did yesterday. Bethany has given you this list of locations on the track. Each location is the number of metres Bethany has run since the last time she passed the start point. Bethany always starts at the start point. Note that it is possible that Bethany does not move between two entries in the list. However, she will never run backwards. The athletics track is n metres long. This means that if Bethany ran n metres in total she would return to the start point.
 * Suppose you have a 300 metre long track and Bethany ran 200 metres from the start point. Bethany would record 200. Then, if she ran another 200 metres, she would record 100 having crossed the start point.
 * She wants to determine the minimum number of laps she could have completed. Can you help?
 * 
 * 출력
 * Display the minimum number of laps Bethany could have completed.
 */
const [[n, m], pos] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
let result = 0;
for (let i = 1; i < m; i++) pos[i - 1] > pos[i] && result++;
console.log(result);