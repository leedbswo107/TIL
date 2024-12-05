const countUniqueValues = (arr) => {
  let l = 0;
  let r = 1;
  let c = 0;
  while (r <= arr.length) {
    if (arr[l] !== arr[r]) {
      l = r;
      r = l + 1;
      c++;
    } else r++;
  }
  return c;
};
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(arr, avg) {
  let result = false;
  if (!arr.length) return result;
  let left = 0;
  let right = 1;
  while (left < arr.length - 1) {
    if (right === arr.length) {
      left++;
      right = left + 1;
    }
    if ((arr[left] + arr[right]) / 2 === avg) {
      result = true;
      break;
    }
    right++;
  }
  return result;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
