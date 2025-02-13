/**
 * 문제
 * 회의가 끝났고, 이제 악수를 하는 시간이다. 모든 사람은 직사각형 탁자 하나의 한 면에 앉아있다.
 * 자리를 벗어나지 않고 악수를 하는 방법의 수는 총 몇 가지일까?
 * 각 사람들은 자신의 왼쪽이나 오른쪽에 있는 사람들과 악수를 할 수 있다. (안 할 수도 있다)
 * 
 * 출력
 * 첫째 줄에 악수를 하는 방법의 수를 출력한다. 수가 매우 커질 수 있기 때문에, 마지막 자리만 출력한다.
 */
const N = +require('fs').readFileSync('./input.txt', 'utf-8').trim();
const dp = [0];
const solution = (n) => {
  for (let i = 0; i < n; i++) {
    if (i < 2) dp[i] = i + 1;
    else if (dp[i]) dp[i];
    else dp[i] = (dp[i - 1] + dp[i - 2]) % 10;
  }
}
solution(N);
console.log(`${dp[N - 1]}`);