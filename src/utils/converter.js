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
  if (!num && num !== 0) {
    throw new TypeError('value required');
  } if (!num.length) {
    throw new TypeError('invalid format');
  }

  let ret = 0;
  let index = 0;
  let previous = 1000;
  let repeat = 0;

  const findValue = char => roman => char === roman.roman;

  while (index < num.length) {
    let romanValue;
    romanValue = index + 1 < num.length &&
      romanValues.find(findValue(num.charAt(index) + num.charAt(index + 1)));
    if (romanValue) {
      repeat = 0;
      index += 2;
    } else {
      romanValue = romanValues.find(findValue(num.charAt(index)));
      if (!romanValue || romanValue.value > previous) {
        throw new SyntaxError('invalid value');
      } else if (previous === romanValue.value) {
        repeat += 1;
        if (repeat >= 3) {
          throw new SyntaxError('invalid value');
        }
      } else {
        repeat = 0;
      }
      index += 1;
    }

    previous = romanValue.value;
    ret += romanValue.value;
  }

  return ret;
};
