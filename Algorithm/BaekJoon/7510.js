const [_, ...triangles] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number).sort((a, b) => a - b));
const result = triangles.map(([a, b, c], i) => `Scenario #${i + 1}:\n${a * a + b * b === c * c ? 'yes' : 'no'}`).join('\n\n');
console.log(result);