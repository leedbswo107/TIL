/**
 * 문제
 * Farmer John has 2^N (1 <= N <= 10) cows, each conveniently labeled with paint on her flank with a number in the range 1..2^N. They are standing in a line in some random order. The first cow in line is cow_1; the second cow in line is cow_2; and so on (1 <= cow_i <= 2^N). Of course, cow_1 is unlikely to carry the painted label 1.
 * He performs the following algorithm to put them in order.
 * If there is more than one cow, then partition the cows into two equal-sized sub-groups. Sort the first sub-group using this algorithm and then sort the second sub-group, also using this algorithm.
 * Consider the current set of cows to be sorted as an equal-length pair of (potentially huge) base 2^N numbers. If the second number is smaller than the first one, then swap all the elements of the second one with those elements of the first one.
 * The cows would like to know how much distance they cover while moving around during this 'sorting' procedure.
 * Given the initial configuration of the cows, process the list according to the algorithm above and then print out:
 * the sum of the total distances traveled by all cows and
 * the final configuration of the cows after this 'sorting' procedure.
 * By way of example, consider this line of 2^3=8 cows:
 *         8 5 2 3 4 7 1 6
 * First, Farmer John will sort each half of the line separately:
 *         8 5 2 3 | 4 7 1 6
 * Since each half still has more than one cow, Farmer John will sort those halves separately; starting with the 'first' half:
 *         8 5 | 2 3
 * Partitioning again, FJ makes
 *         8 | 5      and        2 | 3
 * each of which can be sorted by second rule, ultimately yielding:
 *         5 | 8      and        2 | 3 (<--unchanged)
 * The distance traveled by each cow during the first subgroup's sort is 1, so total_distance_moved becomes 2. The second half is already sorted, so the total_distance_moved stays at 2. The new configuration of this sub-group is:
 *         5 8 | 2 3
 * For step 2 of the algorithm on the subgroup above, we compare the two sides lexicographically (5 8 vs. 2 3). Since the 2 comes before 5, we swap the two elements of the first half with the corresponding elements of the second half, yielding:
 *         2 3 5 8
 * Each of the four cows moved two spaces in this swap, contributing a total of 8 moves, so total_distance_moved becomes 10.
 * Consider the other half of the cows; we divide the list of four into two sub-groups:
 *         4 7 | 1 6
 * Each pair (4, 7) and (1, 6) is already sorted.
 * Comparing (4 7) to (1 6), since 1 comes before 4, we must swap the two sub-groups:
 *         1 6 4 7
 * which contributes a total of 8 more moves, bringing total_distanced_move to 18.
 * After the operations above, the list looks like this (and it's time for step 2 to be performed on the two groups of 4):
 *         2 3 5 8 | 1 6 4 7
 * Since 1 comes before 2, we must swap the halves, this yielding this configuration:
 *         1 6 4 7 2 3 5 8
 * Since each of 8 cows moved four units, this contributes a total of 32 more moves, making total_distance_moved become 50
 * Therefore, the answer is 50 and 1 6 4 7 2 3 5 8.
 * 
 * 출력
 * Line 1: One integer, the total distance traveled by all the cows
 * Lines 2..2^N + 1: Line i+1 will contain one integer: the ith cow in the final configuration
 */
const [_, ...cows] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(Number);
let count = 0;
const mergeSort = (a, b) => {
  if (a[0] > b[0]) {
    count += b.length * 2 * b.length;
    return [...b, ...a];
  }
  return [...a, ...b];
}
const splitFunc = (arr) => {
  if (arr.length === 1) return arr;
  return mergeSort(splitFunc(arr.slice(0, arr.length / 2)), splitFunc(arr.slice(arr.length / 2)));
}
const result = splitFunc(cows);
console.log(count + '\n' + result.join('\n'));