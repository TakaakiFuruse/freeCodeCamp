var _ = require('underscore');

function sumFibs(num) {
    var fibAr = [0, 1, 1];
    while (fibAr[fibAr.length - 1] < num + 1) {
        fibAr.push(
            fibAr[fibAr.length - 1] + fibAr[fibAr.length - 2]
        );
    }
    fibAr.pop();
    // return _.reduce(fibAr, function(memo, value) {
    //     if (value % 2 !== 0) {
    //         return memo + value;
    //     } else {
    //         return memo;
    //     }
    // }, 0);
    return fibAr.reduce(function(memo, value) {
        if (value % 2 !== 0) {
            return memo + value;
        } else {
            return memo;
        }
    });

}


describe('description', function() {
    it('description', function() {
        expect(sumFibs(1000)).toEqual(1785)
        expect(sumFibs(4000000)).toEqual(4613732)
        expect(sumFibs(4)).toEqual(5)
        expect(sumFibs(75024)).toEqual(60696)
        expect(sumFibs(75025)).toEqual(135721)
    })
})
