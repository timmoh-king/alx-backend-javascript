/**
 * Create a function named calculateNumber with two arguments (number) a and b
 * The function should round a and b and return the sum of it
 */

const calculateNumber = (type, a, b) => {
  if (type === 'SUM') {
    return (Math.round(a) + Math.round(b));
  }
  if (type === 'SUBTRACT') {
    return (Math.round(a) - Math.round(b));
  }
  else if (type === 'DIVIDE') {
    if (Math.round(b) == 0) {
      return 'Error'
    } else {
      return (Math.round(a) / Math.round(b));
    }
  }
};

module.exports = calculateNumber
