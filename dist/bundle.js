!function(e){function r(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var n={};r.m=e,r.c=n,r.d=function(e,n,a){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=0)}([function(e,r,n){"use strict";function a(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var t=function(){function e(e,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(r,n,a){return n&&e(r.prototype,n),a&&e(r,a),r}}(),o=n(1);e.exports=function(){function e(r){if(a(this,e),!r&&0!==r)throw new TypeError("value required");Number.isNaN(Number(r))?(this.decimal=(0,o.romanToDecimal)(r),this.roman=r):(this.decimal=Number(r),this.roman=(0,o.decimalToRoman)(Number(r)))}return t(e,[{key:"toInt",value:function(){return this.decimal}},{key:"toString",value:function(){return this.roman}}]),e}()},function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.romanToDecimal=r.decimalToRoman=void 0;var a=n(2),t=function(e){return e&&e.__esModule?e:{default:e}}(a);r.decimalToRoman=function(e){if(!e&&0!==e)throw new TypeError("value required");if(Number.isNaN(Number.isNaN(Number(e)))||!Number.isInteger(e))throw new TypeError("invalid format");if(e<1||e>=3999)throw new RangeError("invalid range");return t.default.reduce(function(e,r){var n=Math.floor(e.remaining/r.value);return{remaining:e.remaining-r.value*n,value:e.value+r.roman.repeat(n)}},{remaining:e,value:""}).value},r.romanToDecimal=function(e){if(!e&&0!==e)throw new TypeError("value required");if(!e.length)throw new TypeError("invalid format");for(var r=0,n=0,a=1e3,o=0,u=function(e){return function(r){return e===r.roman}};n<e.length;){var i=void 0;if(i=n+1<e.length&&t.default.find(u(e.charAt(n)+e.charAt(n+1))))o=0,n+=2;else{if(!(i=t.default.find(u(e.charAt(n))))||i.value>a)throw new SyntaxError("invalid value");if(a===i.value){if((o+=1)>=3)throw new SyntaxError("invalid value")}else o=0;n+=1}a=i.value,r+=i.value}return r}},function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=[{roman:"M",value:1e3},{roman:"CM",value:900},{roman:"D",value:500},{roman:"CD",value:400},{roman:"C",value:100},{roman:"XC",value:90},{roman:"L",value:50},{roman:"XL",value:40},{roman:"X",value:10},{roman:"IX",value:9},{roman:"V",value:5},{roman:"IV",value:4},{roman:"I",value:1}]}]);