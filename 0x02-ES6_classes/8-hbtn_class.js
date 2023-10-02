/*
 * implement a class named HolbertonClass:
 * constructor attributes: size(num) location(str)
 * each attribute must be stored in an underscore
 * when class is cast into Number it should return the size
 * when the class is cast into string it should return the location
 */

export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}
