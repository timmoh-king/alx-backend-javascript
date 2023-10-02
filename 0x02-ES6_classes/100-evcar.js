/*
 * Import Car from 10-car.js.
 * Implement a class named EVCar that extends the Car class:
 * Constructor attributes: brand(str) motor(str) color(str) range(str)
 * Each attribute must be stored in an “underscore” attribute version
 * when cloneCar is called on a EVCar object
 * the object returned should be an instance of Car instead of EVCar.
 */

import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  this.cloneCar() {
    return new Car();
  }
}
