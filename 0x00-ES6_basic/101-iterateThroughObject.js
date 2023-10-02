/*
 * write a function named iterateThroughObject
 * The function’s parameter reportWithIterator is the return value from createIteratorObject.
 * It should return every employee name in a string, separated by |
 * Reminder - the functions will be imported by the test suite.
 */

export default function iterateThroughObject(reportWithIterator) {
  return reportWithIterator.join(' | ');
}
