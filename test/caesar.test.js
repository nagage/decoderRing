const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar()", () => {
    it("it should encode a message base on shift value", () => {
      const input = "Zebra Magazine";
      const shift = 3
      const actual = caesar(input, shift);
      const expected = "cheud pdjdclqh"

      expect(actual).to.eql(expected);
    });
  });

  describe("caesar()", () => {
    it("it should return false if shift value is 0, less than -25 or greater than 25", () => {
      const input = "Zebra Magazine";
      const shift = 26
      const actual = caesar(input, shift);
      const expected = false

      expect(actual).to.equal(expected);
    });
  });

  describe("caesar()", () => {
    it("it handles shifts that go past the end of the alphabet", () => {
      const input = "z";
      const shift = 3
      const actual = caesar(input, shift);
      const expected = "c"

      expect(actual).to.equal(expected);
    });
  });

  describe("caesar()", () => {
    it("ignores capital letters", () => {
      const input1 = "A Message";
      const input2 = "a message"
      const shift = 3
      const actual1 = caesar(input1, shift);
      const actual2 = caesar(input2, shift)

      expect(actual1).to.equal(actual2);
    });
  });