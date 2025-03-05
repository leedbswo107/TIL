/**
 * 문제
 * 선영이는 시를 매우 좋아한다. 
 * 최근에 선영이는 시집을 읽다가 매우 매력적인 시형을 찾았다. 
 * Tautogram은 매우 특별한 형태의 두운법으로, 
 * 인접한 단어가 같은 글자로 시작하는 것을 말한다.
 * 문장이 Tautogram이 되려면, 모든 단어가 같은 글자로 시작해야 한다.
 * 아래 문장은 모두 Tautogram이다.
 * Flowers Flourish from France
 * Sam Simmonds speaks softly
 * Peter pIckEd pePPers
 * truly tautograms triumph
 * 선영이는 Tautogram을 이용해서 남자친구에게 줄 연애 편지를 쓰려고 한다. 
 * 선영이의 편지에 있는 문장이 주어졌을 때, 
 * Tautogram인지 아닌지 알아내는 프로그램을 작성하시오.
 * 
 * 출력
 * 각 테스트 케이스에 대해서, 입력으로 주어진 문장이 Tautogram이라면 'Y'를, 
 * 아니라면 'N'을 출력한다.
 */
const texts = require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n').map(e => e.split(' ').map(el => el.split('')[0].toLowerCase()));
texts.pop();
const result = texts.map(e => new Set(e).size === 1 ? 'Y' : 'N').join('\n');
console.log(result);