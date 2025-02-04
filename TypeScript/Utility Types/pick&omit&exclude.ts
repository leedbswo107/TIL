// Pick<T, K>
// T 타입에서 K 프로퍼티만 골라서 사용

interface User7 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}

const pick: Pick<User7, "id" | "name"> = { id: 1, name: "user7" };

// Omit<T, K>
// T 타입에서 K "프로퍼티" 만 제외해서 사용
const omit: Omit<User7, "gender"> = {
  id: 2,
  name: "omit",
  age: 40,
  // gender: "m",
  // gender 를 omit 으로 제외했기 때문에 오류 발생
};

// Exclude<T1, T2>
// T1 타입에서 T2 "타입" 을 제외해서 사용
type T1 = number | string;
type T2 = Exclude<T1, string>;
// T2 는 T1 과 달리 number 만 입력받을 수 있음.
// 즉, type T2 = number 와 같아짐.
