const texts = { 'SONGDO': 'HIGHSCHOOL', 'CODE': 'MASTER', '2023': '0611', 'ALGORITHM': 'CONTEST' };
console.log(texts[require('fs').readFileSync('./input.txt', 'utf-8').trim()]);