// interface 의 사용 기본
interface User1 {
  name: string;
  age: number;
  gender: string;
}
let user1: User1 = {
  name: "xxx",
  age: 25,
  gender: "Male",
};

// readonly 읽기 모드
// readonly 옵션이 있는 데이터는 한번 데이터를 설정하면 변경할 수 없다.
// 즉, 값이 할당되기 이전에는 let의 성질을 갖고 있다가 한번 값이 할당되면 const 의 성질을 갖은것 처럼 사용되어 값의 변경이 불가능해진다.
interface User2 {
  name: string;
  age: number;
  gender: string;
  readonly birthYear: number;
}
let user2: User2 = {
  name: "xxx2",
  age: 26,
  gender: "Female",
  birthYear: 2000,
};

// optional data input set
interface User3 {
  name: string;
  age: number;
  gender: string;
  readonly birthYear: number;
  email?: string;
}
let user3: User3 = {
  name: "xxx",
  age: 26,
  birthYear: 1000,
  gender: "male",
  // email 값이 없음에도 오류가 뜨지 않는 이유는 '?' 연산작 선택적 데이터 입력을 가능하게 해주기 때문.
};

// 문자열 리터럴 타입

// 1-1 [grade:number] : string
// string 으로 하면 원하는 점수를 입력할 수 있지만,
// 사람에 따라 'A', 'a', 100점' 등 다양한 성적 입력이 가능하기에 가능한 옵션을 제한 해주는 것이 오류의 가능성을 낮출 수 있다.
interface User4 {
  name: string;
  age: number;
  gender: string;
  readonly birthYear: number;
  email?: string;
  [grade: number]: string;
}
let user4: User4 = {
  name: "xxx",
  age: 26,
  birthYear: 1000,
  gender: "male",
  1: "A",
  2: "B",
  3: "C",
  4: "F",
};

// 1-2 string literal type
type Score = "A" | "B" | "C" | "F";

interface User5 {
  name: string;
  age: number;
  gender: string;
  readonly birthYear: number;
  email?: string;
  [grade: number]: Score;
}

let user5: User5 = {
  name: "xxx",
  age: 26,
  birthYear: 1000,
  gender: "male",
  1: "A",
  2: "B",
  3: "C",
  4: "F",
};
