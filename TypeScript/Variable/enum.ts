// enum 의 사용
enum Os {
  Window = "win",
  Ios = "ios",
  Android = "and",
}

/*
  "use strict";
  var Os;
  (function (Os) {
      Os["Window"] = "win";
      Os["Ios"] = "ios";
      Os["Android"] = "and";
  })(Os || (Os = {}));
*/

// 위 코드가 컴파일되면 아래이 코드가 되는것.
/*
  const Os = {
    Window : 'win',
    Ios : 'ios',
    Android : 'and',
  }
*/

let myOs: Os;
// Os 의 형식만 입력 가능
myOs = Os.Window; // 'win'
myOs = Os.Ios; // 'ios'
myOs = Os.Android; // 'and'
