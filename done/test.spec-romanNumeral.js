function convert(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var resultStr = "";
    for (var i = 0; i < decimalValue.length; i++) {
        while (num >= decimalValue[i]) {
            num -= decimalValue[i]
            resultStr += romanNumeral[i]
        };
    };
    return resultStr
}


describe('description', function() {
    it('description', function() {
        expect(convert(5)).toEqual("V")
        expect(convert(9)).toEqual("IX")
        expect(convert(12)).toEqual("XII")
        expect(convert(16)).toEqual("XVI")
        expect(convert(29)).toEqual("XXIX")
        expect(convert(44)).toEqual("XLIV")
        expect(convert(45)).toEqual("XLV")
        expect(convert(68)).toEqual("LXVIII")
        expect(convert(83)).toEqual("LXXXIII")
        expect(convert(97)).toEqual("XCVII")
        expect(convert(99)).toEqual("XCIX")
        expect(convert(500)).toEqual("D")
        expect(convert(501)).toEqual("DI")
        expect(convert(649)).toEqual("DCXLIX")
        expect(convert(798)).toEqual("DCCXCVIII")
        expect(convert(891)).toEqual("DCCCXCI")
        expect(convert(1000)).toEqual("M")
        expect(convert(1004)).toEqual("MIV")
        expect(convert(1006)).toEqual("MVI")
        expect(convert(1023)).toEqual("MXXIII")
        expect(convert(2014)).toEqual("MMXIV")
        expect(convert(3999)).toEqual("MMMCMXCIX")
    })
})
