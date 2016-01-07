var _ = require('underscore')

function where(arr, num) {
    var result;
    arr.push(num)
    arr = arr.sort(function(a, b) {
        return a - b
    })
    return _.indexOf(arr, num, true);
}

describe('description', function() {
    it('1', function() {
        expect(where([10, 20, 30, 40, 50], 35)).toEqual(3)
        expect(where([10, 20, 30, 40, 50], 30)).toEqual(2)
        expect(where([40, 60], 50)).toEqual(1)
        expect(where([3, 10, 5], 3)).toEqual(0)
        expect(where([5, 3, 20, 3], 5)).toEqual(2)
        expect(where([2, 20, 10], 19)).toEqual(2)
        expect(where([2, 5, 10], 15)).toEqual(3)
    })
})
