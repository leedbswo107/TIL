interface User {
  name: string;
  age: number;
}
interface Car {
  name: string;
  price: number;
}
interface Rent {
  period: number;
}
const user: User = { name: "lee", age: 27 };
const car: Car = { name: "Benz", price: 1000000000 };
const rent: Rent = { period: 24 };

function showURName<T extends { name: string }>(data: T) {
  // extends 를 해서 interface 의 형식으로 만들어진 객체에 name 의 타입을 제한 할 수 있음.
  console.log(data.name);
}
showURName(user);
showURName(car);
// showName(rent);
// rent 에는 name 이 없기 때문에 오류가 날것.
