var _ = require('underscore');

function fearNotLetter(str) {
    var strAr = _.toArray(str);
    var charFirst = strAr[0].charCodeAt();
    var charLast = strAr[str.length - 1].charCodeAt();
    var charAr = _.map(strAr, function(value) {
        return value.charCodeAt()
    });
    var compareAr = _.range(charFirst, charLast, 1);
    var resultChar = _.difference(charAr, compareAr).join("");
    console.log(resultChar)
    return String.fromCharCode(resultChar)
}

// charAr[]
// charAr << each charCode
// char1 = str.split("")[0].charCodeAt()
// char2 = str.split("")[a.length-1].charCodeAt()
// [char1..char2] diff chararr
// return diff result


describe('description', function() {
    it('description', function() {
        expect(fearNotLetter("abce")).toEqual("d");
        expect(fearNotLetter("abcdefghjklmno")).toEqual("i");
        expect(fearNotLetter("bcd")).toEqual(undefined);
        expect(fearNotLetter("yz")).toEqual(undefined);
    });
});
