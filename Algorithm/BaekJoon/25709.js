/**
 * 문제
 * 민겸이는 1 빼기를 할 수 있는 능력을 가지고 있다. 1 빼기란, 다음의 두 연산 중 하나를 골라 수행하는 것이다.
 *
 * 1. 가지고 있는 수에서 1을 뺀다.
 * 2. 가지고 있는 수에 있는 1을 하나 지운다.
 *    지우고 난 뒤 좌우의 수들을 순서대로 다시 합쳐 하나의 수로 만든다.
 *    이때 맨 앞의 연속되는 0은 지워진다.
 *
 * 민겸이가 최초로 가지고 있는 정수가 하나 주어질 때, 이 수를 0으로 만들기 위해 최소 몇 번의 1 빼기가
 * 필요한지 구해보자.
 *
 * 출력
 * 민겸이가 해당 수를 0으로 만들기 위해서 최소 몇 번의 1 빼기가 필요한지 출력한다.
 */
const N = require("fs").readFileSync("./input.txt", "utf-8").trim();
const solution = (n) => {
  let val = n;
  let count = 0;
  while (val !== "0") {
    if (val.includes("1")) {
      val = val.split("");
      val.splice(val.indexOf("1"), 1);
      val = Number(val.join("")).toString();
    } else val = (+val - 1).toString();
    count++;
  }
  return count;
};
const result = solution(N);
console.log(result);
