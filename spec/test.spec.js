var _ = require('underscore')

function convert(str) {
    // &colon;&rpar;
    return str;
}

describe('description', function() {
    it('1', function() {
        expect(convert("Dolce & Gabbana")).toEqual("Dolce & ​amp; Gabbana");
        expect(convert("Hamburgers < Pizza < Tacos")).toEqual("Hamburgers & ​lt; Pizza & ​lt; Tacos");
        expect(convert("Sixty > twelve")).toEqual("Sixty & ​gt; twelve");
        expect(convert('Stuff in "quotation marks"')).toEqual("Stuff in & ​quot; quotation marks & ​quot;");
        expect(convert("Shindler's List")).toEqual("Shindler & ​apos; s List");
        expect(convert("<>")).toEqual(" & ​lt; & ​gt;");
        expect(convert("abc")).toEqual("abc");
    })
})
