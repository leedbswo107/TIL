const swap = (arr, start, end) => {
  [arr[start], arr[end]] = [arr[end], arr[start]];
  return arr;
};
const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  const pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
