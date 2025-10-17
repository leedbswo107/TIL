/**
 * 문제
 * Beekeeper Bill is ready to go to the annual beekeeper's convention with his friends. Bill packed his honey in jars, but unfortunately the honey in some of the jars has turned sour. Bill's friends are mean, and if too much of Bill's honey is sour they will go to the convention without him.
 * If Bill has more jars of sour honey than sweet, he will be left “beehind”. If Bill has more jars of sweet honey than sour he will go to the convention. If Bill has the same number of sweet and sour jars, his friends are undecided. Lastly, Bill's friends are superstitious, if he has exactly 13 jars they will never speak to him again. Bill needs new friends.
 * 
 * 출력
 * For each case, output one of the following results on its own line (without quotes).
 * “Left beehind.” (note the spelling, those punsters)
 * “Undecided.”
 * “To the convention.”
 * “Never speak again.”
 * If Bill's friends will never speak to him again, that is most important and should be the only output.
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').slice(0, -1).map(e => e.split(' ').map(Number));
const result = input.map(([x, y]) => {
  if (x + y === 13) return 'Never speak again.';
  if (x < y) return 'Left beehind.';
  else if (x > y) return 'To the convention.';
  else if (x === y) return 'Undecided.';
}).join('\n');
console.log(result);