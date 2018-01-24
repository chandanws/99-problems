function dupChars(word) {
  const wordArr = word.split('');
  const countObject = wordArr.reduce((prev, curr) => {
    if (prev.hasOwnProperty(curr)){
      prev[curr] += 1;
      return prev;
    } else {
      prev[curr] = 1;
      return prev
    }
  }, {});
  
  let result = '';
  for (let key in countObject) {
    if (countObject[key] > 1){
      const line = `${key} : ${countObject[key]}\n`
      result += line
    }
  }
  
  return result.trim();
}

module.exports = dupChars;
