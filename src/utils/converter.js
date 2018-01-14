import romanValues from '../const/values';

export const decimalToRoman = (num) => {
  if (!num && num !== 0) {
    throw new TypeError('value required');
  } else if (Number.isNaN(Number.isNaN(Number(num))) || !Number.isInteger(num)) {
    throw new TypeError('invalid format');
  } else if (num < 1 || num >= 3999) {
    throw new RangeError('invalid range');
  }

  return romanValues.reduce(
    (acc, curr) => {
      const x = Math.floor(acc.remaining / curr.value);
      return {
        remaining: acc.remaining - (curr.value * x),
        value: acc.value + curr.roman.repeat(x),
      };
    },
    { remaining: num, value: '' },
  ).value;
};

export const romanToDecimal = (num) => {
  if (!num) {
    throw new TypeError('value required');
  } if (!num.length) {
    throw new TypeError('invalid format');
  }

  return [...num].reduce((acc, curr, index, arr) => {
    if (acc.skip) {
      return {
        value: acc.value, repeat: acc.repeat, previous: acc.previous, skip: false,
      };
    }
    let repeat = 0;
    const romanValue =
      romanValues.find(value =>
        value.roman === ((index + 1 < arr.length) && (curr + arr[index + 1])) ||
        value.roman === curr);

    if (!romanValue || romanValue.value > acc.previous) {
      throw new SyntaxError('invalid value');
    } else if (acc.previous === romanValue.value) {
      repeat = acc.repeat + 1;
      if (repeat >= 3) {
        throw new SyntaxError('invalid value');
      }
    }

    return {
      value: acc.value + romanValue.value,
      repeat,
      previous: romanValue.value,
      skip: romanValue.roman.length === 2,
    };
  }, {
    value: 0, repeat: 0, previous: 1000, skip: false,
  }).value;
};
