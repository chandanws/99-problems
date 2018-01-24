
// Reverses words in a sentence. Last word -> first word, first word -> last word
function reverseSentence(sentence) {
  return sentence
    .split(' ')
    .reduceRight((prev, curr) => {
      return prev.concat(curr, ' ');
    }, [])
    .join('')
    .trim();
}
reverseSentence('Javascript is a programming language');
reverseSentence('I love programming using JavaScript');


// Reverses each word in sentence, 'I used to ' -> 'I desu ot'
function reverseWordsOfSentence(sentence) {
  return sentence
  .split(' ')
  .map(curr => {
    return curr
    .split('')
    .reduceRight((prev, curr) => {
      return prev += curr;
    }, '')
    .concat(' ');
  })
  .join('');
}

console.log(reverseWordsOfSentence('I used to like to program in Ruby'))
// STRETCH GOALS: 
// - reverse words in a sentence and reverse characters of each word.
