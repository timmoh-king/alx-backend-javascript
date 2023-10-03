/*
 * Create a function getStudentIdsSum that returns the sum of all the student ids.
 * It should accept a list of students (from getListStudents) as a parameter.
 */

export default function (studentObj) {
  const idList = Object.values(studentObj).map((o) => o.id);
  return idList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
