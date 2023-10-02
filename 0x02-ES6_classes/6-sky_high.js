/*
 * import Building from 5-building.js
 * implement a class named SkyHighBuilding that extends from Building
 * Consructor attributes sqft, floors
 * Each attribute must be stored in an undersore version
 * implement a getter and a setter fr each attribute
 * override the method named evacuationWarningMessage and return the following string
 * 'Evacuate slowly the NUMBER_OF_FLOORS floors.'
 */

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floorNumber) {
    if (typeof floorNumber === 'number') {
      this._floors = floorNumber;
    } else {
      throw new TypeError('floors must be a number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
