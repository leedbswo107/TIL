/**
 * 문제
 * INU 코드페스티벌은 불꽃놀이로 행사를 마무리합니다. 광재는 올해 불꽃놀이 담당자입니다.
 * 누군가 폭죽을 모두 사버리는 바람에 남아있는 N개의 폭죽으로 불꽃놀이를 진행하게 되었습니다.
 * 모든 폭죽에는 화려한 정도를 나타내는 정수 Ai가 적혀있습니다. 다음 규칙을 만족하도록 불꽃놀이를 구성해야 
 * 합니다. 모든 폭죽을 사용할 필요는 없습니다.
 * 1. 첫 번째 불꽃놀이의 화려한 정도는 K 이상이어야 합니다.
 * 2. 불꽃놀이의 화려한 정도는 이전 불꽃놀이의 화려한 정도보다 작지 않아야 합니다.
 * 3. 안전상의 이유로 한 번에 1개 또는 2개의 폭죽만 터트릴 수 있습니다. 2개의 폭죽을 동시에 터트리는 
 * 경우 화려한 정도는 두 폭죽의 합과 같습니다.
 * 예를 들어, 남은 폭죽의 화려한 정도가 각각 10, 4, 1, 8, 12, 5이고 첫 번째 불꽃놀이의 화려한 정도가 
 * 7 이상이어야 한다면, 다음과 같이 규칙을 만족하도록 불꽃놀이를 진행할 수 있습니다.
 * 8 → (4+5) → 10 → 12
 * 위와 같이 4번 진행할 수 있습니다. 이보다 더 많은 횟수의 불꽃놀이를 규칙을 만족하도록 진행할 
 * 수는 없습니다. 만약 남은 폭죽의 화려한 정도가 각각 2, 3이고, 첫 번째 불꽃놀이의 화려한 정도가 
 * 7 이상이어야 한다면 규칙을 만족하도록 불꽃놀이를 진행할 수 없습니다.
 * 학생들은 불꽃놀이를 많이 할수록 만족도가 높습니다. 광재를 도와 최대한 많은 횟수의 불꽃놀이를 만들어주세요.
 * 불꽃놀이를 한 번 이상 진행할 수 있다면, 불꽃놀이를 최대 몇 번 진행할 수 있는지 출력해주세요. 
 * 만약 불꽃놀이를 진행할 수 없다면 -1을 출력해주세요.
 * 
 * 출력
 * 불꽃놀이를 최대 몇 번 진행할 수 있는지 출력해주세요. 만약 불꽃놀이를 진행할 수 없다면 -1을 출력해주세요.
 */
const [i1, i2] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const [n, K] = i1.split(' ').map(Number);
const N = i2.split(' ').map(Number).sort((a, b) => a - b);
let result = 0;
let start = 0;
let end = n - 1;
while (start < end) {
  const sum = N[start] + N[end];
  if (K <= sum) {
    if (N[start] < K && N[end] < K) {
      result++;
      start++;
      end--;
    } else {
      if (N[start] >= K) {
        result++;
        start++;
      }
      if (N[end] >= K) {
        result++;
        end--;
      }
    }
  } else start++;
}
console.log(result ? result : -1);