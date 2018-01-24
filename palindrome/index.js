function palindrome(word) {
  const reversedWord = word.split('').reduceRight((prev, curr) => prev += curr,'')
  return word === reversedWord;
}