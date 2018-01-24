function vowels(word){
  const vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;
  let consonantsCount = 0;

  for (let i = 0; i < word.length; i += 1) {
    if(vowelsArr.indexOf(word[i]) !== -1) {
      vowelsCount += 1;
    } else {
      consonantsCount += 1;
    }
  }

  return `vowels: ${vowelsCount}, consonants: ${consonantsCount}`;
};

module.exports = vowels;