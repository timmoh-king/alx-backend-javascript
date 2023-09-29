/*
 * Import the class Currency from 3-currency.js
 * Implement a class named Pricing:
 * Constructor attributes amount(Number) currency(Currency)
 * Each value must be stored in an `underscore` attribute version
 * Implement a getter and a setter for each attribute
 * implement a method called displayFullPrice that returns
 * `amount currency_name (currency_code)`
 * Implement a static method named convertPrice that takes 2 args
 * amount(Number) and conversionRate(Number) and return the amount * conversionRate
 */

import Currency from './3-currency';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    super();
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.name} (${this.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (conversionRate * amount.amount);
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amountSize) {
    if (typeof amountSize === 'number') {
      this._amount = amountSize;
    } else {
      throw new TypeError('amount must be a number');
    }
  }

  set currency(currencyType) {
    if (typeof currencyType === 'string') {
      this._currency = currencyType;
    } else {
      throw new TypeError('currency must be a string');
    }
  }
}
