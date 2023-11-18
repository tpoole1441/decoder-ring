// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const alphabetMain = "abcdefghijklmnopqrstuvwxyz";
  // helper function for checking repeating letters
  function checkForRepeatingLetters(input) {
    const letters = {};
    for (let char of input) {
      if (letters[char]) {
        return false;
      }
      letters[char] = true;
    }
    return true;
  }
  function substitution(input, alphabet, encode = true) {
    // return false if alphabet is formatted wrong
    if (!alphabet || alphabet.length !== 26) return false;
    // return false if letters in alphabet repeat
    if (!checkForRepeatingLetters(alphabet)) return false;
    // create array of input that ignores caps
    let codeArray = input.toLowerCase().split("");
    // start looping through input and either encoding or decoding
    if (encode) {
      for (let i = 0; i < codeArray.length; i++) {
        // rule out spaces
        if (codeArray[i] !== " ") {
          //modify characters to match legend
          codeArray[i] = alphabet[alphabetMain.indexOf(codeArray[i])];
        }
      }
      return codeArray.join("");
    } else {
      for (let i = 0; i < codeArray.length; i++) {
        // rule out spaces
        if (codeArray[i] !== " ") {
          //modify characters to match legend
          codeArray[i] = alphabetMain[alphabet.indexOf(codeArray[i])];
        }
      }
      return codeArray.join("");
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
