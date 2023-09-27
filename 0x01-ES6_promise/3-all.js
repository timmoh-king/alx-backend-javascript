/*
* In this file, import uploadPhoto and createUser from utils.js
* Knowing that the functions in utils.js return promises
* use the prototype below to collectively resolve all promises
* and log body firstName lastName to the console.
* In the event of an error, log Signup system offline to the console
*/

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      console.log(response[0].body, response[1].firstName, response[1].lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
