/**
 * 문제
 * IPv6은 길이가 128비트인 차세대 인터넷 프로토콜이다.
 * IPv6의 주소는 32자리의 16진수를 4자리씩 끊어 나타낸다. 이때, 각 그룹은 콜론 (:)으로 구분해서 나타낸다.
 * 예를 들면, 다음과 같다.
 * 2001:0db8:85a3:0000:0000:8a2e:0370:7334
 * 32자리의 16진수는 사람이 읽고 쓰기에 불편하고, 대부분의 자리가 0이기 때문에 아래와 같이 축약할 수 있다.
 * 각 그룹의 앞자리의 0의 전체 또는 일부를 생략 할 수 있다. 위의 IPv6을 축약하면, 다음과 같다
 * 2001:db8:85a3:0:00:8a2e:370:7334
 * 만약 0으로만 이루어져 있는 그룹이 있을 경우 그 중 한 개 이상 연속된 그룹을 하나 골라 콜론 2개(::)로 바꿀 수 있다.
 * 2001:db8:85a3::8a2e:370:7334
 * 2번째 규칙은 모호함을 방지하기 위해서 오직 한 번만 사용할 수 있다.
 * 올바른 축약형 IPv6주소가 주어졌을 때, 이를 원래 IPv6 (32자리의 16진수)로 복원하는 프로그램을 작성하시오.
 * 
 * 출력
 * 첫째 줄에, 입력으로 주어진 IPv6의 축약되지 않은 형태를 출력한다.
 */
let ipv6 = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(':');
const len = ipv6.length;
if (len > 8) ipv6 = [...ipv6.slice(0, ipv6.indexOf('')), ...ipv6.slice(ipv6.indexOf('') + 1,)];
if (len !== 8) {
  const prev = ipv6.splice(0, ipv6.indexOf(''));
  for (let i = 0; i < 8 - len; i++) prev.push('');
  ipv6 = [...prev, ...ipv6];
}
const result = ipv6.map(e => (e.length !== 4) ? ('0').repeat(4 - e.length) + e : e).join(':')
console.log(result);