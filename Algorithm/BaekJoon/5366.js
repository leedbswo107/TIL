/**
 * 문제
 * Han Solo wants a count of all the enemy fighters he shot down while captain of the Millennium Falcon. The data log has a list of kills but not the totals. You job is to write a program that will read the data log and display the name of the fighter followed by the number shot down and the total number of kills.
 * 
 * 출력
 * The name of the fighter followed immediately by a colon followed by the number shot down. There should be one blank between the colon and the number shot down. The last line of output will be the word “Grand Total” followed immediately by a colon and the grand total of all fighters shot down. There should be one blank between the colon and the grand total. The fighters should be listed in order of first occurrence.
 */
const sdList = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').slice(0, -1);
const sdType = {};
sdList.forEach(e => sdType[e] ? sdType[e] += 1 : sdType[e] = 1);
let total = sdList.length;
const result = Object.entries(sdType).map(([k, v]) => `${k}: ${v}`);
result.push(`Grand Total: ${total}`);
console.log(result.join('\n'));