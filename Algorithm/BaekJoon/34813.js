const categories = {
  'F': 'Foundation',
  'C': 'Claves',
  'V': 'Veritas',
  'E': 'Exploration'
}
console.log(categories[require('fs').readFileSync('./input.txt', 'utf-8').trim()[0]]);