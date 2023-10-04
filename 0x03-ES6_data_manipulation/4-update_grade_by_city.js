/*
 * Create a function updateStudentGradeByCity
 *  returns an array of students for a specific city with their new grade
 *   accept a list of students (from getListStudents), a city (String), and newGrades
 */

export default function updateStudentGradeByCity(studentObj, city, newGrades) {
  const students = Object.values(studentObj).filter((o) => o.location === city);

  const updatedStudents = students.map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id)[0];
    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });

  return updatedStudents;
}
