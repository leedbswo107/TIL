const N = +require('fs').readFileSync(0, 'utf-8').trim();
let result = new Array(N);
for(let i = 0; i < N; i++) result[i] = `Hello World, Judge ${i + 1}!`;
console.log(result.join('\n'));