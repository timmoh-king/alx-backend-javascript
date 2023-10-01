/*
 * Implement a class named HolbertonCourse:
 * Constructor attributes: name, length, students
 * Make sure to verify the type of attributes during object creation
 * Each aattribute must be scored in an underscore att: (_name)
 * Implement a getter and setter for each attribute
 */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(courseName) {
    if (typeof courseName === 'string') {
      this._name = courseName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(courseLength) {
    if (typeof courseLength === 'number') {
      this._length = courseLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
