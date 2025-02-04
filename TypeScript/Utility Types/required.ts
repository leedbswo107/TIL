// Required<T>
// 모든 프로퍼티를 필수 요소로 바꿔줌

interface User4 {
  id: number;
  name: string;
  age: number;
  gender?: "m" | "f";
}

const user4: Required<User4> = {
  id: 4,
  name: "lee",
  age: 14,
  gender: "m",
};

/**
 * Required<User4> 는 기존의 User4 에서 gender 가 선택 이였다면
 * interface User4 {
 *  id: number;
 *  name: string;
 *  age: number;
 *  gender: "m" | "f";
 * }
 * 위와 같이 gender 에 있던 ? 연산자가 빠진 형태로 변경됨.
 */
