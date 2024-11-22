// interface 로 함수 정의
interface Add {
  (num1: number, num2: number): number;
}
const add: Add = function (x, y) {
  return x + y;
};

interface IsAdult {
  (age: number): boolean;
}
const isAdult: IsAdult = (age) => age > 19;
