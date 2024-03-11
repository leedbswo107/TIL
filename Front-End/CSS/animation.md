# animation :star:

## :question: animation 이란?

애니메이션은 요소에 적용되는 CSS 스타일을 다른 CSS 스타일로 부드럽게 전환시켜주는 속성이다.

## :open_mouth: animation 축약형 구성

**모든요소를 다 적는 경우**:

```css
/* animation : duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name; */
animation: 3s ease-out 0.2s infinite reverse both paused slidein;
```

- duration : 말 그대로 애니메이션의 동작 시간을 표시하는 부분
- easing-function : 동작의 전환 유형을 결정하는 부분
- iteration-count : 애니메이션이 재생되는 횟수를 제어하는 부분
- direction : 애니메이션이 재생되는 방향을 제어하는 부분
- fill-mode : 실행 전후에 애니메이션의 대상에 스타일을 적용시키는 방법을 결정하는 부분
- play-state : 애니메이션의 재생 여부를 결정하는 부분
- name : `@keyframes "name"` 형태로 애니메이션이 어떤 동작하는 가를 요약적으로 적어주는게 좋고 이름으로 변수처럼 생각하면 이해하는데 좋을거 같다.

**4가지 요소를 적는 경우**

```css
/* animation : duration | easing-function | delay | name; */
animation: 2s ease-in 0.5s slideout;
```

- 이것을 통해 알 수 있는 것은 위의 모든 요소를 다 적는 경우는 더 세밀한 사용이 가능하지만, 상황에 따라 4가지 요소로 줄여서 사용이 가능하다. 즉, 애니메이션 프로퍼티를 사용하기 위해서는 최소한 4개의 요소는 사용해야 동작함을 알 수 있다.

**애니메이션이 한 개가 아닌 경우**

```css
animation: 3s linear slidelin, 3s ease-out 5s slideout;
```

---

## :boom:

## :bulb:

## :books:

## :guardsman: 느낀점

### 참고 사이트
