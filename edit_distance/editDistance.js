function editDistance(str1, str2) {
  let cache = {};

  function help(str1, str2) {
    console.log(str1, str2);
    let str1Len = str1.length;
    let str2Len = str2.length;

    if (str1Len === 0) {
      return str2Len;
    } else if (str2Len === 0) {
      return str1Len;
    }

    let el1 = str1[str1Len - 1];
    let el2 = str2[str2Len - 1];
    
    if (str1Len === str2Len) {
      debugger;
      str1 = str1.slice(0, str1Len - 1);
      str2 = str2.slice(0, str2Len - 1);
      if (el1 === el2) {
        return help(str1, str2);
      } else if (el1 !== el2) {
        return 1 + help(str1, str2)
      }
    } else {
      if (el1 === el2) {
        return help(str1.slice(0, str1Len - 1), str2.slice(0, str2Len - 1));
      } else {
        return 1 + Math.min(help(str1.slice(0, str1Len - 1), str2), help(str1, str2.slice(0, str2Len - 1)), help(str1.slice(0, str1Len - 1), str2.slice(0, str2Len - 1)));
      }
    }
  }

  return help(str1, str2);
}

console.log(editDistance('geek', 'gesek') === 1);
console.log(editDistance('tiger', 'tigre') === 2);
console.log(editDistance('duration', 'education')) //=== 2);
console.log(editDistance('apple', 'dapper')) //=== 3);