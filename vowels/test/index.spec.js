const chai = require('chai');
const { expect } = chai;
const vowels = require('../.');


describe('Vowels', () => {
  it('should be a function', () => {
    expect(vowels).to.be.a('function');
  });

  it('should return a string of vowels and consonants count', () => {
    expect(vowels('blah')).to.equal('vowels: 1, consonants: 3');
    expect(vowels('programming')).to.equal('vowels: 3, consonants: 8');
    expect(vowels('javascript')).to.equal('vowels: 3, consonants: 7');
    expect(vowels('testingwithchai')).to.equal('vowels: 5, consonants: 10');
    expect(vowels('')).to.equal('vowels: 0, consonants: 0');
  });
})
