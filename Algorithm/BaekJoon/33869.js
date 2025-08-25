/**
 * 문제
 * 송이는 매일 일기를 쓴다. 일기를 비밀스럽게 쓰고 싶어진 송이는 단어 키를 이용한 암호화를 사용하여 독서록을 작성하려고 한다.
 * 단어 키를 사용한 암호화란 다음과 같다.
 * 1. 암호화에 사용할 단어를 고른다. 
 * 2. 1에서 선정한 단어에서 알파벳이 중복되지 않도록 추출해 단어 키를 만든다. 특정 알파벳이 여러 번 등장한다면 처음 등장한 경우를 제외하고 해당 알파벳을 버린다.
 * 3. 암호화 표를 만든다. 암호화 표를 만드는 방법은 아래와 같다.
 * 윗줄에 평문 문자인 알파벳을 순서대로 쓰고, 아랫줄에는 단어 키를 첫 번째 위치부터 순서대로 쓴다.
 * 단어 키에 속하는 문자를 제외한 알파벳의 나머지 문자를 순서대로 써서 표를 완성한다.
 * 예를 들어 암호화에 사용할 단어가 THEFIFTHSMUPC라고 하면 단어 키는 THEFISMUPC가 되고, 암호화 표는 아래와 같이 완성된다.
 * 평문	A	B	C	D	E	F	G	H	I	J	K	L	M	N	O	P	Q	R	S	T	U	V	W	X	Y	Z
 * 암호	T	H	E	F	I	S	M	U	P	C	A	B	D	G	J	K	L	N	O	Q	R	V	W	X	Y	Z
 * 암호화 표의 평문 행에 있는 알파벳을 암호화한 결과는 같은 열에 있는 암호 행의 알파벳이 된다. 위 표를 이용해 GOODLUCK이라는 문장을 암호화하면 MJJFBREA가 된다.
 * 암호화에 사용할 단어 W와 암호화할 문장 S가 주어졌을 때 문장을 암호화한 결과를 출력하자.
 * 
 * 출력
 * 단어 키를 이용해 문장 S를 암호화한 결과를 출력한다.
 */
const [W, S] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(''));
let encrypt = Array.from(new Set(W));
const alpha = new Array(26).fill(65).map((e, i) => String.fromCharCode(e + i));
let filterAlpha = [...alpha];
encrypt.forEach(e => filterAlpha = filterAlpha.filter(el => el !== e));
encrypt = encrypt.concat(...filterAlpha);
const result = S.map(e => encrypt[alpha.indexOf(e)]).join('');
console.log(result);