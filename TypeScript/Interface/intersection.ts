// Intersection Type -> AND 와 비슷

interface Car2 {
  name: string;
  start(): void;
}
interface Toy {
  name: string;
  color: string;
  price: number;
}

// Car2 와 Toy 모두 name 속성을 갖는데 Intersection 하면 중복 속성이 병합됨.
const toyCar: Toy & Car2 = {
  name: "Tayo",
  start() {},
  color: "blue",
  price: 1000,
};
