import { decimalToRoman, romanToDecimal } from './utils/converter';

module.exports = class RomanNumber {
  constructor(value) {
    if (!value && value !== 0) {
      throw new TypeError('value required');
    } else if (Number.isNaN(Number(value))) {
      this.decimal = romanToDecimal(value);
      this.roman = value;
    } else {
      this.decimal = Number(value);
      this.roman = decimalToRoman(Number(value));
    }
  }

  toInt() {
    return this.decimal;
  }

  toString() {
    return this.roman;
  }
};
