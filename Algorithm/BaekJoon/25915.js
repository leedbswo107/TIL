const pw = [require('fs').readFileSync(0, 'utf-8').trim().charCodeAt(), ...'ILOVEYONSEI'.split('').map(e => e.charCodeAt())];
let result = 0;
for (let i = 1; i < pw.length; i++) result += Math.abs(pw[i - 1] - pw[i]);
console.log(result);
