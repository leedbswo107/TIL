/**
 * 문제
 * Everyone knows that cows love to listen to all forms of music. Almost all forms, that is -- the great cow composer Wolfgang Amadeus Moozart once discovered that a specific chord tends to make cows rather ill. This chord, known as the ruminant seventh chord, is therefore typically avoided in all cow musical compositions.
 * Farmer John, not knowing the finer points of cow musical history, decides to play his favorite song over the loudspeakers in the barn. Your task is to identify all the ruminant seventh chords in this song, to estimate how sick it will make the cows.
 * The song played by FJ is a series of N (1 <= N <= 20,000) notes, each an integer in the range 1..88. A ruminant seventh chord is specified by a sequence of C (1 <= C <= 10) distinct notes, also integers in the range 1..88. However, even if these notes are transposed (increased or decreased by a common amount), or re-ordered, the chord remains a ruminant seventh chord! For example, if "4 6 7" is a ruminant seventh chord, then "3 5 6" (transposed by -1), "6 8 9" (transposed by +2), "6 4 7" (re-ordered), and "5 3 6" (transposed and re-ordered) are also ruminant seventh chords.
 * A ruminant seventh chord is a sequence of C consecutive notes satisfying the above criteria. It is therefore uniquely determined by its starting location in the song. Please determine the indices of the starting locations of all of the ruminant seventh chords.
 * 
 * 출력
 * Line 1: A count, K, of the number of ruminant seventh chords that appear in FJ's song. Observe that different instances of ruminant seventh chords can overlap each-other.
 * Lines 2..1+K: Each line specifies the starting index of a ruminant seventh chord (index 1 is the first note in FJ's song, index N is the last). Indices should be listed in increasing sorted order.

 */
const [N, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
const notes = [...input].slice(0, N);
const C = input[N];
let count = 0;
let idx = [];
let chord = [...input].slice(N + 1, N + 1 + C).sort((a, b) => a - b);
chord = chord.map(e => e - chord[0] + 1).join('');
for (let i = C; i <= N; i++) {
  let arr = [...notes.slice(i - C, i)].sort((a, b) => a - b);
  arr = arr.map(e => e - arr[0] + 1).join('');
  if (arr === chord) {
    count++;
    idx.push(i - C + 1);
  }
}
const result = [count, ...idx].join('\n');
console.log(result);