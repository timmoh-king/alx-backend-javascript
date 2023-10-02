/*
 * Import uploadPhoto and createUser from utils.js
 * Write an async function named asyncUploadUser
 * that will call these two functions and return san object with the following format:
 * { photo: response_from_uploadPhoto_function, user: response_from_createUser_function }
*/

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo: photoResponse,
      user: userResponse
    };
  } catch {
    return ({
      photo: null,
      user: null
    });
  }
}
