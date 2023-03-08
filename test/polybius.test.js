// Write your tests here!
//require chai and require src/polybius
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

//describe starter
describe("polybius tests", () => {
  
    it("polybius function exists", () => {
        expect(polybius).to.exist;
    });
//encodes to number string
    it("must encode a message to a string of number pairs", () => {
        const expected = "315511243351315242";
        const actual = polybius("czarnecki");
        expect(actual).to.equal(expected);
    });
//decodes to a message
    it("must decode a string of number pairs to a message", () => {
        const expected = "czarneck(i/j)";
        const actual = polybius("315511243351315242", false);
        expect(actual).to.equal(expected);
    });
//spaces arent changed
    it("spaces stay the same when encoding", () => {
        const expected = "44324234 4234 11 44513444";
        const actual = polybius("this is a test");
        expect(actual).to.equal(expected);
    });
//capitals dont matter
    it("should ignore capital letters", () => {
        const expected = "315511243351315242";
        const actual = polybius("Czarnecki");
        expect(actual).to.equal(expected);
    });
//and decoding
    it("should maintain spaces when decoding", () => {
        const expected = "th(i/j)s (i/j)s a test";
        const actual = polybius("44324234 4234 11 44513444", false);
        expect(actual).to.equal(expected);
    });
//i and j both become 42
    it("should encode both i and j to 42", () => {
        const expected = "42542353423322 112443543341";
        const actual = polybius("jumping around");
        expect(actual).to.equal(expected);
    });
//returns with (i/j) when recieving 42
    it("should display both i and j when decoding 42", () => {
        const expected = "(i/j)ump(i/j)ng around";
        const actual = polybius("42542353423322 112443543341", false);
        expect(actual).to.equal(expected);
    });
});    