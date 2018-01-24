const { expect } = require('chai');
const repeatingLetters = require('../.');

describe('Repeating Strings', () => {
  it('should be a function', () => {
    expect(repeatingLetters).to.be.a('function')
  });

  it('should return the letter that repeats in the given string', () => {
    expect(repeatingLetters('Hello')).to.equal('l');
    expect(repeatingLetters('Java')).to.equal('a');
    expect(repeatingLetters('foobar')).to.equal('o');
  });

  it('should return false if no repeating letters are found', () => {
    expect(repeatingLetters('Nigel')).to.equal(false);
    expect(repeatingLetters('abcdefghijklmnopqrstuvwxyz')).to.equal(false);
  })
})