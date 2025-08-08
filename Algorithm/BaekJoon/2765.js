const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const result = [];
const PI = 3.1415927;
input.forEach(([l, r, t]) => {
  if (r !== 0) {
    const distance = (l * PI * r) / (5280 * 12);
    const MPH = distance / (t / 3600);
    result.push(`Trip #${result.length + 1}: ${distance.toFixed(2)} ${MPH.toFixed(2)}`);
  }
});
console.log(result.join('\n'));