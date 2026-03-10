const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const times = input.map(e => (e[3] - e[0]) * 3600 + (e[4] - e[1]) * 60 + (e[5] - e[2]));
const result = times.map(time => {
  const s = time % 60;
  const t = Math.floor(time / 3600);
  const m = (time - s - t * 3600) / 60;
  return `${t} ${m} ${s}`;
}).join('\n');
console.log(result);