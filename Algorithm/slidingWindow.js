// 1
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  const nums = [];
  let [i, j, sum] = [0, 0, 0];
  while (arr.length - num >= i) {
    if (j - i + 1 > num) {
      nums.push(sum);
      sum = 0;
      i++;
      j = i;
    }
    sum += arr[j];
    j++;
  }
  return Math.max(...nums);
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

// 2
function minSubArrayLen(arr, num) {
  const len = [];
  let [i, j, sum] = [0, 0, 0];
  while (i < arr.length) {
    if (sum >= num) {
      len.push(j - i);
      i++;
      j = i;
      sum = 0;
    } else {
      if (j > arr.length - 1) {
        i++;
        j = i;
        sum = 0;
      }
      sum += arr[j];
      j++;
    }
  }
  return len.length ? Math.min(...len) : 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
