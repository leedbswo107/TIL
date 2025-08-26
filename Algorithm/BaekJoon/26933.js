/**
 * 문제
 * Du har bestämt dig för att laga mat. För att laga maten behöver du N ingredienser. För varje ingrediens vet du hur mycket du redan har hemma, hur mycket du behöver totalt samt kostnaden för ingrediensen om du måste köpa den. Du skall alltså köpa den mängd av varje ingrediens som du saknar. Uppgiften är att beräkna kostnaden för att laga maten.
 * 
 * 출력
 * Skriv ut ett enda heltal -- den totala kostnaden för ingredienserna.
 */
const [N, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
let result = 0;
input.forEach(e => {
  const [H, B, K] = e.split(' ').map(Number);
  B - H >= 0 && (result += (B - H) * K);
});
console.log(result);