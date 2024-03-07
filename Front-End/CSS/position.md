# Position :star:

## :question: position CSS

웹을 디자인하는데 있어서 가장 중요한요소중 하나는 원하는 곳으로의 배치다.
HTML 코드는 말 그대로 뼈대를 의미하기 때문에 CSS 를 이용해 살을 붙이는데 그중 원하는 위치로의 배치를 위한 CSS 코드는 position 프로퍼티를 이용해 상황에 맞게 구성할 수 있다.

## :open_mouth: 종류

- static
  - 기본 셋팅값으로 top, bottom, left, right, z-index프로퍼티의 영향을 받지 않는다.
- relative
  - 상대위치를 나타내는 프로퍼티로 원래 영역(부모영역)을 기준으로 top, bottom, left, right, z-index 프로퍼티가 적용된다.
- absolute
  - 절대좌표(웹페이지)를 기준으로 top, bottom, left, right, z-index 프로퍼티가 적용된다.
- fixed
  - absolute와 같이 절대좌표를 기준으로 top, bottom, left, right, z-index 프로퍼티가 적용되는데 차이점은 fixed 프로퍼티는 스크롤을 해도 그 위치를 유지한다.
- sticky
  - relative와 같이 원래 영역(부모영역)을 기준으로 top, bottom, left, right, z-index 프로퍼티가 적용되고 fixed처럼 스크롤을 해도 그 위치를 유지하나 임계값을 넘는 순간 감춰진다.

---

## :boom:

## :bulb:

포지션을 사용하는데 2depth 이상에서 1depth 의 좌표를 기준으로 배치를 원하는 경우 부모의 position property 가 static 이 아니게 설정해줘야 한다.

## :books:

## :guardsman: 느낀점

### 참고 사이트
