// function 의 사용

// 리턴값이 존재하는 함수
/**
 * @param num1
 * @param num2
 * @returns
 */
function add(num1: number, num2: number): number {
  return num1 + num2;
}

/**
 * @param age
 * @returns
 */
function isAdult(age: number): boolean {
  return age > 19;
}

// function optional parameter

/**
 * const result = hello();
 * optional parameter 를 썼으나 오류가 발생
 * 타입 스크립트는 명시적으로 매개변수가 없을 수 있음을 알려줘야함
 * name: string -> name?: string
 */

// function hello(name: string): string {
//   return `Hello, ${name || "world"}`;
// }

/**
 * @param name
 * @returns
 */
function hello(name?: string): string {
  return `Hello, ${name || "world"}`;
}

// 매개변수 기본값 설정 -> 내부적으로 위의 optional parameter 가 동작하는 것을 알 수 있다.
/**
 * @param open
 * @param close
 * @returns
 */
function market(open = "9AM", close = "10PM"): string {
  return `open : ${open} close : ${close}`;
}

// 필수 매개변수 먼저 입력
/**
 * @param age
 * @param name
 * @returns
 * age를 먼저 입력하고 싶은데 필수가 아닌 경우 (지양해야함)
 */

// function hello2(age?: number, name: string): string {
//   if (age !== undefined) return `Hello, ${name}. You are ${age}.`;
//   else return `Hello, ${name}`;
// }

function hello2(age: number | undefined, name: string): string {
  if (age !== undefined) return `Hello, ${name}. You are ${age}.`;
  else return `Hello, ${name}`;
}

// rest parameter 로 매개변수가 들어오는 경우
/**
 * @param num
 * @returns
 */
function numbersAdd(...num: number[]): number {
  return num.reduce((acc, cur) => acc + cur, 0);
}
numbersAdd(1, 2, 3, 4, 5, 6); // 21

// 리턴값이 없는 함수

/**
 * @param text
 */

function print(text: string): void {
  console.log(text);
}
