/*
 * implement a class named Currency
 * constructor attributes: code(String) name(String)
 * Each attribute must be stored in an 'underscore version'
 * implement a getter and setter attribute
 * implement a method named displayFullCurrency that will return
 * the attributes in the following format name(code).
 */

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(codeCurrency) {
    if (codeCurrency === 'string') {
      this._code = codeCurrency;
    } else {
      throw new TypeError('code must be a string');
    }
  }

  set name(currencyName) {
    if (currencyName === 'string') {
      this._name = currencyName;
    } else {
      throw new TypeError('name must be a string');
    }
  }
}
