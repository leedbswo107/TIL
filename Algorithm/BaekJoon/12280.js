/**
 * 문제
 * Alex and Bob are brothers and they both enjoy reading very much. They have widely different tastes on books so they keep their own books separately. However, their father thinks it is good to promote exchanges if they can put their books together. Thus he has bought an one-row bookshelf for them today and put all his sons' books on it in random order. He labeled each position of the bookshelf the owner of the corresponding book ('Alex' or 'Bob').
 * Unfortunately, Alex and Bob went outside and didn't know what their father did. When they were back, they came to realize the problem: they usually arranged their books in their own orders, but the books seem to be in a great mess on the bookshelf now. They have to sort them right now!!
 * Each book has its own worth, which is represented by an integer. Books with odd values of worth belong to Alex and the books with even values of worth belong to Bob. Alex has a habit of sorting his books from the left to the right in an increasing order of worths, while Bob prefers to sort his books from the left to the right in a decreasing order of worths.
 * At the same time, they do not want to change the positions of the labels, so that after they have finished sorting the books according their rules, each book's owner's name should match with the label in its position.
 * Here comes the problem. A sequence of N values s0, s1, ..., sN-1 is given, which indicates the worths of the books from the left to the right on the bookshelf currently. Please help the brothers to find out the sequence of worths after sorting such that it satisfies the above description.
 * 
 * 
 * 출력
 * For each test case, output one line containing "Case #X: ", followed by t0, t1, ..., tN-1 in order, and separated by spaces. X is the test case number (starting from 1) and t0, t1, ..., tN-1 forms the resulting sequence of worths of the books from the left to the right.
 */
const input = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const T = +input[0];
let result = new Array(T);
const solution = (arr) => {
  const even = arr.filter(e => e % 2 === 0).sort((a, b) => b - a);
  const odd = arr.filter(e => e % 2 !== 0).sort((a, b) => a - b);
  let [i, j] = [0, 0];
  const tmp = arr.map(e => {
    if (e % 2 === 0) {
      return even[i++];
    }
    return odd[j++];
  })
  return tmp.join(' ');
}
for (let i = 0; i < T; i++) {
  const books = input[2 * (i + 1)].split(' ').map(Number);
  result[i] = `Case #${i + 1}: ${solution(books)}`;
}
console.log(result.join('\n'));