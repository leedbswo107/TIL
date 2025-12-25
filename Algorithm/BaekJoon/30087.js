const seminar = {
  "Algorithm": '204',
  "DataAnalysis": '207',
  "ArtificialIntelligence": '302',
  "CyberSecurity": 'B101',
  "Network": '303',
  "Startup": '501',
  "TestStrategy": '105'
}
const result = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').slice(1).map(e => seminar[e]).join('\n');
console.log(result);