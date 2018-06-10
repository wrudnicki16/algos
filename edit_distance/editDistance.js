function editDistance(str1, str2) {
  let str1Len = str1.length;
  let str2Len = str2.length;
  cache = new Array(str1Len);

  for (let i = 0; i < str1Len + 1; i++) {
    cache[i] = Array(str2Len + 1);
    cache[i].fill(0);
  }
  console.log(cache);

  for (let i = 0; i < str1Len + 1; i++) {
    for (let j = 0; j < str2Len + 1; j++) {
      
      if (i === 0) {
        cache[i][j] = j;
      } else if (j === 0) {
        cache[i][j] = i;
      } else if (str1[i] === str2[j]) {
        cache[i][j] = cache[i - 1][j - 1];
      } else {
        cache[i][j] = 1 + Math.min(cache[i - 1][j], cache[i][j - 1], cache[i - 1][j - 1]);
      }
    }
  }

  return cache[str1Len][str2Len];
}

console.log(editDistance('geek', 'gesek') === 1);
console.log(editDistance('tiger', 'tigre') === 2);
console.log(editDistance('duration', 'education') === 2);
console.log(editDistance('apple', 'dapper') === 3);