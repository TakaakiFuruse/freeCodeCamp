var _ = require('underscore');

function fearNotLetter(str) {
    return str;
}



describe('description', function() {
    it('description', function() {
        expect(fearNotLetter("abce")).toEqual("d")
        expect(fearNotLetter("abcdefghjklmno")).toEqual("i")
        expect(fearNotLetter("bcd")).toEqual(undefined)
        expect(fearNotLetter("yz")).toEqual(undefined)
    })
})
