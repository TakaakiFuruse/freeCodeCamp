function add() {
    var argOut = arguments;

    //Check all arguements and return undefined
    //if the arg is not a number.
    for (var i = 0; i < argOut.length; i++) {
        if (typeof(argOut[i]) !== 'number') {
            return undefined;
        }
    };
    //If second argument exists, just add and return.
    if (argOut['1'] !== undefined) {
        return argOut['0'] + argOut['1'];
    }

    //Deal with add(2)(3) calculation by using closure
    return function() {
        var argIn = arguments;
        if (typeof(argIn['0']) !== 'number') {
            return undefined;
        }
        return argIn['0'] + argOut['0'];
    };
}

describe('1-', function() {
    it('1', function() {
        expect(add(2, 3)).toBe(5)
    })
    it('2', function() {
        expect(add("http://bit.ly/IqT6zt")).toBe(undefined)
    })
    it('3', function() {
        expect(add(2, "3")).toBe(undefined)
    })
    it('4', function() {
        expect(add(2)([3])).toBe(undefined)
    })
    it('5', function() {
        expect(add(2)(3)).toBe(5)
    })

})
