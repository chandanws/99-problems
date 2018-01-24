const chai = require('chai');
const { expect } = chai;
const firstNonRepeat = require('../.');

describe('First non repeat character in string', () => {

  it('should be a function', () => {
    expect(firstNonRepeat).to.be.a('function');
  });

  it('should return error if the argument is not a string', () => {
    expect(firstNonRepeat.bind(firstNonRepeat, 1234)).to.throw(TypeError, 'Must pass in a string');
  });

  it('should return the first non repeat character', () => {
    expect(firstNonRepeat('Mirror')).to.equal('M');
  });
  // TODO: add more tests for solution
});
