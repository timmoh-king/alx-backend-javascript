/*
 * Create a function named setFromArray that returns a Set from an array.
 * It accepts an argument (Array, of any kind of element).
 */

export default function setFromArray(arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; +i) {
    set.add(arr[i]);
  }
  return set;
}
