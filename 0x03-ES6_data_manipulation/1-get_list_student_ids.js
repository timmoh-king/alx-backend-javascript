/*
 * Create a function getListStudentIds that returns an array of ids from a list of object.
 * This function is taking one argument which is an array of objects
 * If the argument is not an array, the function is returning an empty array.
 */

export default function getListStudentIds(studentObj) {
  if (Array.isArray(studentObj) === true) {
    return Object.values(studentObj).map((o) => o.id);
  }
  return [];
}
