# roman-numerals

## Roman Numerals

A Roman numeral represents an integer using letters. Examples are XVII to represent 17, MCMLIII
for 1953, and MMMCCCIII for 3303. By contrast, ordinary numbers such as 17 or 1953 are called
Arabic numerals. The following table shows the Arabic equivalent of all the single-letter Roman
numerals:
* M 1000
* D 500 
* C 100
* L 50
* X 10
* V 5
* I 1


When letters are strung together, the values of the letters are just added up, with the following
exception. When a letter of smaller value is followed by a letter of larger value, the smaller value is
subtracted from the larger value. For example, IV represents 5 - 1, or 4. And MCMXCV is
interpreted as M + CM + XC + V, or 1000 + (1000 - 100) + (100 - 10) + 5, which is 1995. In standard
Roman numerals, no more than three consecutive copies of the same letter are used. Following
these rules, every number between 1 and 3999 can be represented as a Roman numeral made up
of the following one- and two-letter combinations:
* M 1000
* CM 900
* D 500
* CD 400
* C 100
* XC 90
* L 50
* XL 40
* X 10
* IX 9
* V 5
* IV 4
* I 1

## Getting Started

Install using npm

```npm install js-roman-numerals```

Import the library

```const RomanNumeral = require("js-roman-numerals")```

To create a new roman numeral use

```let num = new RomanNumeral(10)```

or

```let num = new RomanNumeral('IX')```

### Display as Roman Numeral

```num.toString()```

### Display as Integer

```num.toInt()```

## Testing

To run the tests

```npm test```
