function replaceWith20(sentence = '', char) {
  if (sentence.length === 0) throw new Error('Must pass in valid string');

  return sentence
  .split('')
  .map(curr => curr === char ? '20%' : curr)
  .join('');
};

console.log(replaceWith20('Java is a programming language.', 'x'));


// POSSIBLE SOLUTIONS:

// - find all ocurrances of char with regex. use replace to remove and insert 20% 0(1)
