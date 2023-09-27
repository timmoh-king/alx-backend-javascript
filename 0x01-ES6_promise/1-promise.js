/*
* Using the prototype below, return a promise. The parameter is a boolean.
* When the argument is true:
* resolve the promise by passing an object with 2 attributes: status: 200 body: 'success'
* when false:
* reject the promise with an error object with the message The fake API is not working currently
*/

export default function getFullResponseFromAPI(success) {
  const arr = new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  return arr;
}
