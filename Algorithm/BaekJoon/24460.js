/**
 * 문제 - 분할 합병 정렬 풀이 (단순 분할 정렬로 개선 가능)
 * HCPC 2021에 참석한 N times N명의 사람들이 의자가 정사각형 형태로 배치된 대회장에서 대회를 한다. 모든 
 * 의자에는 서로 다른 추첨번호가 적혀있으며 HCPC 2021의 마지막에는 아래에 설명된 규칙에 따라 특별상을 받을 
 * 사람 한 명을 정한다.
 * 1. 특별상을 받을 수 있는 사람이 한 명이라면, 그 사람이 뽑힌다.
 * 2. 그렇지 않은 경우, 대회장을 같은 크기의 정사각형 네 개로 나누어 각 구역에서 이 규칙을 재귀적으로 
 *    적용해서 구역마다 한 명씩 총 네 명을 뽑는다.
 * 3. 뽑힌 네 명 중 의자에 적힌 추첨번호가 두 번째로 작은 사람이 뽑힌다.
 * HCPC 2021에 참가한 지원이는 자신의 실력이 부족해서 수상권이 아니라고 생각하였고, 실력과 무관하게 받을 수
 *  있는 특별상을 노리고 있다.
 * 의자 각각에 적혀 있는 추첨번호가 주어질 때, 지원이가 HCPC 2021에서 경품을 받을 수 있으려면 어떤 의자에 
 * 앉아야 하는지 계산하는 프로그램을 작성하시오.
 * 출력
 * 지원이가 HCPC 2021에서 경품을 받기 위해 앉아야 하는 의자에 적힌 추첨번호를 출력한다.
 */
const [N, ...i] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const nums = i.map(e => e.split(' ').map(BigInt));
const verticalSplit = (arr) => {
  const arr1 = [];
  const arr2 = [];
  arr.forEach(e => {
    arr1.push(e.slice(0, e.length / 2));
    arr2.push(e.slice(e.length / 2));
  });
  return [arr1, arr2];
}
const mergeSort = (arr) => {
  if (arr.length === 1) return arr.flat();
  else {
    const arr1 = arr.slice(0, arr.length / 2);
    const arr2 = arr.slice(arr.length / 2);
    const splitArr = [...verticalSplit(arr1), ...verticalSplit(arr2)];
    const processArr = [];
    splitArr.forEach(e => processArr.push(mergeSort(e)));
    return processArr.flat().sort((a, b) => (a > b ? 1 : -1))[1];
  }
}
const result = mergeSort(nums);
console.log(`${result}`);
