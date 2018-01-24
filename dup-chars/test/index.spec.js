const chai = require('chai');
const { expect } = chai;
const dupChars = require('../.');

describe('Duplicate Characters', () => {
  it('should be a function', () => {
    expect(dupChars).to.be.a('function');
  });

  it('should return a string of mulitple characters', () => {
    expect(dupChars('grandmama')).to.equal('a : 3\nm : 2')
    expect(dupChars('banana')).to.equal('a : 3\nn : 2')
    expect(dupChars('jwertybn')).to.equal('');
  })
});