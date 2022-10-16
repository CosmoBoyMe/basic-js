const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */

 function isMAC48Address(n) {
  const validDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
  const filteredMacAddress = [...n].filter((item) => item !== '-');
  const isLengthOfPairsValid = filteredMacAddress.length === 12;
  if(!isLengthOfPairsValid) return false;
  for(let index = 0; index < filteredMacAddress.length - 1; index += 1) {
    if(!validDigits.includes(filteredMacAddress[index])) {
      return false
    }
  }
  
  return true;
}

module.exports = {
  isMAC48Address
};
