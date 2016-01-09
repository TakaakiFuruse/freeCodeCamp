var _ = require('underscore');

function sumFibs(num) {
    var fibs = new Fibonaccier(num);
    console.log(fibs)
}

function Fibonaccier(num) {
    this.numAr = [];
    this.fibNums = this.fibCalc(num);
    this.fibOdds = this.fibOdds();
    this.fibOddsSum = this.fibOddsSum();
}

Fibonaccier.prototype.fibCalc = function(num) {
    this.numAr = [0, 1]
    for (var i = 1; i < num; i++) {
        f = this.numAr[this.numAr.length - 1] + this.numAr[this.numAr - 2]
        this.numAr.push(f)
    }
}

Fibonaccier.prototype.fibOdds = function() {
    return this.numAr.filter(function(elm) {
        return elm % 2 !== 0;
    });
}

Fibonaccier.prototype.fibOddsSum = function() {
    return _.reduce(this.fibOdds, function(memo, value) {
        return memo + value;
    }, 0);
}
describe('description', function() {
    it('description', function() {
        expect(sumFibs(13)).toEqual('99')
            // expect(sumFibs(1000)).toEqual(1785)
            // expect(sumFibs(4000000)).toEqual(4613732)
            // expect(sumFibs(4)).toEqual(5)
            // expect(sumFibs(75024)).toEqual(60696)
            // expect(sumFibs(75025)).toEqual(135721)
    })
})
