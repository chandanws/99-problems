function anagramsSand1(str1, str2) {
  // Readability
  // Does not account for anything other than letters in string and if params are not validated.

  const str1Res = str1.split('').sort().join().trim();
  const str2Res = str2.split('').sort().join().trim();

  if (str1Res === str2Res) return true
  return false;
};



// uses an array to store values as numeric usage. aa == 2 at indx of alphabet - 1
function anagramsSand2(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string'){
    throw new TypeError('Must pass in strings');
  }

  if (str1.length !== str2.length) return false;

  // remove anything other letters from passed in strings
  const count = [];
  const str1Res = str1.replace(/[^A-Za-z]/g).toLowerCase();
  const str2Res = str2.replace(/[^A-Za-z]/g).toLowerCase();

  // This iterates over str1Res and creates an array from 0 - 25, giving the letter
  // that is used in the string a numberical value based on how many time it was used

  // i.e. Maary [2, ..., 1, ..., 1, ..., 1]
  for (let i = 0; i < str1Res.length; i += 1) {
    const index = str1Res.charCodeAt(i) - 97;
    count[index] = (count[index] || 0) + 1;
  };


  // This loop checks `counts` array for number values of previous string and if not there
  // returns false, else deducts 1 from that index
  for (let i = 0; i < str1Res.length; i += 1) {
    const index = str2Res.charCodeAt(i)-97;
    if (!count[index]) return false;
    else count[index]--;
  };

  return true;
}