function validAnagram(arr1, arr2) {
  // if(arr1.length !== arr2.length) return false;
  // const FC1 = {};
  // const FC2 = {};
  // for (const key of arr1) FC1[key] = (FC1[key] || 0) + 1;
  // for (const key of arr2) FC2[key] = (FC2[key] || 0) + 1;
  // for (const key in FC1) {
  //   if(!(key in FC2)) return false;
  //   if(FC1[key]  !== FC2[key]) return false;
  // }
  // return true;
  if (arr1.length !== arr2.length) return false;
  const lookUp = {};
  for (const e of arr1) lookUp[e] = (lookUp[e] || 0) + 1;
  for (const key in lookUp) {
    if (!lookUp[key]) return false;
    lookUp[key] -= 1;
  }
  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
