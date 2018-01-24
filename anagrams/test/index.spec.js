const { expect } = require('chai');
const anagrams = require('../.');

describe('anagram', () => {
  it('should be a function', () => {
    expect(anagrams).to.be.a('function');
  });

  it('should validate parameters', () => {
    expect(anagrams.bind(anagrams,'Jane')).to.throw(Error, 'Must pass in values to test');
  });

  it('should have the same amount of characters', () => {
    expect(anagrams('kkd', 'asjdfjfn')).to.equal(false);
    expect(anagrams('kfkajj9w9lkn', 'aksdkfjal')).to.equal(false)
  });

  it('should return type boolean', () => {
    expect(anagrams(123, '123')).to.equal(false)
    expect(anagrams('jjsjjshe', 'sshjjejj')).to.equal(true)
    expect(anagrams('Maaaary', 'raaaaym')).to.equal(true);
  });
});