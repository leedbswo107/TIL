const S = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('').map(e => e.charCodeAt() - 96);
let [result, cur] = [1, 1];
for (let i = 1; i < S.length; i++) (S[i - 1] < S[i]) ? (result += (cur + 1), cur++) : (cur = 1, result += cur);
console.log(result);