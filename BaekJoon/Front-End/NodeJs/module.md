# module :star:

## :question: module 은 무엇인가?

module은 '독립된 기능을 갖는 것(함수, 파일)의 집합' 이다.
절차지향 언어와 달리 객체지향언어는 필요한 부분에 함수를 호출하는 방식으로 프로그래밍 할 수 있어 훨씬 유지보수 측면에서 효율적이다.

## :open_mouth: 모듈의 종류

Node.js 의 모듈은 다음과 같이 크게 2가지로 나눌 수 있다.
Node 내부에 있는 내부 모듈, 일반 개발자들이 따로 만든 외부 모듈
내부에 있는 모듈은 말 그대로 노드를 설치할때 같이 제공되는 모듈로 별도의 npm을 사용하지 않는다.
이와는 반대로 외부에 있는 모듈은 세계의 각 프로그래머가 별도로 만든 모듈로 이것에 접근하기 위해 npm을 사용해야한다.
| 내부모듈 | 외부모듈 |
| -------------------- | ------------------------ |
| node설치시 함께 제공 | node설치와는 별개로 접근 |
| npm 불필요 | npm 필요 |

## :bulb: 내장모듈 사용법

module은 nodeJS가 당연히 깔려 있어야 한다.
'npm init' 명령어로 우선 'package.json' 을 만들어줘야 nodeJS의 세팅이 된다.

```terminal
npm init
```

'package.json' 파일이 만들어졌으면 그 안에 'type: module' 을 추가해준다.

```json
{
  // ...
  "type": "module"
  // ...
}
```

### 참고 사이트

[Node.js] <https://nodejs.org/api/modules.html>  
[Module] <https://victorydntmd.tistory.com/16>  
[Require & Export] <https://medium.com/@chullino/require-exports-module-exports-%EA%B3%B5%EC%8B%9D%EB%AC%B8%EC%84%9C%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-1d024ec5aca3>
