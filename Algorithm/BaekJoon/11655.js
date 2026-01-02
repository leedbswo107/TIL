const encodeMsg = (s) => {
  if(s <= 122 && s >= 97) s = (s + 13) > 122 ? s + 13 - 26 : s + 13;
  else if(s <= 90 && s >= 65) s = (s + 13) > 90 ? s + 13 - 26 : s + 13;
  return String.fromCharCode(s);
}
const S = require('fs').readFileSync(0, 'utf-8').split('').map(e => e !== ' ' ? encodeMsg(e.charCodeAt()) : e);
const result = S.join('');
console.log(result);
