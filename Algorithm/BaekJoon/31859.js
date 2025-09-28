/**
 * 문제
 * 연재는 제4회 SMUPC에 출전하는 사람들을 위해 SMUPC NAME을 만들어주려고 한다. SMUPC NAME을 만드는 방법은 아래와 같다.
 * 출전자의 영어 이름에서 알파벳이 중복되지 않도록 추출한다. 특정 알파벳이 여러 번 등장한다면 처음 등장한 경우를 제외하고 해당 알파벳을 버린다.
 * 1번을 통해 만들어진 문자열 맨 뒤에 1번 과정에서 버려진 문자의 총개수에 4를 더한 값을 붙인다.
 * 2번을 통해 만들어진 문자열 맨 앞에 출전 등록 번호에 1906을 더한 값을 붙인다.
 * 3번을 통해 만들어진 문자열을 뒤집는다.
 * 4번을 통해 만들어진 문자열 맨 앞에 "smupc_"를 붙인다.
 * 출전 등록 번호가 2이며 "yeonjaechoi" 라는 영어 이름을 가진 사람의 SMUPC NAME을 규칙에 따라 만들면 다음과 같다.
 * yeonjachi
 * yeonjachi6
 * 1908yeonjachi6
 * 6ihcajnoey8091
 * smupc_6ihcajnoey8091
 * 출전 등록 번호와 영어 이름이 주어지면 그 사람의 SMUPC NAME을 출력하자.
 * 
 * 출력
 * 규칙에 따라 만든 SMUPC NAME을 출력한다.
 */
let [N, name] = require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' ');
let count = name.length - (new Set([...name])).size;
console.log('smupc_' + ((1906 + +N) + Array.from(new Set(name.split(''))).join('') + (count + 4)).split('').reverse().join(''));