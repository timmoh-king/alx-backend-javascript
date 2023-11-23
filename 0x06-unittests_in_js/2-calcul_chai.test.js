const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('number test', () => {
  it('handle the sum type', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    expect(result).to.equal(6);
  });
  it('handle the subtraction type', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(result).to.equal(-4);
  });
  it('handles divide type', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(result).to.equal(0.2);
  });
  it('handles divide when b is 0', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    expect(result).to.equal('Error');
  });
});
