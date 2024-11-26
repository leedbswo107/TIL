// this의 사용

interface User1 {
  name: string;
}

const Sam: User1 = { name: "Sam" };

// function showName(this: User1) {
//   console.log(this.name);
// }

// error 1 : Expected 2 arguments, but got 0.

// function showName(this: User1, age: number, gender: "m" | "f") {
//   console.log(this.name, age, gender);
// }

// const a = showName.bind(Sam);
// a(); // -> parameter 로 age, gender 를 줘야하는데 현재 a()는 주는게 없어 오류가 발생한다.

function showName(this: User1, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

const a = showName.bind(Sam);
a(30, "m");

// overload
// 파라미터가 number 일 경우의 리턴값과 string 인 경우의 리턴 값이 같지 않은 경우 처리를 하는 방법
interface User2 {
  name: string;
  age: number;
}
/**
 * @param name
 * @param age
 * @returns
 */

/*
  User2 를 리턴하는 것을 명시하고 | 연산으로 string 을 리턴하는 것을 표현했지만
  타입스크립트에서는 이렇게 하면 오류가 발생한다.
*/
function join(name: string, age: number | string): User2 | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력하세요.";
  }
}

// const sam: User2 = join("Sam", 30);
// const jane: string = join("Jane", "30");

// 위의 문제를 해결하기 위해 적용하는 것이 Overload
function join2(name: string, age: string): string;
function join2(name: string, age: number): User2;
function join2(name: string, age: number | string): User2 | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력하세요.";
  }
}

const sam: User2 = join2("Sam", 30);
const jane: string = join2("Jane", "30");
