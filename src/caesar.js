// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // return false if shift is 0, above 25, or less than -25
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    // create array of input that ignores caps
    let codeArray = input.toLowerCase().split("");
    // start looping through array to modify characters
    for (let i = 0; i < codeArray.length; i++) {
      // rule out anyting that is not a letter
      if (
        alphabet.indexOf(codeArray[i]) >= 0 &&
        alphabet.indexOf(codeArray[i]) < 26
      ) {
        // shift characters dependent on encoding or decoding
        let shiftedIndex = 0;
        if (encode) {
          shiftedIndex =
            (alphabet.indexOf(codeArray[i]) + shift) % alphabet.length;
        } else {
          shiftedIndex =
            (alphabet.indexOf(codeArray[i]) - shift) % alphabet.length;
        }
        // handle negative values
        if (shiftedIndex < 0) shiftedIndex += alphabet.length;
        codeArray[i] = alphabet[shiftedIndex];
        // return joined code array
      }
    }
    return codeArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
