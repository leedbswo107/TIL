// Merge Sort
// Step 2. Array Split and Merge
const arr = [3, 1, 6, 8, 1, 2, 3, 9, 10, 3, 2, 4, 6, 2];

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

const mergeSort = (arr) => {
  const totalLen = arr.length;
  console.log(arr);
  if (totalLen <= 1) return arr;
  else {
    const mid = Math.ceil(totalLen / 2);
    const a = mergeSort(arr.slice(0, mid));
    const b = mergeSort(arr.slice(mid));
    const result = merge(a, b);

    console.log(">>>", result);
    return result;
  }
};
console.log(arr);
console.log(mergeSort(arr));
