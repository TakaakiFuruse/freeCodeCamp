var _ = require('underscore')

function destroyer(arg) {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 1; i < args.length; i++) {
        args[0] = _.reject(args[0], function(value) {
            return value === args[i]
        });
    };
    return args[0]
}

describe('description', function() {
    it('1', function() {
        expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
        expect(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
        expect(destroyer([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1]);
        expect(destroyer([2, 3, 2, 3], 2, 3)).toEqual([]);
        expect(destroyer(["tree", "hamburger", 53], "tree", 53)).toEqual(["hamburger"]);
    })
})
