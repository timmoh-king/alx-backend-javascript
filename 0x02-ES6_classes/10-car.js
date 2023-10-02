/*
* implement a class named Car
* constructor attributes: brand(str) motor(str) color(str)
* each value should be stored in an underscore attribute
* add a method called cloneCar that should return a new object of the class
*/
const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  [cloneSymbol]() {
    return new Car(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return this[cloneSymbol]();
  }
}
