/**
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 * @returns 
 */
const swap = (arr, start, end) => {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  return arr;
};

/**
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 * @returns 
 */
const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  const pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      console.log('pivot: ', pivot);
      // console.log(arr[i]);
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  // console.log(arr, swapIdx);
  swap(arr, start, swapIdx);
  return swapIdx;
};

/**
 * @param {*} arr 
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  console.log(left, right);
  if (left < right) {
    console.log(left, right);
    let pivotIndex = pivotHelper(arr, left, right);
    // console.log('pivot Index : ', pivotIndex);
    // console.log(arr.join(' '));
    // console.log(arr.slice(left, right + 1));
    quickSort(arr, left, pivotIndex - 1);
    // console.log('================================');
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};
console.log(quickSort([4, 6, 9, 1, 2, 5]));
