var _ = require('underscore')

function sym(args) {
    var argAr = Array.prototype.slice.call(arguments);
    var resAR = [];
    resAR.push(
        _.difference(arguments[0], arguments[1])
    );
    resAR.push(
        _.difference(arguments[1], arguments[0])
    );
    return _.flatten(resAR);;
}

describe('test - ', function() {
    it('1', function() {
        expect(sym([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 5, 4])
    });
    it('2', function() {
        expect(sym([1, 2, 5], [2, 3, 5], [3, 4, 5])).toEqual([1, 4, 5])
    });
    it('3', function() {
        expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toEqual([1, 4, 5])
    });
    it('4', function() {
        expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).toEqual([7, 4, 6, 2, 3])
    });
    it('5', function() {
        expect(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).toEqual([1, 2, 5, 6, 7, 8, 9])
    });
});
