// 접근 제한자(Access modifier)

/**
 * public : 자식 클래스 및 클래스 인스턴스에서 접근 가능 (아무 표현 없을시 기본 public)
 * protected : 자식 클래스에서 접근가능하나 클래스 인스턴스(ex : className.name) 에서는 접근 불가
 * private(#) : 속성이 선언된 클래스에서만 사용 가능 (상속한 자식 클래스에서 부모의 private 접근 불가)
 * static : 정적 멤버 변수 생성, 클래스 인스턴스로 접근 가능 (this 가 아닌 클래스명을 적어야함)
 */

class Car {
  // public name: string = "car";
  // private name: string = "car";
  // #name: string = "car";

  name: string = "car";
  color: string;
  static wheels = 4;
  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }
  start() {
    console.log("start");
    console.log(this.name);
    console.log(Car.wheels);
  }
}
class Audi extends Car {
  constructor(color: string, name: string) {
    super(color, name);
  }
  showName() {
    console.log(this.name);
  }
}

const a4 = new Audi("red", "a444");
a4.showName();
