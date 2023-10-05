export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const cTeacher: Subjects.Teacher = {
    firstName: 'Maartin',
    lastName: 'Muldiver',
    experienceTeachingC: 10,
}
console.log('C++');
console.log(cpp.setTeacher(cTeacher), cpp.getRequirements(), cpp.getAvailableTeacher());
console.log('Java');
console.log(java.setTeacher(cTeacher), java.getRequirements(), java.getAvailableTeacher());
console.log('React');
console.log(react.setTeacher(cTeacher), react.getRequirements(), react.getAvailableTeacher());
