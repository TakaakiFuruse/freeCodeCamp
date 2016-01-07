var _ = require('underscore')

function sumAll(arr) {
    arr = arr.sort(function(a, b) {
        return a - b
    })
    var ar = _.range(arr[0], arr[1] + 1, 1)
        .reduce(function(memo, value) {
            return memo + value;
        }, 0);
    return ar
}


describe('description', function() {
    it('description', function() {
        expect(sumAll([1, 4])).toBe(10)
        expect(sumAll([4, 1])).toBe(10)
        expect(sumAll([5, 10])).toBe(45)
        expect(sumAll([10, 5])).toBe(45)
    })
})
