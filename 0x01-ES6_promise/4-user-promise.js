/*
 * Using the following prototype
 * function signUpUser(firstName, lastName) {}
 * That returns a resolved promise with this object:
 * { firstName: value,lastName: value }
 */

export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName: `${firstName}`,
    lastName: `${lastName}`,
  });
}
