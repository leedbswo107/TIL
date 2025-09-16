/**
 * 문제
 * 어떤 문장을 키를 이용하여 다음과 같이 암호화하려 한다. 암호화하기 전의 문장을 평문이라 하며, 암호화 된 문장은 암호문이라고 한다. 키, 평문, 암호문은 모두 영어 대문자로 된 공백 없는 문장이다.
 * 키의 길이를 N이라고 했을 때, 우선 평문을 N 글자씩 잘라서 다음과 같이 나열한다. 예를 들어 평문이 MEETMEBYTHEOLDOAKTREENTH 이고, 키가 BATBOY라고 해 보자.
 * B	A	T	B	O	Y
 * M	E	E	T	M	E
 * B	Y	T	H	E	O
 * L	D	O	A	K	T
 * R	E	E	N	T	H
 * 제일 윗줄은 이해를 돕기 위해 키를 다시 한 번 쓴 것이다. 이제 이 행렬(배열)을 열(Column) 단위로 정렬을 하는데, 정렬을 하는 키준은 키의 문자로 한다. 즉 BATBOY를 정렬하여 ABBOTY와 같이 정렬하는 것이다. B와 같이 여러 번 나타나는 문자의 경우에는 원래의 행렬에서 더 왼쪽에 있었던 것을 먼저 쓴다. 정렬을 한 행렬은 다음과 같다.
 * A	B	B	O	T	Y
 * E	M	T	M	E	E
 * Y	B	H	E	T	O
 * D	L	A	K	O	T
 * E	R	N	T	E	H
 * B는 두 가지가 있기 때문에 더 왼쪽에 있었던 (B)MBLR이 먼저 나왔다. 이제 이와 같이 정렬한 행렬을 열 번호가 작은 것 먼저, 열 번호가 같다면 행 번호가 작은 것 순으로 나열하면 암호문이 된다. 즉 위와 같은 경우의 암호문은 EYDEMBLRTHANMEKTETOEEOTH 가 된다.
 * 키와 암호문이 주어졌을 때, 이를 이용하여 평문을 구하는 프로그램을 작성하시오.
 * 
 * 출력
 * 첫째 줄에 평문을 출력한다.
 */
const [keys, cryptogram] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(''));
const decode = (k, txt) => {
  const N = k.length;
  const tmp = [];
  const visited = [];
  const total = txt.length / N;
  const sortedKeys = [...k].sort();
  let result = Array.from({ length: total }, () => new Array(N));
  for (let i = 0; i < N; i++) tmp.push(txt.splice(0, total));
  const texts = Array.from({ length: total }, () => new Array(N));
  for (let i = 0; i < N; i++) for (let j = 0; j < total; j++) texts[j][i] = tmp[i][j];
  sortedKeys.forEach((e, i) => {
    const duplicate = visited.filter(el => el === e).length;
    let [count, idx] = [0, 0];
    for (let j = 0; j < N; j++) if (k[j] === e) {
      if (count === duplicate) {
        idx = j;
        break;
      } else count++;
    }
    for (let j = 0; j < total; j++) result[j][idx] = texts[j][i];
    visited.push(e);
  });
  return (result.flat().join(''));
}
const result = decode(keys, cryptogram);
console.log(result);