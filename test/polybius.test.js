// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests", () => {
  it("should translate i and j to 42", () => {
    const message = "ij";
    const actual = polybius(message);
    const expected = "4242";

    expect(actual).to.equal(expected);
  });
  it("should translate 42 to (i/j)", () => {
    const message = "42";
    const actual = polybius(message, false);
    const expected = "(i/j)";

    expect(actual).to.equal(expected);
  });
  it("should ignore capitals", () => {
    const message = "AbCd";
    const actual = polybius(message);
    const expected = "11213141";

    expect(actual).to.equal(expected);
  });
  it("should maintain spaces", () => {
    const message = "ab c d";
    const actual = polybius(message);
    const expected = "1121 31 41";

    expect(actual).to.equal(expected);
  });
});
