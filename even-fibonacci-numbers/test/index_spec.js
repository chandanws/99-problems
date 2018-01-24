const chai = require('chai');
const evenFibonacci = require('../index.js');
const expect = chai.expect;

describe('Even Fibonacci', () => {
  it('should be a function', () => {
    expect(evenFibonacci).to.be.a('function')
  })

  it('should return the sum of even numbers, in sequence up to or below 4,000,000', () => {
    expect(evenFibonacci(4000000)).to.equal(4613732);
  });
});
