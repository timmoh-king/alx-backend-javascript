const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('isNumber test', () => {
  it('round to whole number', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('round down b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('rounding down and both a and b', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounding down a', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounding up b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounding up a', () => {
    assert.strictEqual(calculateNumber(1.5, 2.0), 4);
  });

  it('rounding up both a and b fractional nums', () => {
    assert.strictEqual(calculateNumber(1.6, 2.6), 5);
  });

  it("rounding down a and b floating nums with trailing 9\'s", () => {
    assert.strictEqual(calculateNumber(1.499999, 2.499999), 3);
  });
});
