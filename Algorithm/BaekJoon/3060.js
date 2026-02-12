/**
 * 문제
 * 유명한 농부 박현수는 돼지 6마리를 키우고 있다. 그는 하루에 한 번씩 돼지에게 맛있는 밥을 준다.
 * 돼지는 원형 식탁에 앉아서 식사를 한다. 현수의 돼지들은 기억력이 뛰어나기 때문에 전 날 자신의 양쪽과 맞은편에 앉았던 돼지가 먹었던 양을 기억하고 있다. 또, 욕심도 많기 때문에, 그 만큼의 양을 추가하여 식사를 하기를 원한다.
 * 예를 들어, 현수가 1번부터 6번까지 돼지에게 각각 3, 2, 7, 1, 5, 4만큼 밥을 주었다면, 2번 돼지는 첫 날 받은 양 2에다 양쪽과 맞은편 돼지가 받은 양 15(3+7+5)만큼을 더해 17만큼 받기를 원한다.
 * 마음씩 좋은 농부 박현수는 이런 돼지의 요구를 모두 들어주려고 한다. 매일 현수의 집에 신선한 사료가 N만큼 배달된다. 사료의 유통기한은 하루이기 때문에, 남은 사료는 모두 폐기한다.
 * 첫 날 돼지들이 먹었던 양이 주어졌을 때, 현수가 6마리의 돼지들의 요구를 들어줄 수 없게 되는 날이 몇 번째 날인지 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 각 테스트 데이터에 대해, 6마리 돼지의 요구를 모두 들어줄 수 없게 되는 날이 몇 번째 날인지 출력한다.
 */
const [T, ...input] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n');
const result = new Array(+T).fill(0);
const solution = (prey, cows, date) => {
  if (cows.reduce((acc, cur) => acc + cur, 0) > prey) return date + 1;
  const tmp = [...cows];
  for (let i = 0; i < 6; i++) tmp[i] = cows[i] + cows[i - 1 < 0 ? 5 : i - 1]
    + cows[i + 1 > 5 ? 0 : i + 1]
    + cows[i + 3 > 5 ? i + 3 - 6 : i + 3];
  return solution(prey, tmp, date + 1);
}
for (let i = 0; i < +T; i++) {
  const N = +input[i * 2];
  const cows = input[i * 2 + 1].split(' ').map(Number);
  result[i] = solution(N, cows, 0);
}
console.log(result.join('\n'));