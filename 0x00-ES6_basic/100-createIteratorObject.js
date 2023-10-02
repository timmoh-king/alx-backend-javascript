/*
 * Write a function named createIteratorObject
 * that will take into argument a report Object
 * This function will return an iterator to go through every employee in every department
 */

export default function createIteratorObject (report) {
  return (
    {
      * [Symbol.iterator] () {
        for (const department of Object.keys(report.allEmployees)) {
          for (const employee of report.allEmployees[department]) {
            yield employee;
          }
        }
      }
    }
  );
}
