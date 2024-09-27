# h1~h6 tag :star:

## :question: h태그는 무엇인가

우선 h 태그는 1부터 6까지 존재한다. 그렇다면 h태그는 어떤 역할을 하는것일까?
바로 head 제목을 나타낼때 사용하는 태그이다.
이 태그를 사용하면 번호순으로 1에 가까울수록 더 핵심적인 제목을 의미한다.

## :bulb: 주의할 점

- 무슨일이 있어도 h1은 html 안에 단 한 개만이 존재하는 것이 mdn 공식 html 규칙에 맞는 것이다.
  하지만, h2 이하는 몇개가 나와도 상관은 없지만 너무 많이 나오는 것도 특이 케이스를 제외하고는 지양 해야할 것이다.
- h 태그는 1~6 까지 존재하지만, 6까지 다 쓰는 경우는 드물다. 아니. 거의 없다.
  가능한 h4 이내로 주로 사용하니 h태그의 남발을 지양하자.

## :books: 예시

```html
<h1>This is h1 tag</h1>
<h2>This is h2 tag</h2>
<h3>This is h3 tag</h3>
<h4>This is h4 tag</h4>
<h5>This is h5 tag</h5>
<h6>This is h6 tag</h6>
```

### 출력 결과

<img src="https://github.com/leedbswo107/TIL/blob/main/Front-End/images/h_tag.png" width="300px" height="350px">

## :guardsman: 느낀점

추후에 다룰 section, article, main 영역에는 h 태그가 출력되진 않아도 그 부분이 어떤 부분인지를 알려주는 h 태그가 있는것이 mdn에 정리된 html 규칙에 맞는 것으로 알고 있다. h 태그가 항상 출력되는것은 아니고 또한, 이미지가 h태그로 들어갈 수 도 있음을 잊지말자.

### 참고 사이트

<https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements>
