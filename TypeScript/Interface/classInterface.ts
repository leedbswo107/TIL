// interface 로 class 정의
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Audi implements Car {
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("go");
  }
}

const c = new Audi("grey");

interface Benz extends Car {
  door: number;
  stop(): void;
}
const benz: Benz = {
  color: "red",
  wheels: 4,
  door: 5,
  start() {
    console.log("start");
  },
  stop() {
    console.log("stop");
  },
};

// interface 여러개 extends 하기
interface Car2 {
  color: string;
  wheels: number;
  start(): void;
}
interface Toy {
  name: string;
}
interface ToyCar2 extends Car2, Toy {
  price: number;
}
