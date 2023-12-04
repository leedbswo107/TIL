# Trim :star:

## :question: trim은 무엇인가?
 - trim() 메서드는 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환한다. 여기서의 공백은 모든 공백문자(space, tab, NBSP 등)와 개행문자(LF, CP 등)을 포함한다.
 - trim() 메서드를 사용하면 기존에 변수의 데이터영역에 있는 문자열은 그대로 두고, 새로운 문자열을 가리키는 주소를 변수의 데이터영역과 연결한다. (trimStart, trimEnd 도 마찬가지)
 - 한쪽 끝의 공백만을 제거한 새 문자열을 반환하려면 trimStart(), trimEnd() 를 사용.

   
## :open_mouth: trim 사용 예시
```js
let text = '  My name is Lee  ';

console.log(text);
// Expected Output : '  My name is Lee  ';

console.log(text.trim());
// Expected Output : 'My name is Lee';

console.log(text.length);
// Expected Output : 18;

console.log(text.trim().length);
// Expected Output : 14;
```

***

## :boom: trimStart(), trimEnd()
### trimStart()
  - trimStart() 메서드는 문자열 앞(왼쪽) 부분의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환한다.
  - trimStart() 메서드는 trimLeft() 라는 별칭으로도 호출이 가능하다. 
```js
let text = '  My name is Lee  ';

console.log(text);
// Expected Output : '  My name is Lee  ';

console.log(text.trimStart());
// Expected Output : 'My name is Lee  ';

console.log(text.length);
// Expected Output : 18;

console.log(text.trimStart().length);
// Expected Output : 16;

//trimStart  - > trimLeft 로 변경해도 동일한 동작을 한다.
```

### trimEnd()
  - trimEnd() 메서드는 문자열 끝(오른쪽) 부분의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환한다.
  - trimEnd() 메서드는 trimRight() 라는 별칭으로도 호출이 가능하다.
```js
let text = '  My name is Lee  ';

console.log(text);
// Expected Output : '  My name is Lee  ';

console.log(text.trimEnd());
// Expected Output : '  My name is Lee';

console.log(text.length);
// Expected Output : 18;

console.log(text.trimEnd().length);
// Expected Output : 14;
```

## :bulb: trim 메서드의 장/단점
### 장점
  - 공백 제거 : trim() 메서드의 사용 목적은 문자열의 시작과 끝의 불필요한 공백을 제거하여 사용자의 입력, 양식 제출, 혹은 외부 소스에서 데이터를 처리할 때 일관성 있고 정리된 데이터를 보장하기 위함이다.
    
  - 사용자 경험 향상 : 사용자 입력을 다룰 때 trim() 메서드를 사용하면 입력 유효성 검사나 비교 작업 중 문제를 일으킬 수 있는 예상치 못한 앞, 뒤 공백을 방지함으로 사용자의 경험을 향상 시킬 수 있다.
    
  - 일관된 데이터 처리 : 앞, 뒤의 공백을 제거하여 문자열을 반환하면 데이터를 보다 더 일관성 있게 보장할 수 있고, 이것은 데이터를 다양한 소스에서 가져오거나 여러 반환을 거칠 때 이점을 보일 수 있다.

### 단점
  - 정보 손실 : 데이터의 앞, 뒤에 의도적으로 공백을 포함시킨 경우 trim() 메서드의 사용은 데이터의 손실을 초래할 수 있다. (데이터의 맥락과 공백의 의미에 대해 고려하여 사용할 것)
    
  - 성능 : 큰 문자열이나 상당한 양의 데이터를 처리하는 경우 성능의 부하가 커버할 수 있는 부분인지를 고려해야한다.
    
  - 멀티바이트 문자 처리 : 문자가 여러 바이트로 처리되는 언어(ex : UTF-8)에서는 문자열을 무작위로 자르면 멀티바이트 문자를 올바르게 처리하지 못할 수 있다. 이것은 멀티바이트 문자의 일부를 잘라내는 등의 의도치 않은 동작을 초래할 수 있다.
    
  - 입력 유효성 검사에서의 과도한 사용 : 사용자 입력을 관리하는데 trim() 메서드에만 의존하는 것은 보안 목적으로는 충분하지 않을 수 있으므로, 보안 취약점(예: SQL 주입 또는 크로스사이트 스크립팅(XSS))을 방지하기 위해 적절한 입력 유효성 검사 및 필터 기능을 사용해야 한다.
 

## :books: Polyfill
- trim() 
```js
/* trim ployfill: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim */
if (!String.prototype.trim) {
  (function() {
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function() {
      return this.replace(rtrim, '');
    };
  })();
}

/* Because old browsers (IE 8-) don't define trim() */
```
- trimStart()
```js
//https://github.com/FabioVergani/js-Polyfill_String-trimStart

(function (w) {
  var String = w.String,
    Proto = String.prototype;

  (function (o, p) {
    if (p in o ? (o[p] ? false : true) : true) {
      var r = /^\s+/;
      o[p] =
        o.trimLeft ||
        function () {
          return this.replace(r, "");
        };
    }
  })(Proto, "trimStart");
})(window);

/*
ES6:
(w=&gt;{
    const String=w.String, Proto=String.prototype;

    ((o,p)=&gt;{
        if(p in o?o[p]?false:true:true){
            const r=/^\s+/;
            o[p]=o.trimLeft||function(){
                return this.replace(r,'')
            }
        }
    })(Proto,'trimStart');

})(window);
*/
```
- trimEnd()
```js
/**
 * String.prototype.trimEnd() polyfill
 * Adapted from polyfill.io
 */
if (!String.prototype.trimEnd) {
	String.prototype.trimEnd = function () {
		return this.replace(new RegExp(/[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/.source + '$', 'g'), '');
	};
}

```



## :guardsman: 느낀점
 평소에도 많이 접할 수 있던 trim() 메서드는 익숙해서 그런지 이 메서드를 자세하게 알아볼 생각이 많지는 않았다. 코드테스트를 준비하는 중 trim 을 사용한 예제를 보게 되었고 이것의 동작이 갑작스러운 호기심을 일으켜 학습을 하게

 되었는데, trim(), trimStart(), trimEnd() 메서드가 기존의 데이터를 고쳐 쓰는 것이 아닌 부분이 코어자바스크립트 1장 데이터 타입에서 변수 선언과 데이터 할당에서 배운내용이 적용된 예시로 복습을 할 수 있었다.

 trim() 을 사용함에 있어 이 메서드의 사용에 장점과 단점을 익혀 바르게 사용할 수 있게 복습해야겠다.


### 참고 사이트 
<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/trim>
<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart>
<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd>
<https://gist.github.com/arturotena/22158dcabe386bbfc536>
<https://vanillajstoolkit.com/polyfills/stringtrimend/>
