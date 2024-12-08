// Abstract Class
abstract class Car4 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
  // 추상 클래스 내부 메서드는 반드시 상속받은 쪽에서 구체적인 구현을 해야 한다.
  abstract doSomething(): void;
}

// 추상 클래스는 new 로 객체를 만들 수는 없음
// 오직 상속을 통해 사용 가능
// const car = new Car("red");

class Hyundai extends Car4 {
  constructor(color: string) {
    super(color);
  }
  doSomething() {
    console.log("구체적으로 구현 해야 오류가 안 뜬다.");
  }
}

const a5 = new Hyundai("black");
