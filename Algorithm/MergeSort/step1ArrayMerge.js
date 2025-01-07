// Merge Sort
// Step 1. Array Merge
function merge(arr1, arr2) {
  let result = [];
  let [i, j] = [0, 0];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}
console.log(merge([1, 10, 50], [2, 14, 99, 100]));
// output : [1, 2, 10, 14, 50, 99, 100]
