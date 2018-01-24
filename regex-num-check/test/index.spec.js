const chai = require('chai');
const { expect } = chai;
const regexNum = require('../.');

describe('Regex Num', () => {
  it('should be a function', () => {
    expect(regexNum).to.be.a('function');
  });

  it('should return boolean if string only contains digits', () => {
    expect(regexNum('addke882829299..//,m')).to.equal(false);
    expect(regexNum(',,,......')).to.equal(false);
    expect(regexNum('189210010391')).to.equal(true);
    expect(regexNum('189210dq00110991')).to.equal(false);


  })
});