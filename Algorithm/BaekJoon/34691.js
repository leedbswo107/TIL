const scientificName = {
  'animal': 'Panthera tigris',
  'tree': 'Pinus densiflora',
  'flower': 'Forsythia koreana',
}
const result = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').slice(0, -1).map(e => scientificName[e]).join('\n');
console.log(result);