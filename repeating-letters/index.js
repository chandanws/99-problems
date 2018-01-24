function repeatingLetters(string) {
  const splitArr = string.split('');
  const obj = {};
  let result = null;

  for (let i = 0; i < splitArr.length; i += 1) {
    if (obj.hasOwnProperty(splitArr[i])) {
      obj[splitArr[i]] += 1;
    } else {
      obj[splitArr[i]] = 0;
    }
  }
  
  for (let key in obj) {
    if (obj[key] > 0) {
      result = key;
      break;
    } else {
      result = false;
    }
  }
  return result;
};

module.exports = repeatingLetters;