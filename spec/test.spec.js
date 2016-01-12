var _ = require('underscore');

function pairwise(arr, arg) {
    var resAr = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === arg) {
                resAr.push(arr.indexOf(arr[i]));
                arr[i] = NaN;
                resAr.push(arr.indexOf(arr[j]));
                arr[j] = NaN;
            }
        }
    }
    return resAr.reduce(function(a, b) {
        return a + b;
    }, 0);
}

describe('test - ', function() {
    it('1', function() {
        expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toEqual(11);
        // body...
    });
    it('2', function() {
        expect(pairwise([1, 3, 2, 4], 4)).toEqual(1);
        // body...
    });
    it('3', function() {
        expect(pairwise([1, 1, 1], 2)).toEqual(1);
        // body...
    });
    it('4', function() {
        expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toEqual(10);
        // body...
    });
    it('5', function() {
        expect(pairwise([], 100)).toEqual(0);
        // body...
    });

});
