var _ = require('underscore');

function smallestCommons(arr) {
    var rangeAr = _.range(arr.sort()[0], _.last(arr.sort()) + 1);
    var num = 1;
    while (num > 0) {
        num++;
        var resAr = [];
        for (var i = 0; i < rangeAr.length; i++) {
            if (num >= rangeAr[i] && num % rangeAr[i] === 0) {
                resAr.push(i);
            }
        }
        if (resAr.length === rangeAr.length) {
            return num;
        }
    }
}

describe('1-', function() {
    it('1', function() {
        expect(smallestCommons([1, 5])).toBe(60);
    })
    it('2', function() {
        expect(smallestCommons([5, 1])).toBe(60);
    })
    it('3', function() {
        expect(smallestCommons([1, 13])).toBe(360360);
    })
})
