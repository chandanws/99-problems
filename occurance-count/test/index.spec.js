const chai = require('chai');
const { expect } = chai;
const occuranceCount = require('../.');

describe('Occurance Count', () => {
  it('should be a function', () => {
    expect(occuranceCount).to.be.a('function');
  })
})