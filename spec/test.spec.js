var _ = require('underscore');

function fearNotLetter(str) {
    var strAr = _.toArray(str);
    var charFirst = strAr[0].charCodeAt();
    var charLast = _.last(strAr).charCodeAt();
    var charAr = _.map(strAr, function(value) {
        return value.charCodeAt()
    });
    var compareAr = _.range(charFirst, charLast + 1);
    var resultChar = _.difference(compareAr, charAr).join('');
    if (resultChar === '') {
        return undefined
    }
    return String.fromCharCode(resultChar)
}


describe('description', function() {
    it('description', function() {
        expect(fearNotLetter('abce')).toEqual('d');
        expect(fearNotLetter('abcdefghjklmno')).toEqual('i');
        expect(fearNotLetter('bcd')).toEqual(undefined);
        expect(fearNotLetter('yz')).toEqual(undefined);
    });
});
