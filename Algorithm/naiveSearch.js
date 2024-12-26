function naiveSearch(str, target) {
  let [result, index, count] = [0, 0, 0];
  for (let i = 0; i <= str.length; i++) {
    if (count === target.length) {
      result++;
      [index, count] = [0, 0];
    }
    if (str[i] === target[index]) {
      index++;
      count++;
    } else 0;
  }
  return result;
}

console.log(naiveSearch("hello world", "hello")); // 1
console.log(naiveSearch("testtesttesttest", "test")); // 4

function naiveSearch2(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}
console.log(naiveSearch2("hello world", "hello")); // 1
console.log(naiveSearch2("testtesttesttest", "test")); // 4
