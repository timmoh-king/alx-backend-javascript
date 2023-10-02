/*
 * Implement a class named Building
 * Constructor attriutes: sqft(Number)
 * Each attribute must be stred in and underscore
 * Implemnt a getter and a setter for each attribute
 * Consider this class as an abstract class
 * any class that extends from it should implement a method named
 * evacuationWarningMessage
 * If a class that extends from it does not have a
 * evacuationWarningMessage method throw an error message
 */

export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    if (this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqftSize) {
    if (typeof sqftSize === 'number') {
      this._sqft = sqftSize;
    } else {
      throw new TypeError('sqft must be a number');
    }
  }
}
