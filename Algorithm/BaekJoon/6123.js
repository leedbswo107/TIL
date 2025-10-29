/**
 * 문제
 * Like any other teenager, teen cows are occasionally overtaken by fads. Sometimes it's a hula hoop or a pet rock, other times it's Counterstrike, Pokemon, Rick Astley, or tribal tattoos on their udders.
 * Mathematically, we know that a fad has an initial attractiveness level L (1 <= L <= 50,000). Cow i has a resistance (0 <= R_i <= 1,000,000) that tells how long she can avoid a fad before having no alternative but to participate. When a fad's attractiveness level meets or exceeds a cow's fad resistance, then the cow will want to participate in the fad.
 * Each cow who participates in a fad increases (through peer pressure) that fad's attractiveness by some value K (1 <= K <= 2,500).
 * Given a population of N (1 <= N <= 100,000) cows, determine how many will participate in a fad.
 * 
 * 출력
 * Line 1: A single integer that is the number of cows how ultimately participate in the fad.
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
let [_, L, K] = input[0].split(' ').map(Number);
const R = input.slice(1).map(Number).sort((a, b) => a - b);
let cow = 0;
R.forEach(e => {
  if (e <= L) {
    L += K;
    cow++;
  }
});
console.log(cow);