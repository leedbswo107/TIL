/**
 * 문제
 * A Metronome is a mechanical device used by musicians for keeping time. 
 * It is a very clever device, based on a spring, an inverted pendulum, and an escapement gear. 
 * Milo is learning to play the glockenspiel, and has purchased a metronome to help him keep time. 
 * Milo has noticed that for every complete turn (one revolution) of the key, the metronome will give four ticks. 
 * Milo wants the metronome to stop at the end of each song that he tries to play.
 * For a given song, how many revolutions must he wind the key?
 * 
 * 출력
 * Output a single real number, which is the number of revolutions Milo must turn the metronome's key so that it stops precisely at the end of the song. 
 * This number must be accurate to two decimal places.
 */
console.log(+require('fs').readFileSync('./input.txt', 'utf-8').trim() / 4);