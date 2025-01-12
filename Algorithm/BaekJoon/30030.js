/**
 * 문제
 * 스위트콘의 가격은 A원이다.
 * A는 100의 배수이다. 그런데, 스위트콘에 부가가치세 10%를 포함하니 가격이 B원이 되었다
 * 부가가치세를 포함한 가격 B가 주어질 때, 이를 제외한 가격 A를 구해보자.
 *
 * 출력
 * 첫째 줄에 부가가치세를 제외한 가격 A를 출력한다.
 */
const B = +require("fs").readFileSync("./input.txt", "utf-8").trim();
console.log(Math.ceil(B / 1.1));
