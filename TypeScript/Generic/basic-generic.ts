// Generic basic

function getSize<T>(arr: T[]): number {
  return arr.length;
}
console.log(getSize<number>([1, 2, 3])); // 3
console.log(getSize<string>(["1", "2", "3", "4"])); // 4
console.log(getSize<object>([{}, {}, {}, {}, {}, {}])); // 6
console.log(
  getSize<boolean>([
    true,
    false,
    true,
    false,
    true,
    true,
    true,
    false,
    false,
    false,
  ])
); // 10

// 이렇게도 사용은 가능
console.log(getSize<undefined>([undefined, undefined])); // 2
console.log(getSize<null>([null])); // 1
