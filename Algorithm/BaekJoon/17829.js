/**
 * 문제
 * 조기 졸업을 꿈꾸는 종욱이는 요즘 핫한 딥러닝을 공부하던 중, 이미지 처리에 흔히 쓰이는 
 * 합성곱 신경망(Convolutional Neural Network, CNN)의 풀링 연산에 영감을 받아 
 * 자신만의 풀링을 만들고 이를 222-풀링이라 부르기로 했다.
 * 다음은 8×8 행렬이 주어졌다고 가정했을 때 222-풀링을 1회 적용하는 과정을 설명한 것이다
 * 1. 행렬을 2×2 정사각형으로 나눈다.
 * 2. 각 정사각형에서 2번째로 큰 수만 남긴다. 여기서 2번째로 큰 수란, 
 *    정사각형의 네 원소를 크기순으로 a4 ≤ a3 ≤ a2 ≤ a1 라 했을 때, 원소 a2를 뜻한다.
 * 3. 2번 과정에 의해 행렬의 크기가 줄어들게 된다.
 * 종욱이는 N×N 행렬에 222-풀링을 반복해서 적용하여 크기를 1×1로 만들었을 때 
 * 어떤 값이 남아있을지 궁금해한다.
 * 랩실 활동에 치여 삶이 사라진 종욱이를 애도하며 종욱이의 궁금증을 대신 해결해주자.
 * 
 * 출력
 * 마지막에 남은 수를 출력한다.
 */
const [N, ...i] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const nums = i.map(e => e.split(' ').map(Number));
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
  if (arr.length === 2) return arr.flat().sort((a, b) => b - a)[1];
  else {
    const arr1 = arr.slice(0, arr.length / 2);
    const arr2 = arr.slice(arr.length / 2,);
    const splitArr = [...verticalSplit(arr1), ...verticalSplit(arr2)];
    const processArr = [];
    splitArr.forEach(e => processArr.push(mergeSort(e)));
    return processArr.sort((a, b) => b - a)[1];
  }
}
const result = mergeSort(nums);
console.log(result);