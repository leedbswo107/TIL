/**
 * 문제
 * GEC에는 여러 학교가 있다. 각 학교의 약칭과 정식 명칭은 다음과 같다.
 * NLCS: North London Collegiate School
 * BHA: Branksome Hall Asia
 * KIS: Korea International School
 * SJA: St. Johnsbury Academy
 * 학교 이름을 좋아하는 규빈이는, 학교 이름을 짧게 부르는 것을 싫어하기 때문에,
 * 각 학교의 약칭이 주어졌을 때 정식 명칭을 출력하는 프로그램을 만들기로 하였다.
 * 각 학교의 약칭이 주어졌을 때, 정식 명칭을 출력하는 프로그램을 작성하시오.
 *
 * 출력
 * 첫 번째 줄에 입력된 학교의 정식 명칭을 출력한다.
 */
const School = {
  NLCS: "North London Collegiate School",
  BHA: "Branksome Hall Asia",
  KIS: "Korea International School",
  SJA: "St. Johnsbury Academy",
};
const name = require("fs").readFileSync("./input.txt", "utf-8").trim();
console.log(School[name]);
