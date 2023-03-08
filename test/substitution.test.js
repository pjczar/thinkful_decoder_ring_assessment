//info, requires and stuff
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

//describe starter, function exists
describe("substitution", () => {
    it("substitution function exists", () => {
        expect(substitution).to.exist;
    });
//does it replace letters
    it("must encode the message by substitution of characters from an alphabet", () => {
        const expected = "yvxhfmysu";
        const actual = substitution("czarnecki", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
//it has to be 26 letters like the alphabet or it doesnt work
    it("must return false if the alphabet argument isn't 26 characters in length", () => {
        const actual = substitution("czarnecki", "xoyqmcgrukswathdjpzibe");
        expect(actual).to.be.false;
    });
//it should fail if the alphabet has dupes
    it("must return false if not all characters in alphabet argument aren't unique", () => {
        const actual = substitution("czarnecki", "xoyqmcgrukswaflnthdjpzibez");
        expect(actual).to.be.false;
    });
//capitalization doesnt matter
    it("must ignore capital letters", () => {
        const expected = "yvxhfmysu";
        const actual = substitution("Czarnecki", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
//even if the alphabet is abnormal
    it("must encode, even when alphabet contains non-normal characters", () => {
        const expected = "kpañufg xhlpfq";
        const actual = substitution("jumping around", "xoyqmcgrukswaflñthdjpzibev");
        expect(actual).to.equal(expected);
    });
//and while decoding with abnormal letters
    it("must decode, even when alphabet contains non-normal characters", () => {
        const expected = "jumping around";
        const actual = substitution("kpañufg xhlpfq", "xoyqmcgrukswaflñthdjpzibev", false);
        expect(actual).to.equal(expected);
    });
//spaces are carried over
    it("must carry over spaces when encoding", () => {
        const expected = "jrud ud x jmdj";
        const actual = substitution("this is a test", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
//and when decoding
    it("must carry over spaces when decoding", () => {
        const expected = "this is a test";
        const actual = substitution("jrud ud x jmdj", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });
});    