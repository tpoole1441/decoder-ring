// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests", () => {
  it("should return false if alphabet is not 26 characters", () => {
    const alphabet = "qwertyuiopasdfghjklzxcvbn";
    const message = "hello";
    const actual = substitution(message, alphabet);

    expect(actual).to.be.false;
  });
  it("should correctly translate the given phrase", () => {
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const message = "hello";
    const actual = substitution(message, alphabet);
    const expected = "itssg";

    expect(actual).to.equal(expected);
  });
  it("should return false if alphabet contains duplicate characters", () => {
    const alphabet = "qwertyuiopasdfghjklzxcvbmm";
    const message = "hello";
    const actual = substitution(message, alphabet);

    expect(actual).to.be.false;
  });
  it("should maintain spaces in the message", () => {
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const message = "hello world";
    const actual = substitution(message, alphabet);
    const expected = "itssg vgksr";

    expect(actual).to.equal(expected);
  });
  it("should ignore capitals", () => {
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const message = "HeLlO WoRlD";
    const actual = substitution(message, alphabet);
    const expected = "itssg vgksr";

    expect(actual).to.equal(expected);
  });
});
