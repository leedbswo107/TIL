// void, never 의 사용
// (void 는 함수에서 아무것도 반환이 없을 때 사용)
function funcTest(): void {
  console.log("No returns");
}

// (never 는 항상 에러를 반환하거나 영원히 끝나지 않는 함수의 타입으로 사용)
// error
function errorControl(): never {
  throw new Error();
}

// infinite loop
function infiniteLoop(): never {
  while (true) {
    // loop code
  }
}
