const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius()", () => {
    it("if 'i' is entered should return 42", () => {
      const input = "i";
      const actual = polybius(input);
      const expected = "42"
      console.log(actual)

      expect(actual).to.eql(expected);
    });
  });

  describe("polybius()", () => {
    it('When decoding, it translates 42 to (i/j)', () => {
      const input = "42";
      const actual = polybius(input, false);
      const expected = "(i/j)"
      console.log(actual)

      expect(actual).to.eql(expected);
    });
  });

  describe("polybius()", () => {
    it('maintains space before and after decoding', () => {
      const input = "42 42 55";
      const actual = polybius(input, false);
      const expected = "(i/j) (i/j) z"
      console.log(actual)

      expect(actual).to.eql(expected);
    });
  });

  describe("polybius()", () => {
    it("ignores capital letters", () => {
      const input1 = "A Message";
      const input2 = "a message"
      const actual1 = polybius(input1);
      const actual2 = polybius(input2)

      expect(actual1).to.equal(actual2);
    });
  });