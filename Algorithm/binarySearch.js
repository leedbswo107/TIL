// const linearSearch = (data, target) => {
//   for (let i = 0; i < data.length; i++) {
//     if(data[i] === target) return i;
//   }
//   return -1;
// }
// console.log(linearSearch([4,1,4,6,8,81,2,4,67,34,54], 233));

function binarySearch(arr, target) {
  let [l, r] = [0, arr.length - 1];
  let c = Math.floor((r + l) / 2);
  while (arr[c] !== target) {
    if (l > r) return -1;
    c = Math.floor((r + l) / 2);
    arr[c] < target ? (l = c + 1) : (r = c - 1);
  }
  return c;
}
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
