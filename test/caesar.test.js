// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar tests", () => {
  it("should return false if the shift amount is 0", () => {
    const message = "Hello World!";
    const shift = 0;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
  it("should return false if the shift amount is above 25", () => {
    const message = "Hello World!";
    const shift = 26;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
  it("should return false if the shift amount is less than -25", () => {
    const message = "Hello World!";
    const shift = -26;
    const actual = caesar(message, shift);

    expect(actual).to.be.false;
  });
  it("should ignore capital letters", () => {
    const message = "aAbBcC";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "ddeeff";

    expect(actual).to.equal(expected);
  });
  it("should handle shifts that go past the end of the alphabet", () => {
    const message = "xyz";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "abc";

    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and other symbols", () => {
    const message = "abc !@#";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "def !@#";

    expect(actual).to.equal(expected);
  });
});
