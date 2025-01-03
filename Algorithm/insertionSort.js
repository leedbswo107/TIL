// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if(arr[i] < arr[i-1] || i === arr.length - 1){
//       for (let j = i-1; j >= 0; j--) {
//         if((arr[i] < arr[j] && arr[i] > arr[j - 1]) || j === 0) {
//           arr.splice(j,0, ...arr.splice(i,1));
//           // [arr[j], arr[i]] = [arr[i], arr[j]];
//           break;
//         }
//       }
//     }
//   }
//   return arr;
// }

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curVal = arr[i];
    let j = i - 1;
    for (; j >= 0 && arr[j] > curVal; j--) arr[j + 1] = arr[j];
    arr[j + 1] = curVal;
  }
  return arr;
}

// console.log(insertionSort([4,1,5,2,3]));
console.log(insertionSort([2, 1, 9, 76, 4]));
