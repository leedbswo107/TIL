# flatMap :star:

## :question: flatMap 은 무엇인가? 
  **flatMap** 은 먼저 매핑 함수를 사용해 각 엘리먼트에 대해 map 을 수행 후, 결과를 **새로운 배열로 평평화** 한다.
  
  (**map** 은 반복 간으한 배열을 대상으로, 배열의 각 요소를 하나하나 순회하며 그 요소를 조작하고, 조작한 요소들이 모여있는 **배열을 리턴**해 준다.)

  
## :open_mouth: flatMap 와 filter/map 동작 비교
  우선 두 함수의 실행 결과는 조건이 같다는 가정으로 동일한 결과를 보인다.
  
  우선 filter와 map 을 사용한 코드를 보자.
 
```js
// using filterAndMap
 console.time("filterAndMap")
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
 const squaredOddNumbers = numbers
     .filter(num => num % 2 !== 0)
     .map(num => num * num)
 
 console.log(squaredOddNumbers); // [1, 9, 25, 49, 81]
 console.timeEnd("filterAndMap")
```
  해당 코드는 단순히 numbers 배열 값 중 홀수인 값의 제곱 값을 squaredOddNumbers 에 추가하는 코드이다.

  다음으로 같은 기능을 하지만 filter/map 이 아닌 flatMap 을 적용한 코드를 보자.
```js
console.time("filterAndMap")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredOddNumbers = numbers.flatMap(num => 
    num % 2 !== 0 ? [num * num] : []
);


console.log(squaredOddNumbers); // [1, 9, 25, 49, 81]
console.timeEnd("filterAndMap")
```
기능과 출력결과 모두 동일한 코드이지만 자세히 보면 한 가지 차이가 있는데

그것은 바로 squaredOddNumbers 배열에 값이 저장하는 코드의 Line 이 달라졌다.

```js
const squaredOddNumbers = numbers
    .filter(num => num % 2 !== 0)
    .map(num => num * num)

const squaredOddNumbers = numbers.flatMap(num => 
    num % 2 !== 0 ? [num * num] : []
);
```
이 코드를 통해 filter, map 을 쓰던 코드를 flatMap 으로 변경하면 코드의 line 측면에서 이득을 볼 수 있다.

 

이 두가지 코드를 마주하며 제일 먼저 든 생각은 "똑같은 역할을 하는 코드면 무조건 flatMap 을 써야지!"

라는 생각이였다. 

이 생각은 반은 맞고 반은 틀린 생각이었다.
***

## :boom: 왜 반은 맞고 반은 틀린 생각인가?
일단, flatMap은 ES6 가 등장하며 생긴 고차 함수(?) 라고 알고 있다.

여기서 ES6 란, 2015년에 도입된 최신 버전의 JavaScript 라고 한다. (필자는 아직 공부중이라 제대로 이해하진 못했다.)

 

당연한 것 이지만, 최신 버전일 수록 이전에 불편한 점을 개선한 버전이기 때문에 당연히 flatMap 은 효율성 측면에서

filter와 map 을 같이 쓴 것보다는 개선이 되었다는 이야기를 들었다.

 

여기까지만 찾아봤으면 '앞으로는 flatMap 을 써야겠다.' 라는 생각을 했을 것이다.

 

flatMap 과 filter, map 의 차이를 찾아보다가, Chat-GPT 에게 이 궁금증을 물어보았다.

(요즘, 정말 공부를 하면서 답답한 부분을 해결할 수 있는 1대1 과외선생님이 생긴거 같아 좋다. 하지만, 이게 확실히 

100% 맞다고 확신할 수 없어 한편으론 걱정되는 부분이다.)

 
```
chat GPT Answer

주의할 점은 최적화 수준이나 브라우저 엔진에 따라 다를 수 있다는 것입니다.

브라우저나 JavaScript 엔진이 업데이트될 때마다 성능 향상이 이루어지기 때문에

일반적으로 최신 엔진에서는 최적화 수준이 높을 것입니다.
```
 

코드의 효율은 지금 내가 사용하는 코드에서는 효율을 논하기에는 작고 이른 단계이지만,  Chat-GPT 의 응답에 따르면 

앞서 찾은 내용대로 filterMap 이 최신 JavaScript 엔진의 함수라 보다 효율적이라는 동일한 답변을 들었는데, 추가 설명에서 

흥미로운 점을 발견했다.

 
```
chat GPT Answer

그러나 대체로 말하자면, 코드의 가독성과 의도가 중요하다면 filter와 map을 사용하는

첫 번째 방법을 선택하는 것이 좋습니다. 최적화된 코드를 작성하는 것이 아니라면 코드의

가독성이나 유지보수성이 더 중요한 측면이기 때문입니다.
```
 

## :bulb: 가독성과 유지보수

지금보다 더 옛날에 코드를 접해 난잡한 프로젝트를 진행하면서 항상 느꼈던 것은 분명 내 코드인데도 이해하기 어려운경우와 

이해는 하는데 다른 팀원이 봤을 때 전혀 이해하지 못하는 경우가 많다 라는 것이다.

 

처음 이 코드를 봤을때 flatMap 을 처음 접했기에 이 함수를 봤을 때  '평평하게 매핑하기가 뭔 말이지?' 라는 생각이 들었고, 

filter와 map 을 사용한 코드는 '아 대충 앞에 배열에서 조건부분을 필터 해서 매핑 하겠구나' 라고 알아들었다.

 

어떤 함수에 대해 '이게 무슨 말이지?' 로 시작하는 것과 '이게 이 동작을 하겠구나' 로 접근하는 것의 차이는 

꽤 크다고 생각한다.

 

실무 경험이 없기에 확실하게 알 수 없지만, 일단 실무 프로젝트는 개인이 해본 프로젝트와 비교하면 엄청난 양의 차이가 있을 것이다. 

그런 상황에서 가독성이 좋지 않다면, 처음 작성자는 본인의 코드이기 때문에 상관이 없지만 다른 사람이 그 코드를 접하게 된다면 

차라리 처음부터 다시 만드는게 좋을 정도라는 말을 많이 들었다. 

## :books: 그래서 무엇을 쓸 건데?
1. 가독성은 떨어지더라도 코드의 효율을 늘리기.

2. 코드의 효율은 떨어지더라도 가독성을 높여 유지보수를 보다 쉽게 하기.

 

실무에서는 이 두가지 케이스를 고려해 그 접점을 찾거나 1번을 선택할 것 같다. 

하지만, 지금은 일단 2번을 선택하기로 한다. (스스로 코드를 이해하기도 어려운데 효율을 논하기엔 덧셈을 막 배운 학생에게 미적분을 하라는 말과도 다를 바 없을것이다!!)

 

 

## :guardsman: 느낀점
 

항상 프로그래밍 언어를 공부하면서 느끼는 감정은 **애매모호** 였다.

명확한 답을 바라지만, 방향은 제시 되는 것 같지만. 항상 뭔가 확실하다는 느낌을 받은 적이 없던거 같다..코딩은 문제 해결능력이 중요한 분야인거 같다. 

이 말인 즉슨, 명확한것 없이 배우지만 배우면서 겪는 그 시행착오는 나중에 같은 상황을 마주할 때 빛을 바랄 것 이라는 것이다!!! 재주도 없는 글을 뿌려버렸다. 

심지어는 문법도 틀렸을수도...화이팅...

### 참고 사이트 

<https://javascript.plainenglish.io/i-bet-you-dont-use-these-javascript-tricks-and-pratices-5ab5438ed4c8>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap>
