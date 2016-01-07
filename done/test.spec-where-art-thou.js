var _ = require('underscore')

function where(col, src) {
    var keys = Object.keys(src)
    return col.filter(function(obj) {
        for (var j = 0; j < keys.length; j++) {
            if (!obj.hasOwnProperty(keys[j]) || obj[keys[j]] !== src[keys[j]]) {
                return false
            };
        };
        return true
    });
}


describe('description', function() {
    it('1', function() {
        expect(where([{
            first: "Romeo",
            last: "Montague"
        }, {
            first: "Mercutio",
            last: null
        }, {
            first: "Tybalt",
            last: "Capulet"
        }], {
            last: "Capulet"
        })).toEqual([{
            first: "Tybalt",
            last: "Capulet"
        }])
        expect(where([{
            "a": 1
        }, {
            "a": 1
        }, {
            "a": 1,
            "b": 2
        }], {
            "a": 1
        })).toEqual([{
            "a": 1
        }, {
            "a": 1
        }, {
            "a": 1,
            "b": 2
        }])
        expect(where([{
            "a": 1,
            "b": 2
        }, {
            "a": 1
        }, {
            "a": 1,
            "b": 2,
            "c": 2
        }], {
            "a": 1,
            "b": 2
        })).toEqual([{
            "a": 1,
            "b": 2
        }, {
            "a": 1,
            "b": 2,
            "c": 2
        }])
        expect(where([{
            "a": 1,
            "b": 2
        }, {
            "a": 1
        }, {
            "a": 1,
            "b": 2,
            "c": 2
        }], {
            "a": 1,
            "c": 2
        })).toEqual([{
            "a": 1,
            "b": 2,
            "c": 2
        }])
    })
})
