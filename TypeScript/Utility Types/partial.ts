// Partial
// property 를 모두 optional 로 바꿔줌 -> 일부만 사용하는 것이 가능.

interface User3 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

const admin: Partial<User3> = {
  id: 1,
  name: "admin",
};

/**
 * Partial<User3> 는 아래와 같이 동작함
 * 주의할점
 * User3 의 일부를 선택적으로 사용 가능하게 하는것 이기 때문에
 * User3 의 값을 안 써도 문제는 없지만 User3 에 없는 값을 넣을 시 오류가 발생.
 */
// interface User3 {
//   id?: number;
//   name?: string;
//   age?: number;
//   gender?: "m" | "f";
// }
