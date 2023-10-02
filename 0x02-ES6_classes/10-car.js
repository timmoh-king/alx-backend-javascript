/*
* implement a class named Car
* constructor attributes: brand(str) motor(str) color(str)
* each value should be stored in an underscore attribute
* add a method called cloneCar that should return a new object of the class
*/
export default class Car {
  constructor (brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand () {
    return this._brand;
  }

  set brand (value) {
    this._brand = value;
  }

  get motor () {
    return this._motor;
  }

  set motor (value) {
    this._motor = value;
  }

  get color () {
    return this._color;
  }

  set color (value) {
    this._color = value;
  }

  static get [Symbol.species] () {
    return this;
  }

  cloneCar () {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
