// Union Types -> OR 과 비슷.

interface Car1 {
  name: "car";
  color: string;
  start(): void;
}
interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

//  (gift.name)
// 동일한 속성의 타입을 달리 해서 구분할 수 있는 것 식별 가능한 유니온 타입.
function getGift(gift: Car1 | Mobile) {
  console.log(gift.color);
  gift.name === "car" && gift.start();
  gift.name === "mobile" && gift.call();
}
