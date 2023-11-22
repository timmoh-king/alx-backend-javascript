/**
 * Create a function named calculateNumber with two arguments (number) a and b
 * The function should round a and b and return the sum of it
 */

const calculateNumber = (a, b) => {
  return (Math.round(a) + Math.round(b));
};

module.exports = calculateNumber
