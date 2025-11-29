/**
 * 문제
 * Younghee is currently on a one-dimensional road and looking for her friend Jisun’s house. To know the exact position of Jisun’s house, Younghee sends a message to Jisun with her current position (assume that all the positions are represented as integers). A couple of minutes later, Younghee gets a reply as a list of n triples from Jisun with an additional explanation as follows:
 * For each triple (i, j, k) in the list, i is an integer which denotes the current position, j denotes the direction to move from i, represented as L (left) or R (right), and k is a positive integer which denotes the distance to move from i.
 * For any two triples (i, j, k) and (i', j', k') in the list, i and i' are distinct.
 * If you are currently on the position i, there always exists a triple (i, j, k) in the list (unless all the triples in the list are referred before). In this case, refer to the triple (i, j, k) and move to i - k (if j = L) or i + k (if j = R).
 * Each of the triples in the list is referred exactly once.
 * The position after referring to all the triples in the list is a position of Jisun’s house.
 * For example, suppose Younghee is currently at the position 0 with a list of four triples – (3, R, 4), (0, L, 2), (7, L, 5), and (-2,R, 5). Then Younghee first refers to the triple (0, L, 2) and move to the position 0 - 2 = -2. After that, Younghee refers to the triples (-2,R, 5), (3, R, 4), and (7, L, 5)$ in order and moves to the position 2, which is the position of Jisun’s house. Given n, Younghee’s current position, and a list of n triples, write a program to find Jisun’s house’s position.
 * 
 * 출력
 * Your program is to write to standard output. Print exactly one line. The line should contain the position of Jisun’s house.
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const n = +input[0];
const obj = {};
const move = input.slice(1, 1 + n).map(e => e.split(' ')).map(([i, j, k]) => [+i, j, +k]);
move.map(([i, j, k]) => obj[i] = { dir: j, dis: k });
let cur = +input[1 + n];
for (let i = 0; i < n; i++) {
  const direction = obj[cur].dir;
  const distance = obj[cur].dis;
  cur = direction === 'R' ? (cur + distance) : (cur - distance);
}
console.log(cur);