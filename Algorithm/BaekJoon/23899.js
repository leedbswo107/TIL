/**
 * 문제
 * 오늘도 서준이는 선택 정렬 수업 조교를 하고 있다. 아빠가 수업한 내용을 학생들이 잘 이해했는지 문제를 통해서 확인해보자.
 * N개의 서로 다른 양의 정수가 저장된 배열 A가 있다. 선택 정렬로 배열 A를 오름차순 정렬할 경우 정렬 과정에서 배열 A가 배열 B와 같은 경우가 발생하는지 확인해 보자. 초기 상태 배열 A도 정렬 과정에서 발생 가능한 경우로 생각하자.
 * 크기가 N인 배열에 대한 선택 정렬 의사 코드는 다음과 같다.
 * selection_sort(A[1..N]) { # A[1..N]을 오름차순 정렬한다.
 *     for last <- N downto 2 {
 *         A[1..last]중 가장 큰 수 A[i]를 찾는다
 *         if (last != i) then A[last] <-> A[i]  # last와 i가 서로 다르면 A[last]와 A[i]를 교환
 *     }
 * }
 * 
 * 출력
 * 선택 정렬로 배열 A를 오름차순 정렬하는 과정에서 배열 A가 배열 B와 같은 경우가 발생하면 1, 아니면 0을 출력한다.
 */
const [N, A, B] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(Number));
const selectionSort = (arr) => {
  let result = false;
  for (let i = arr.length - 1; i >= 0; i--) {
    let status = true;
    let maxIdx = i;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== B[i]) {
        status = false;
        break;
      }
    }
    if (status) {
      result = true;
      break;
    }
    for (let j = i - 1; j >= 0; j--) if (arr[j] > arr[maxIdx]) maxIdx = j;
    if (i !== maxIdx) [arr[i], arr[maxIdx]] = [arr[maxIdx], arr[i]];
  }
  return result;
}
console.log(selectionSort(A) ? 1 : 0);