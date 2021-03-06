var _ = require('underscore');

function fearNotLetter(str) {
    var strAr = _.toArray(str);
    var charFirst = strAr[0].charCodeAt();
    var charLast = _.last(strAr).charCodeAt();
    var charAr = _.map(strAr, function(value) {
        return value.charCodeAt();
    });
    var compareAr = _.range(charFirst, charLast + 1);
    var resultChar = _.difference(compareAr, charAr).join('');
    if (resultChar === '') {
        return undefined;
    }
    return String.fromCharCode(resultChar);
}

// function fearNotLetter(str) {

//   for(var i = 0; i < str.length; i++) {
//     /* code of current character */
//     var code = str.charCodeAt(i);
//     // if code of current character is not equal to first charcter + no of iteration
//     hence character has been escaped
//     if ( code !== str.charCodeAt(0) + i) {
//       /* if current character has escaped one character find previous char and return*/
//       return String.fromCharCode(code-1);
//     }
//   }
//   return undefined;
// }

function Runner(str) {
    this.strAr = _.toArray(str);
    this.charFirst = this.strAr[0].charCodeAt();
    this.charLast = _.last(this.strAr).charCodeAt();
    this.charAr = this.generateCharAr();
    this.compareAr = this.generateCompAr();
    this.resultChar = this.generateResuChar();
}

Runner.prototype.generateCharAr = function() {
    return _.map(this.strAr, function(value) {
        return value.charCodeAt();
    });
};

Runner.prototype.generateCompAr = function() {
    return _.range(this.charFirst, this.charLast);
};

Runner.prototype.generateResuChar = function() {
    return _.difference(this.compareAr, this.charAr).join('');
};

function fearNotLetter(str) {
    var doRun = new Runner(str);
    if (doRun.resultChar === '') {
        return undefined;
    }
    return String.fromCharCode(doRun.resultChar);
}


describe('description', function() {
    it('description', function() {
        expect(fearNotLetter('abce')).toEqual('d');
        expect(fearNotLetter('abcdefghjklmno')).toEqual('i');
        expect(fearNotLetter('bcd')).toEqual(undefined);
        expect(fearNotLetter('yz')).toEqual(undefined);
    });
});
