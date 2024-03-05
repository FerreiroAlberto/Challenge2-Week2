import { longitud, substring, trim, trimEnd, trimStart } from './strings.js';

console.log(`Expected: 4` + longitud('isdi'));
console.log(`Expected: tcamp` + substring('bootcamp', 3, 10));
console.log(`Expected: abcd` + trim('  a   b    c   d       '));
console.log(`Expected:   cro  que    ta` + trimEnd('   cro  que    ta      '));
console.log(`Expected:cro  que    ta    ` + trimStart('   cro  que    ta    '));
