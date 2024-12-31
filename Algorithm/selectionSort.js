// function selectionSort(arr) {
//   let a = 0;
//   let minNum = 1;
//   while (a !== arr.length - 1) {
//     for (let i = a; i < arr.length; i++) {
//       arr[minNum] > arr[i] && (minNum = i);
//     }
//     [arr[a], arr[minNum]] = [arr[minNum], arr[a]];
//     a++;
//   }
//   return arr;
// }
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) lowest = j;
    }
    [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }
  return arr;
}
console.log(selectionSort([34, 22, 10, 19, 17]));
