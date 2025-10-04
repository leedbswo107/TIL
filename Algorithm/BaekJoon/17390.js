/**
 * 문제
 * 숭실골 높은 언덕 깊은 골짜기에 출제로 고통 받는 욱제가 살고 있다!
 * 욱제는 또 출제를 해야 해서 단단히 화가 났다. 그래서 욱제는 길이 N짜리 수열 A를 만들고, A를 비내림차순으로 정렬해서 수열 B를 만들어 버렸다!! 여기서 B를 출력하기만 하면 문제가 너무 쉬우니까 하나만 더 하자. 아래와 같은 질문이 무려 Q개나 주어진다!! (ㅎㅎ;; ㅈㅅ.. ㅋㅋ!!)
 * L R: BL + BL+1 + ... + BR-1 + BR 을 출력한다.
 * 욱제의 질문에 답하고 함께 엠티를 떠나자!!
 * 
 * 출력
 * Q개의 줄에 걸쳐, 질문의 답을 순서대로 각각 출력한다.
 */
const [[N, Q], A, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
A.sort((a, b) => a - b);
const arr = new Array(N + 1).fill(0);
for (let i = 0; i < N; i++) arr[i + 1] = arr[i] + A[i];
const result = input.map(([L, R]) => arr[R] - arr[L - 1]).join('\n');
console.log(result);