import RomanNumber from '../src/romanNumeral';

const testRoman = (item) => {
  describe(`with input value ${item.input}`, () => {
    if (item.error) {
      it(`should throw a ${item.error.message}`, () => {
        expect(() => new RomanNumber(item.input)).toThrowError(item.error.type, item.error.message);
      });
    } else {
      const romanNumber = new RomanNumber(item.input);
      it(`should return the roman value ${item.roman}`, () => {
        expect(romanNumber.toString()).toBe(item.roman);
      });
      it(`should return the decimal value ${item.decimal}`, () => {
        expect(romanNumber.toInt()).toBe(item.decimal);
      });
    }
  });
};

const tests = [
  {
    input: null,
    error: {
      type: TypeError,
      message: 'value required',
    },
  },
  {
    input: '',
    error: {
      type: TypeError,
      message: 'value required',
    },
  },
  {
    input: 0,
    error: {
      type: RangeError,
      message: 'invalid range',
    },
  },
  {
    input: 1,
    decimal: 1,
    roman: 'I',
  },
  {
    input: 3,
    decimal: 3,
    roman: 'III',
  },
  {
    input: 4,
    decimal: 4,
    roman: 'IV',
  },
  {
    input: 5,
    decimal: 5,
    roman: 'V',
  },
  {
    input: 'I',
    decimal: 1,
    roman: 'I',
  },
  {
    input: 'III',
    decimal: 3,
    roman: 'III',
  },
  {
    input: 'IIII',
    error: {
      type: SyntaxError,
      message: 'invalid value',
    },
  },
  {
    input: 'IV',
    decimal: 4,
    roman: 'IV',
  },
  {
    input: 'V',
    decimal: 5,
    roman: 'V',
  },
  {
    input: 1968,
    decimal: 1968,
    roman: 'MCMLXVIII',
  },
  {
    input: '1473',
    decimal: 1473,
    roman: 'MCDLXXIII',
  },
  {
    input: 2999,
    decimal: 2999,
    roman: 'MMCMXCIX',
  },
  {
    input: 3000,
    decimal: 3000,
    roman: 'MMM',
  },
  {
    input: 10000,
    error: {
      type: RangeError,
      message: 'invalid range',
    },
  },
  {
    input: 'CDXXIX',
    decimal: 429,
    roman: 'CDXXIX',
  },
  {
    input: 'CD1X',
    error: {
      type: SyntaxError,
      message: 'invalid value',
    },
  },
  {
    input: 'MCDLXXXII',
    decimal: 1482,
    roman: 'MCDLXXXII',
  },
  {
    input: 'MCMLXXX',
    decimal: 1980,
    roman: 'MCMLXXX',
  },
  {
    input: 'MMMMCMXCIX',
    error: {
      type: SyntaxError,
      message: 'invalid value',
    },
  },
  {
    input: 'MMMMDMXCIX',
    error: {
      type: SyntaxError,
      message: 'invalid value',
    },
  },
];

describe('RomanNumber', () => {
  tests.forEach(test => testRoman(test));
});
