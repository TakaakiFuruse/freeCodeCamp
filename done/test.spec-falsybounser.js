var _ = require('underscore')

function bouncer(arr) {
    var arr = _.map(arr, function(item) {
        if (Boolean(item) === true) {
            return item
        }
    });
    arr = _.reject(arr, function(value) {
        return value === undefined
    });
    return arr

}

describe('description', function() {
    it('description', function() {
        expect(bouncer([7, "ate", "", false, 9])).toEqual([7, "ate", 9]);
    })
    it('description', function() {
        expect(bouncer(["a", "b", "c"])).toEqual(["a", "b", "c"]);
    })
    it('description', function() {
        expect(bouncer([false, null, 0, NaN, undefined, ""])).toEqual([]);
    })
})
