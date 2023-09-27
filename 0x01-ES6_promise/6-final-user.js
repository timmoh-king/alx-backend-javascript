/*
 * Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.
 * Write and export a function named handleProfileSignup. It should accept three arguments
 * firstName (string), lastName (string), and fileName (string).
 * The function should call the two other functions. When the promises are all settled
 * it should return an array with the following structure:
 */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup (firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((response) => {
      const result = [];
      response.forEach((promise) => {
        if (promise.status === 'fulfilled') {
          result.push({
            status: promise.status,
            value: promise.value
          });
        } else {
          result.push({
            status: promise.status,
            value: `Error: ${promise.reason.message}`
          });
        }
      });
      return result;
    });
}
