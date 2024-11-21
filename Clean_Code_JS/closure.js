const arr = [1, 2, 3, "A", "B", "C", {}];

function isTypeOf(type) {
  return function (value) {
    return typeof value === type;
  };
}

const isNumber = isTypeOf("number");
const isString = isTypeOf("string");

console.log(arr.filter(isNumber));
console.log(arr.filter(isString));

// closure - Practical application examples (fetcher)
function fetcher(endpoint) {
  return function (url, options) {
    return fetch(endpoint + url, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.error);
        }
      })
      .catch((err) => console.error(err));
  };
}

const getNaverApi = fetcher("https://naver.com");
const getDaumApi = fetcher("https://daum.net");

getDaumApi("/webtoon").then((res) => res);
getNaverApi("/webtoon").then((res) => res);

const obj = { width: 10, height: 15 };
console.log(obj.width * obj.height);
