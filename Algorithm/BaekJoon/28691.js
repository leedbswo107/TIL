const members = { 'M': 'MatKor', 'W': 'WiCys', 'C': 'CyKor', 'A': 'AlKor', '$': '$clear' };
console.log(members[require('fs').readFileSync('./input.txt', 'utf-8').trim()]);