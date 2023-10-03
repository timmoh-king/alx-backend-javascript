/*
 * Create a function getStudentsByLocation that returns an array of objects in a specific city
 * It should accept a list of students (from getListStudents) and a city (string) as parameters.
 */

export default function (studentObj, city) {
  return Object.values(studentObj).filter((o) => o.location === city);
}
