// hash map - doesn't account for anything other than letters. can use regex
function anagrams(str1, str2) {
  if (!str1 || !str2) throw new Error('Must pass in values to test');

  if (str1.length !== str2.length) return false;

  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  const dict = {};
  for (let i = 0; i < lowerStr1.length; i += 1) {
    if (dict.hasOwnProperty(lowerStr1[i])) {
      dict[lowerStr1[i]] += 1;
    } else {
      dict[lowerStr1[i]] = 0;
    }
  };
 
  for (let i = 0; i < lowerStr2.length; i += 1) {
    if (!dict.hasOwnProperty(lowerStr2[i])) {
      return false;
    } else {
      dict[lowerStr2[i]] -= 1;
    }
  };
  return true;
};

module.exports = anagrams;
