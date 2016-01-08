var _ = require('underscore')

// function unite(arr) {
//     var argAr = [];
//     for (var i = 0; i < arguments.length; i++) {
//         argAr.push(arguments[i])
//     };
//     return _.union(_.flatten(argAr, true))
// }

function unite(arr) {
    var argAr = [];
    for (var i = 0; i < arguments.length; i++) {
        argAr.push(arguments[i])
    };
    return _.union(_.flatten(argAr, true))
}


describe('description', function() {
    it('1', function() {
        expect(unite([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([1, 3, 2, 5, 4])
        expect(unite([1, 3, 2], [1, [5]], [2, [4]])).toEqual([1, 3, 2, [5],
            [4]
        ])
        expect(unite([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5])
        expect(unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([1, 2, 3, 5, 4, 6, 7, 8])

    })
})
