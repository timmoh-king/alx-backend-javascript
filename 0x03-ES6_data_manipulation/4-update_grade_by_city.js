/*
 * Create a function updateStudentGradeByCity
 *  returns an array of students for a specific city with their new grade
 *   accept a list of students (from getListStudents), a city (String), and newGrades
 */

export default function updateStudentGradeByCity(studentObj, city, newGrades) {
  const students = Object.values(studentObj).filter((o) => o.location === city);
  const updatedStudents = students.map((student) => ({
    ...student,
    grade: newGrades[student.id],
  }));
  return updatedStudents;
}
