/**
 * 문제
 * 칸토어 집합은 0과 1사이의 실수로 이루어진 집합으로, 구간 [0, 1]에서
 * 시작해서 각 구간을 3등분하여 가운데 구간을 반복적으로 제외하는 방식으로 만든다.
 * 전체 집합이 유한이라고 가정하고, 다음과 같은 과정을 통해서 칸토어 집합의 근사를 만들어보자.
 * 1. -가 3N개 있는 문자열에서 시작한다.
 * 2. 문자열을 3등분 한 뒤, 가운데 문자열을 공백으로 바꾼다. 이렇게 하면, 선(문자열) 2개가 남는다.
 * 3. 이제 각 선(문자열)을 3등분 하고, 가운데 문자열을 공백으로 바꾼다.
 * 이 과정은 모든 선의 길이가 1일때 까지 계속 한다.
 * 예를 들어, N=3인 경우, 길이가 27인 문자열로 시작한다.
 *
 * 출력
 * 입력으로 주어진 N에 대해서, 해당하는 칸토어 집합의 근사를 출력한다.
 */
const N = require("fs")
  .readFileSync("./input.txt", "utf-8")
  .trim()
  .split("\n")
  .map(Number);
const mergeSort = (n) => {
  const txt = new Array(3 ** n).fill("-");
  const splitArr = (arr) => {
    const totalLen = arr.length;
    if (totalLen <= 1) return arr;
    const interval = Math.floor(totalLen / 3);
    const a = splitArr(arr.slice(0, interval));
    const b = new Array(interval).fill(" ");
    const c = splitArr(arr.slice(2 * interval));
    return [...a, ...b, ...c];
  };
  return splitArr(txt);
};
const result = [];
N.forEach((e, i) => (result[i] = mergeSort(e).join("")));
console.log(result.join("\n"));
