const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('number test', () => {
  it('handle the sum type', () => {
    expect(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('handle the subtraction type', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('handles divide type', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('handles divide when b is 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
