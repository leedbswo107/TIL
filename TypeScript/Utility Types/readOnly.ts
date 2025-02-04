// Readonly<T>
// Readonly 가 붙으면 한번 할당된 이후 수정이 불가능하다.

interface User5 {
  name: string;
  age: number;
  gender: "m" | "f";
}

let admin2: Readonly<User5> = {
  name: "admin",
  age: 30,
  gender: "f",
};

// admin2.name = "admin2";
// Readonly 가 있기 때문에 오류 발생
