const chai = require('chai');
const largestPrime = require('../index');
const expect = chai.expect;

describe('Largest Prime Factor', () => {
  it ('should be a function', () => {
    expect(largestPrime).to.be.a('function');
  });
})