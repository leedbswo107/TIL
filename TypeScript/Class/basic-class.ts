// 타입스크립트에서 클래스 사용시 멤버 변수는 미리 선언해야한다.

// 1
class Car1 {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

// 2
class Car2 {
  constructor(public color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}

// 3
class Car3 {
  constructor(readonly color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }
}
