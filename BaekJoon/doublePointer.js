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
