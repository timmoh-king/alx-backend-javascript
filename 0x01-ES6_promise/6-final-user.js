/*
 * Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.
 * Write and export a function named handleProfileSignup. It should accept three arguments
 * firstName (string), lastName (string), and fileName (string).
 * The function should call the two other functions. When the promises are all settled
 * it should return an array with the following structure:
 */

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((o) => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : String(o.reason),
      }))
    ));
}
