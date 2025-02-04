// keyof
interface User3 {
  id: number;
  name: string;
  age: number;
  gender: "m" | "f";
}
type UserKey = keyof User3;

/**
 * keyof 를 사용하여 UserKey 를 타입으로 지정하면
 * userKey 는
 * const userKey = "id" | "name" | "age" | "gender";
 * 와 같이 동작하여 id, name, age, gender 만 할당 가능
 */
const userKey: UserKey = "id";
// const userKey:UserKey = 'name';
// const userKey:UserKey = 'age';
// const userKey:UserKey = 'gender';
console.log(userKey);
