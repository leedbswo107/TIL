// NonNullabe<Type>
// null 과 undefined 를 제외한 타입을 생성

type T3 = string | number | void | null | undefined;
type T4 = NonNullable<T3>;

// T4 에 마우스를 올려보면 "type T4 = string | number | void" 가 나옴
