let N = +require('fs').readFileSync(0, 'utf-8').trim();
let [a,b] = [1,2];
while(N-- > 1) [a,b] = [b, a+b];
console.log(a);
