var _ = require('underscore')

function rot13(str) {
    var arr = str.split("")
    var resultAr = [];
    for (var i = 0; i < arr.length; i++) {
        var n = arr[i].charCodeAt("");
        if (arr[i].match(/\?|\!|\.|\s/)) {
            resultAr.push(arr[i])
        } else if (n + 13 > 90) {
            var num = n + 12 - 90 + 65;
            resultAr.push(String.fromCharCode(num))
        } else {
            var num = n + 13
            resultAr.push(String.fromCharCode(num))
        };
    };
    return resultAr.join("")
}

describe('description', function() {
    it('1', function() {
        expect(rot13("SERR PBQR PNZC")).toEqual("FREE CODE CAMP")
    })
    it('2', function() {
        expect(rot13("SERR CVMMN!")).toEqual("FREE PIZZA!")
    })
    it('3', function() {
        expect(rot13("SERR YBIR?")).toEqual("FREE LOVE?")
    })
    it('4', function() {
        expect(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")).toEqual("THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.")
    })
})
