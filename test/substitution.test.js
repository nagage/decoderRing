const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution()", () => {
    it("if alphabet != 26 returns false", () => {
      const input = "i";
      const alphabet ="short"
      const actual = substitution(input, alphabet);
      const expected = false
      console.log(actual)

      expect(actual).to.eql(expected);
    });
  });

  describe("substitution()", () => {
    it("correctly translates phrase based on alphabet", () => {
      const input = "thinkful";
      const alphabet ="xoyqmcgrukswaflnthdjpzibev"
      const actual = substitution(input, alphabet);
      const expected = "jrufscpw"
      console.log(actual)

      expect(actual).to.eql(expected);
    });
  });

  describe("substitution()", () => {
    it("return false if there are duplicate characters", () => {
      const input = "thinkful";
      const alphabet ="xoyqmcgrukswaflnthdjpzzbev"
      const actual = substitution(input, alphabet);
      const expected = false
      console.log(actual)

      expect(actual).to.eql(expected);
    });
  });

  describe("substitution()", () => {
    it("maintains space before and after decoding", () => {
      const input = "You are an excellent spy";
      const alphabet ="xoyqmcgrukswaflnthdjpzibev"
      const actual = substitution(input, alphabet);
      const expected = 'elp xhm xf mbymwwmfj dne'
      console.log(actual)

      expect(actual).to.eql(expected);
    });
  });

  describe("substitution()", () => {
    it("ignores capital letters", () => {
      const input1 = "A Message";
      const input2 = "a message"
      const alphabet = "xoyqmcgrukswaflnthdjpzibev"
      const actual1 = substitution(input1, alphabet);
      const actual2 = substitution(input2, alphabet)

      expect(actual1).to.equal(actual2);
    });
  });