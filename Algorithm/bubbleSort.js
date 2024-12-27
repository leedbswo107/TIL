function bubbleSort(arr) {
  let j = 0;
  let totalCount = 0;

  while (j !== arr.length - 1) {
    let swap = true;
    for (let i = 1; i < arr.length - j; i++) {
      console.log(arr);
      if (arr[i - 1] >= arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swap = false;
      }
      totalCount++;
    }
    if (swap) break; // bubble sort optimization
    j++;
  }
  console.log(totalCount);
  return arr;
}
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
