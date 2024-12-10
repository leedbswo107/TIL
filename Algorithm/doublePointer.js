// 1
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

// 2
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

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

// 3
function isSubsequence(str1, str2) {
  let result = false;
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  if (arr1.length > arr2.length) return result;
  let prev = 0;
  let curr = 0;
  while (arr2.length > curr) {
    if (prev === arr1.length) {
      result = true;
      break;
    }
    if (arr1[prev] === arr2[curr]) prev++;
    curr++;
  }
  return result;
}

console.log(isSubsequence("hello", "hel")); // false
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
