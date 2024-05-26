# Pain Point :star:

## :boom: client 에서 POST후 발생한 에러

client 에서 정보를 POST하던 중 아래와 같은 오류가 발생했다.

```terminal
MongoServerError: E11000 duplicate key error collection: blog.users index: userID_1 dup key: { userID: null }
    at InsertOneOperation.execute (/Users/leeyunjae/programming/react/react_study/blogpractice/api/node_modules/mongodb/lib/operations/insert.js:51:19)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async executeOperation (/Users/leeyunjae/programming/react/react_study/blogpractice/api/node_modules/mongodb/lib/operations/execute_operation.js:136:16)
    at async Collection.insertOne (/Users/leeyunjae/programming/react/react_study/blogpractice/api/node_modules/mongodb/lib/collection.js:155:16) {
  errorResponse: {
    index: 0,
    code: 11000,
    errmsg: 'E11000 duplicate key error collection: blog.users index: userID_1 dup key: { userID: null }',
    keyPattern: { userID: 1 },
    keyValue: { userID: null }
  },
  index: 0,
  code: 11000,
  keyPattern: { userID: 1 },
  keyValue: { userID: null },
  [Symbol(errorLabels)]: Set(0) {}
}
```

연습을 위해 기존에 MongoDB를 그대로 활용하여 기능구현을 하던 중 교육중 작성한 원본의 `userID`값이 `NULL`이라 문제가 발생했다. 별도로 원본을 실행시키지는 않았기 때문에 어느 부분에서 원본의 값을 필요로하는지 알아봐야한다.

### 🥺 시도한 해결방법 (1)

#### 프로그램을 껐다가 켜보자!

찾아본 결과 종종 이전 데이터가 일부 남아 오류를 발생하는 경우가 있다고 한다. 이런 경우는 VSC를 종료 후 재실행하면 해결되는 경우가 있다고 한다.

그러나 재실행을 해도 문제는 해결되지 않았다...

### 🥺 시도한 해결방법 (2)

#### MongoDB속 기존의 데이터를 다 삭제해보자!

원본에서는 `userID`을 사용하였으나 연습할때는 `username`으로 스키마를 구성했기 때문에 혹시 하나의 데이터베이스 컬렉션 내부에 스키마의 구성이 달라 예기치 못한 오류가 발생한것인가 라는 생각을하게 되어 한번 기존의 데이터를 삭제하고 다시 구성해보기로 했다.

하지만, 이전에도 연습을 위해 추가 데이터 형식이 필요할 때 마다 하나씩 스키마에 추가한 적이 있기 때문에 데이터베이스 내부에서 스키마가 다르다고 문제가 발생하는 것은 경험한적 없었고, 역시나 이 방법으로도 문제는 해결되지 않았다.

### 🥳 해결방법 (최종)

문제를 찾아본 결과 Stackoverflow 에서 동일한 문제에 대해 토론한 부분을 찾았다.
그곳에서 이야기한 내용에 따르면 사용하지 않는 indexes 는 삭제를 해야 이 오류가 발생하지 않는다는 설명을 했다.

Database -> Collections -> (문제의 컬렉션영역) -> Indexes 의 경로로 들어가 사용하지 않는 `userID`를 삭제 해주니 문제가 해결되었다.

<img src='../images/MongoServerError: E11000 duplicate key error collection1.png'>

찾아본 결과 `mongoose`에서 스키마를 설정하면서 `required` 를 `true`로 설정후 create를 진행하면 데이터베이스에 indexes영역에서 보면 required가 적용됨을 알 수 있었다.

결론적으로 문제는 mongoose 스키마에서 설정한 required가 데이터베이스에도 영향을 줘서 해당 값은 무조건 입력해야하는 상태가 된것이다. 그렇기에 별도로 그 값을 필요로하는 프로그램을 실행시키지 않아도 데이터베이스 자체에 스키마가 설정된것으로 프로그래밍을 데이터베이스에 맞게 작성할 필요가 있는것이다.

## :guardsman: 느낀점

사실 하나의 데이터베이스를 연습을 위해 다른 코드와 연결하는 경우를 제외하고는 이런 문제가 발생할 일이 있을까 싶지만, 이번 문제로 스키마의 타입의 특성을 다룰 때 고려해야할 부분을 습득했고, 프로그래밍을 진행할 때 규칙의 일관성의 중요성을 다시한번 체감할 수 있었다.

### 참고 사이트

[stackoverflow] : <https://stackoverflow.com/questions/24430220/e11000-duplicate-key-error-index-in-mongodb-mongoose>
