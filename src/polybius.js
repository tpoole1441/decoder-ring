// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const legend = [
    11, 21, 31, 41, 51, 12, 22, 32, 42, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34,
    44, 54, 15, 25, 35, 45, 55,
  ];
  function polybius(input, encode = true) {
    // create array of input that ignores caps
    let codeArray = input.toLowerCase().split("");
    // start looping through array to modify characters dependent on encode status
    if (encode) {
      for (let i = 0; i < codeArray.length; i++) {
        // rule out anyting that is not a letter
        if (
          alphabet.indexOf(codeArray[i]) >= 0 &&
          alphabet.indexOf(codeArray[i]) < 26
        ) {
          //modify characters to match legend
          codeArray[i] = legend[alphabet.indexOf(codeArray[i])];
        }
      }
      return codeArray.join("");
    } else {
      // return false if digit count is odd
      let digitsOnly = "";
      for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        if (char >= "0" && char <= "9") digitsOnly += char;
      }
      if (digitsOnly.length % 2 !== 0) return false;
      // set resulting array to push answers to
      let decodeArray = [];
      let tempIndex = [];
      // start looping through code array
      for (let i = 0; i < codeArray.length; i++) {
        if (codeArray[i] === " ") {
          decodeArray.push(codeArray[i]);
        } else {
          tempIndex.push(codeArray[i]);
          if (tempIndex.length === 2) {
            let charIndex = parseInt(tempIndex.join(""), 10);
            if (charIndex === 42) {
              decodeArray.push("(i/j)");
            } else {
              decodeArray.push(alphabet[legend.indexOf(charIndex)]);
            }
            tempIndex.length = 0;
          }
        }
      }
      return decodeArray.join("");
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
