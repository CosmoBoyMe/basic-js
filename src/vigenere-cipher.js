const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.isDirect = direct;
    this.alphabetList = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  encrypt(string, key) {
    if (!(string && key)) {
      throw new Error("Incorrect arguments!");
    }
    const { alphabetList } = this;
    const stringInUpperCase = string.toUpperCase();
    const keyInUpperCase = key.toUpperCase();

    let encryptedString = "";
    const fillingKey = keyInUpperCase.padEnd(
      stringInUpperCase.length,
      keyInUpperCase
    );

    let skippedChars = 0;
    [...stringInUpperCase].forEach((char, index) => {
      const charIndexInAlphabet = alphabetList.indexOf(char);
      const charKeyIndex = alphabetList.indexOf(
        fillingKey[index - skippedChars]
      );
      if (charIndexInAlphabet !== -1) {
        const cryptoChar =
          alphabetList[
            (charIndexInAlphabet + charKeyIndex) % alphabetList.length
          ];
        encryptedString += cryptoChar;
      } else {
        encryptedString += char;
        skippedChars += 1;
      }
    });

    return this.isDirect
      ? encryptedString
      : [...encryptedString].reverse().join("");
  }

  decrypt(string, key) {
    if (!(string && key)) {
      throw new Error("Incorrect arguments!");
    }
    const { alphabetList } = this;
    const stringInUpperCase = string.toUpperCase();
    const keyInUpperCase = key.toUpperCase();

    let decryptedString = "";
    const fillingKey = keyInUpperCase.padEnd(
      stringInUpperCase.length,
      keyInUpperCase
    );

    let skippedChars = 0;
    [...stringInUpperCase].forEach((char, index) => {
      const charIndexInAlphabet = alphabetList.indexOf(char);
      const charKeyIndex = alphabetList.indexOf(
        fillingKey[index - skippedChars]
      );
      if (charIndexInAlphabet !== -1) {
        const currentIndexInAlphabet =
          (charIndexInAlphabet - charKeyIndex) % alphabetList.length;

        decryptedString +=
          alphabetList[
            currentIndexInAlphabet < 0
              ? currentIndexInAlphabet + alphabetList.length
              : currentIndexInAlphabet
          ];
      } else {
        decryptedString += char;
        skippedChars += 1;
      }
    });
    return this.isDirect
      ? decryptedString
      : [...decryptedString].reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
