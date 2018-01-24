const chai = require('chai');
const sumMultiplesOf3and5 = require('../index');
const expect = chai.expect;

describe('Multiples of 3 and 5', () => {
  it('should be a function', () => {
    expect(sumMultiplesOf3and5).to.be.a('function');
  });

  it('should return the sum of multiples of 3 and 5', () => {
    expect(sumMultiplesOf3and5()).to.equal(23);
  });
});