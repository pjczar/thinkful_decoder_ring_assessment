// Write your tests here!
//require chai and src/caesar
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");
//describe starter


describe("caesar coding and decoding tests", () => {
  
//does the function exist
    it("caesar function exists", () => {
        expect(caesar).to.exist;
});
//does it code the message when told how much to shift
  it("must encode a message when provided a shift amount", () => {
        const expected = "fcduqhfnl";
        const actual = caesar("czarnecki", 3);
        expect(actual).to.equal(expected);
    });
  
//does it decode the message by doing the shift in reverse
  it("must decode a message by shifting the letters the same amount in reverse", () => {
        const expected = "czarnecki";
        const actual = caesar("fcduqhfnl", 3, false);
        expect(actual).to.equal(expected);
    });
//if no shift arg
  it("must return false if shift is empty", () =>{
        const actual = caesar("fcduqhfnl");
        expect(actual).to.be.false;
  });
//if shift arg is 0
  it("must return false if shift is 0", () =>{
        const actual = caesar("fcduqhfnl", 0);
        expect(actual).to.be.false;
  });
//if shift arg is more than 25
  it("must return false if shift is greater than 25", () =>{
        const actual = caesar("fcduqhfnl", 26);
        expect(actual).to.be.false;
  });
//if shift arg is more less than negative 25
  it("must return false if shift is less than -25", () =>{
        const actual = caesar("fcduqhfnl", -26);
        expect(actual).to.be.false;
  }); 
//does it work even when the shifting goes too far
  it("must encode a message even if the shift goes too far past the end of the alphabet array", () => {
        const expected = "fcduqhfnl";
        const actual = caesar("czarnecki", 3);
        expect(actual).to.equal(expected);
    });
// and when decoding
  it("must decode a message even if the shift goes too far past the end of the alphabet array", () => {
        const expected = "czarnecki";
        const actual = caesar("fcduqhfnl", 3, false);
        expect(actual).to.equal(expected);
  });
//ignores the capitals
  it("must ignore capital letters", () => {
        const expected = "javascript";
        const actual = caesar("MDYDVFULSW", 3, false);
        expect(actual).to.equal(expected);
  });
//doesnt affect the non latin letters when encoding
  it("must leave spaces and other symbols alone when encoding", () => {
        const expected = "zkb lv mdydvfulsw vr kdug?";
        const actual = caesar("why is javascript so hard?", 3);
        expect(actual).to.equal(expected);
  });
// or decoding
  it("must leave spaces and other symbols alone when decoding", () => {
        const expected = "why is javascript so hard?";
        const actual = caesar("zkb lv mdydvfulsw vr kdug?", 3, false);
        expect(actual).to.equal(expected);
  });
})