/**
 * 문제
 * 세준이는 양수와 +, -, 그리고 괄호를 가지고 식을 만들었다. 그리고 나서 세준이는 괄호를 모두 지웠다.
 * 그리고 나서 세준이는 괄호를 적절히 쳐서 이 식의 값을 최소로 만들려고 한다.
 * 괄호를 적절히 쳐서 이 식의 값을 최소로 만드는 프로그램을 작성하시오.
 *
 * 출력
 * 첫째 줄에 정답을 출력한다.
 */
let arr = require("fs").readFileSync("./input.txt", "utf-8").trim().split("");
let c = 0;
let test = [];
let line = [];
while (arr.length >= c) {
  if (!isNaN(+arr[c])) {
    line.push(arr[c]);
  } else {
    test.push(+line.join(""));
    arr[c] && test.push(arr[c]);
    line = [];
  }
  c++;
}
let result = 0;
while (test.length !== 1) {
  if (test.includes("+")) {
    const index = test.indexOf("+");
    result = test[index - 1] + test[index + 1];
    test[index - 1] = result;
    test.splice(index, 2);
  } else {
    const index = test.indexOf("-");
    result = test[index - 1] - test[index + 1];
    test[index - 1] = result;
    test.splice(index, 2);
  }
  result = 0;
}
console.log(...test);
